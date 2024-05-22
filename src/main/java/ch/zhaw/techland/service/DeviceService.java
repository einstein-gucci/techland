package ch.zhaw.techland.service;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ch.zhaw.techland.model.Device;
import ch.zhaw.techland.model.DeviceState;
import ch.zhaw.techland.repository.DeviceRepository;
import ch.zhaw.techland.repository.VermieterRepository;
import ch.zhaw.techland.model.Vermieter;

@Service
public class DeviceService {

    @Autowired
    DeviceRepository deviceRepository;

    @Autowired
    VermieterRepository vermieterRepository;

    public Optional<Device> assignDevice(String deviceId, String vermieterEmail) {
        Optional<Device> deviceToAssign = deviceRepository.findById(deviceId);
        if (deviceToAssign.isPresent()) {
            Device device = deviceToAssign.get();
            if (device.getDeviceState() == DeviceState.Verfügbar) {
                Vermieter vermieter = vermieterRepository.findFirstByEmail(vermieterEmail);
                if (vermieter != null) {
                    device.setDeviceState(DeviceState.Vermietet);
                    device.setVermieterId(vermieter.getId());
                    deviceRepository.save(device);
                    return Optional.of(device);
                }
            }
        }
        return Optional.empty();
    }

    public Optional<Device> completeDevice(String deviceId, String vermieterEmail) {
        Optional<Device> deviceToComplete = deviceRepository.findById(deviceId);
        if (deviceToComplete.isPresent()) {
            Device device = deviceToComplete.get();
            if (device.getDeviceState() == DeviceState.Vermietet) {
                Vermieter vermieter = vermieterRepository.findFirstByEmail(vermieterEmail);
                if (vermieter != null) {
                    if (device.getVermieterId().equals(vermieter.getId())) {
                        device.setDeviceState(DeviceState.Retourniert);
                        deviceRepository.save(device);
                        return Optional.of(device);
                    }
                }
            }
        }
        return Optional.empty();
    }
}

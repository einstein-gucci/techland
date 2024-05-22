package ch.zhaw.techland.controller;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ch.zhaw.techland.model.Device;
import ch.zhaw.techland.model.DeviceStateChangeDTO;
import ch.zhaw.techland.service.DeviceService;

@RestController
@RequestMapping("/api/service")
public class ServiceController {

    @Autowired
    DeviceService deviceService;

    @PutMapping("/assignDevice")
    public ResponseEntity<Device> assignDevice(@RequestBody DeviceStateChangeDTO changeS) {
        String vermieterEmail = changeS.getVermieterEmail();
        String deviceId = changeS.getDeviceId();
        Optional<Device> device = deviceService.assignDevice(deviceId, vermieterEmail);
        if (device.isPresent()) {
            return new ResponseEntity<>(device.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PutMapping("/completeDevice")
    public ResponseEntity<Device> completeDevice(@RequestBody DeviceStateChangeDTO changeS) {
        String vermieterEmail = changeS.getVermieterEmail();
        String deviceId = changeS.getDeviceId();
        Optional<Device> device = deviceService.completeDevice(deviceId, vermieterEmail);
        if (device.isPresent()) {
            return new ResponseEntity<>(device.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}

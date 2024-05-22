package ch.zhaw.techland.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import ch.zhaw.techland.model.Device;
import ch.zhaw.techland.model.DeviceCreateDTO;
import ch.zhaw.techland.repository.DeviceRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class DeviceController {

    @Autowired
    DeviceRepository deviceRepository;

    @PostMapping("/device")
    public ResponseEntity<Device> createDevice(@RequestBody DeviceCreateDTO dDTO) {
        Device dDAO = new Device(dDTO.getName(), dDTO.getDescription(), dDTO.getDeviceType(), dDTO.getMietpreis());
        dDAO.setVermieterId(dDTO.getVermieterId());
        Device d = deviceRepository.save(dDAO);
        return new ResponseEntity<>(d, HttpStatus.CREATED);
    }

    @GetMapping("/device")
    public ResponseEntity<List<Device>> getAllDevices() {
        List<Device> allDevices = deviceRepository.findAll();
        return new ResponseEntity<>(allDevices, HttpStatus.OK);
    }

    @GetMapping("/device/{id}")
    public ResponseEntity<Device> getDeviceById(@PathVariable String id) {
        Optional<Device> optDevice = deviceRepository.findById(id);
        if (optDevice.isPresent()) {
            return new ResponseEntity<>(optDevice.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}

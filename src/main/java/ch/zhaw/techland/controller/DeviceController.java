package ch.zhaw.techland.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import ch.zhaw.techland.model.Device;
import ch.zhaw.techland.model.DeviceCreateDTO;
import ch.zhaw.techland.model.DeviceStateAggregation;
import ch.zhaw.techland.repository.DeviceRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class DeviceController {

    @Autowired
    DeviceRepository deviceRepository;

    @PostMapping("/device")
    public ResponseEntity<Device> createDevice(@RequestBody DeviceCreateDTO dDTO, @AuthenticationPrincipal Jwt jwt) {
        List<String> userRoles = jwt.getClaimAsStringList("user_roles");
        if (!userRoles.contains("admin")) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
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

    @GetMapping("/device/mietpreis")
    public ResponseEntity<List<Device>> getDevicesByMietpreis(
            @RequestParam(required = false) Double max,
            @RequestParam(required = false) Double min) {
        List<Device> devices;
        if (max != null) {
            devices = deviceRepository.findByMietpreisLessThan(max);
        } else if (min != null) {
            devices = deviceRepository.findByMietpreisGreaterThanEqual(min);
        } else {
            devices = deviceRepository.findAll();
        }
        return new ResponseEntity<>(devices, HttpStatus.OK);
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

    @GetMapping("/device/aggregation/state")
    public List<DeviceStateAggregation> getDeviceStateAggregation() {
        return deviceRepository.getDeviceStateAggregation();
    }
}

package ch.zhaw.techland.controller;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ch.zhaw.techland.model.Device;
import ch.zhaw.techland.model.DeviceStateChangeDTO;
import ch.zhaw.techland.model.DeviceState;
import ch.zhaw.techland.service.DeviceService;
import ch.zhaw.techland.service.MailService;
import ch.zhaw.techland.service.RoleService;
import ch.zhaw.techland.model.Mail;

@RestController
@RequestMapping("/api/service")
public class ServiceController {

    @Autowired
    DeviceService deviceService;

    @Autowired
    RoleService roleService;

    @Autowired
    MailService mailService;

    @PutMapping("/assignDevice")
    public ResponseEntity<Device> assignDevice(
            @RequestBody DeviceStateChangeDTO changeS,
            @AuthenticationPrincipal Jwt jwt) {
        if (!roleService.hasRole("admin", jwt)) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        String vermieterEmail = changeS.getVermieterEmail();
        String deviceId = changeS.getDeviceId();
        Optional<Device> device = deviceService.assignDevice(deviceId, vermieterEmail);
        if (device.isPresent()) {
            sendMail(vermieterEmail, device);
            return new ResponseEntity<>(device.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PutMapping("/completeDevice")
    public ResponseEntity<Device> completeDevice(
            @RequestBody DeviceStateChangeDTO changeS,
            @AuthenticationPrincipal Jwt jwt) {
        if (!roleService.hasRole("admin", jwt)) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        String vermieterEmail = changeS.getVermieterEmail();
        String deviceId = changeS.getDeviceId();
        Optional<Device> device = deviceService.completeDevice(deviceId, vermieterEmail);
        if (device.isPresent()) {
            sendMail(vermieterEmail, device);
            return new ResponseEntity<>(device.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PutMapping("/me/assignDevice")
    public ResponseEntity<Device> assignToMe(
            @RequestParam String deviceId,
            @AuthenticationPrincipal Jwt jwt) {
        String userEmail = jwt.getClaimAsString("email");
        Optional<Device> device = deviceService.assignDevice(deviceId, userEmail);
        if (device.isPresent()) {
            sendMail(userEmail, device);
            return new ResponseEntity<>(device.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PutMapping("/me/completeDevice")
    public ResponseEntity<Device> completeMyDevice(
            @RequestParam String deviceId,
            @AuthenticationPrincipal Jwt jwt) {
        String userEmail = jwt.getClaimAsString("email");
        Optional<Device> device = deviceService.completeDevice(deviceId, userEmail);
        if (device.isPresent()) {
            sendMail(userEmail, device);
            return new ResponseEntity<>(device.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    private void sendMail(String email, Optional<Device> device) {
        var mail = new Mail();
        mail.setTo(email);
        mail.setSubject("Assigned device " + device.get().getName() + " with status " + device.get().getDeviceState());

        String mailMessage = "Hi, the device " + device.get().getName() + " was assigned to you. The new status is "
                + device.get().getDeviceState();
        if (device.isPresent() && device.get().getDeviceState().equals(DeviceState.Retourniert)) {
            mailMessage = "Hi, the device " + device.get().getName() + " was marked as "
                    + device.get().getDeviceState();
        }
        mail.setMessage(mailMessage);
        mailService.sendMail(mail);
    }
}

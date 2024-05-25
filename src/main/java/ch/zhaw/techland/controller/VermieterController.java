package ch.zhaw.techland.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;

import ch.zhaw.techland.model.Vermieter;
import ch.zhaw.techland.model.VermieterCreateDTO;
import ch.zhaw.techland.repository.VermieterRepository;
import ch.zhaw.techland.service.MailValidatorService;
import ch.zhaw.techland.service.RoleService;

import java.util.Optional;

@RestController
@RequestMapping("/api")
public class VermieterController {

    @Autowired
    VermieterRepository vermieterRepository;

    @Autowired
    RoleService roleService;

    @Autowired
    MailValidatorService mailValidatorService;

    @PostMapping("/vermieter")
    public ResponseEntity<Vermieter> createVermieter(@RequestBody VermieterCreateDTO vDTO,
            @AuthenticationPrincipal Jwt jwt) {
        // Überprüfen, ob der Benutzer die Rolle "admin" hat
        if (!roleService.hasRole("admin", jwt)) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

        // E-Mail-Validierung
        var mailInformation = mailValidatorService.validateEmail(vDTO.getEmail());
        if (mailInformation.isDisposable() || !mailInformation.isDns() || !mailInformation.isFormat()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        // Erstellen und Speichern des Vermieters
        Vermieter vDAO = new Vermieter(vDTO.getEmail(), vDTO.getName());
        Vermieter v = vermieterRepository.save(vDAO);
        return new ResponseEntity<>(v, HttpStatus.CREATED);
    }

    @GetMapping("/vermieter")
    public ResponseEntity<Page<Vermieter>> getAllVermieter(
            @RequestParam(required = false, defaultValue = "1") int pageNumber,
            @RequestParam(required = false, defaultValue = "4") int pageSize) {
        PageRequest pageRequest = PageRequest.of(pageNumber - 1, pageSize);
        Page<Vermieter> vermietersPage = vermieterRepository.findAll(pageRequest);
        return new ResponseEntity<>(vermietersPage, HttpStatus.OK);
    }

    @GetMapping("/vermieter/{id}")
    public ResponseEntity<Vermieter> getVermieterById(@PathVariable String id) {
        Optional<Vermieter> optVermieter = vermieterRepository.findById(id);
        if (optVermieter.isPresent()) {
            return new ResponseEntity<>(optVermieter.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/me/vermieter")
    public ResponseEntity<Vermieter> getMyVermieterId(@AuthenticationPrincipal Jwt jwt) {
        String userEmail = jwt.getClaimAsString("email");
        Vermieter vermieter = vermieterRepository.findFirstByEmail(userEmail);
        if (vermieter != null) {
            return new ResponseEntity<>(vermieter, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}

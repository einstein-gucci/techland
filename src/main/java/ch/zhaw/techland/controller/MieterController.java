package ch.zhaw.techland.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;

import ch.zhaw.techland.model.Mieter;
import ch.zhaw.techland.model.MieterCreateDTO;
import ch.zhaw.techland.repository.MieterRepository;
import ch.zhaw.techland.service.MailValidatorService;
import ch.zhaw.techland.service.RoleService;

import java.util.Optional;

@RestController
@RequestMapping("/api")
public class MieterController {

    @Autowired
    MieterRepository mieterRepository;

    @Autowired
    RoleService roleService;

    @Autowired
    MailValidatorService mailValidatorService;

    @PostMapping("/mieter")
    public ResponseEntity<Mieter> createMieter(@RequestBody MieterCreateDTO mDTO, @AuthenticationPrincipal Jwt jwt) {
        // Überprüfen, ob der Benutzer die Rolle "admin" hat
        if (!roleService.hasRole("admin", jwt)) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

        // E-Mail-Validierung
        var mailInformation = mailValidatorService.validateEmail(mDTO.getEmail());
        if (mailInformation.isDisposable() || !mailInformation.isDns() || !mailInformation.isFormat()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        // Erstellen und Speichern des Mieters
        Mieter mDAO = new Mieter(mDTO.getEmail(), mDTO.getName());
        Mieter m = mieterRepository.save(mDAO);
        return new ResponseEntity<>(m, HttpStatus.CREATED);
    }

    @GetMapping("/mieter")
    public ResponseEntity<Page<Mieter>> getAllMieter(
            @RequestParam(required = false, defaultValue = "1") int pageNumber,
            @RequestParam(required = false, defaultValue = "4") int pageSize) {
        PageRequest pageRequest = PageRequest.of(pageNumber - 1, pageSize);
        Page<Mieter> mietersPage = mieterRepository.findAll(pageRequest);
        return new ResponseEntity<>(mietersPage, HttpStatus.OK);
    }

    @GetMapping("/mieter/{id}")
    public ResponseEntity<Mieter> getMieterById(@PathVariable String id) {
        Optional<Mieter> optMieter = mieterRepository.findById(id);
        if (optMieter.isPresent()) {
            return new ResponseEntity<>(optMieter.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/me/mieter")
    public ResponseEntity<Mieter> getMyMieterId(@AuthenticationPrincipal Jwt jwt) {
        String userEmail = jwt.getClaimAsString("email");
        Mieter mieter = mieterRepository.findFirstByEmail(userEmail);
        if (mieter != null) {
            return new ResponseEntity<>(mieter, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}

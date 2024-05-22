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
import ch.zhaw.techland.model.Vermieter;
import ch.zhaw.techland.model.VermieterCreateDTO;
import ch.zhaw.techland.repository.VermieterRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class VermieterController {

    @Autowired
    VermieterRepository vermieterRepository;

    @PostMapping("/vermieter")
    public ResponseEntity<Vermieter> createVermieter(@RequestBody VermieterCreateDTO vDTO) {
        Vermieter vDAO = new Vermieter(vDTO.getEmail(), vDTO.getName());
        Vermieter v = vermieterRepository.save(vDAO);
        return new ResponseEntity<>(v, HttpStatus.CREATED);
    }

    @GetMapping("/vermieter")
    public ResponseEntity<List<Vermieter>> getAllVermieter() {
        List<Vermieter> allVermieter = vermieterRepository.findAll();
        return new ResponseEntity<>(allVermieter, HttpStatus.OK);
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
}

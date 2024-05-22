package ch.zhaw.techland.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import ch.zhaw.techland.model.Vermieter;

public interface VermieterRepository extends MongoRepository<Vermieter, String> {
    Vermieter findFirstByEmail(String email);
}

package ch.zhaw.techland.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import ch.zhaw.techland.model.Mieter;

public interface MieterRepository extends MongoRepository<Mieter, String> {
    Mieter findFirstByEmail(String email);
}

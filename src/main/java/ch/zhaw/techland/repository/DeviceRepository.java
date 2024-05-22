package ch.zhaw.techland.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import ch.zhaw.techland.model.Device;

public interface DeviceRepository extends MongoRepository<Device, String> {
}

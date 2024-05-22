package ch.zhaw.techland.repository;

import java.util.List;
import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;
import ch.zhaw.techland.model.Device;
import ch.zhaw.techland.model.DeviceStateAggregation;

public interface DeviceRepository extends MongoRepository<Device, String> {
    List<Device> findByMietpreisLessThan(Double mietpreis);

    List<Device> findByMietpreisGreaterThanEqual(Double mietpreis);

    @Aggregation("{$group: {_id: '$deviceState', deviceIds: {$push: '$_id'}, count: {$sum: 1}}}")
    List<DeviceStateAggregation> getDeviceStateAggregation();
}

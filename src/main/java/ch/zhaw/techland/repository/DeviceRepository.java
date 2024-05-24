package ch.zhaw.techland.repository;

import java.util.List;
import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import ch.zhaw.techland.model.Device;
import ch.zhaw.techland.model.DeviceStateAggregation;

public interface DeviceRepository extends MongoRepository<Device, String> {
    Page<Device> findByMietpreisLessThan(Double mietpreis, Pageable pageable);

    Page<Device> findByMietpreisGreaterThanEqual(Double mietpreis, Pageable pageable);

    Page<Device> findByDeviceType(String deviceType, Pageable pageable);

    Page<Device> findByDeviceTypeAndMietpreisGreaterThanEqual(String deviceType, Double mietpreis, Pageable pageable);

    @Aggregation("{$group: {_id: '$deviceState', deviceIds: {$push: '$_id'}, count: {$sum: 1}}}")
    List<DeviceStateAggregation> getDeviceStateAggregation();
}

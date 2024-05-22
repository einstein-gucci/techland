package ch.zhaw.techland.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Getter;
import lombok.Setter;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.NoArgsConstructor;

@Getter
@Setter
@RequiredArgsConstructor
@NoArgsConstructor
@Document("device")
public class Device {
    @Id
    private String id;

    @NonNull
    private String name;

    @NonNull
    private String description;

    @NonNull
    private DeviceType deviceType;

    @NonNull
    private Double mietpreis;

    private String vermieterId;

    private DeviceState deviceState = DeviceState.Verfügbar;
}

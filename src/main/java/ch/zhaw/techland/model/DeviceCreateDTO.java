package ch.zhaw.techland.model;

import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class DeviceCreateDTO {
    private String name;
    private String description;
    private DeviceType deviceType;
    private Double mietpreis;
    private String vermieterId;
}

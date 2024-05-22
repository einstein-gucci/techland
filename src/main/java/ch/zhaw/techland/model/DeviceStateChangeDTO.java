package ch.zhaw.techland.model;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class DeviceStateChangeDTO {
    private String deviceId;
    private String vermieterEmail;
}

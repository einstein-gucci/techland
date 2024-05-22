package ch.zhaw.techland.model;

import java.util.List;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class DeviceStateAggregation {
    private String id;
    private List<String> deviceIds;
    private String count;
}

package ch.zhaw.techland.model;

import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class MieterCreateDTO {
    private String email;
    private String name;
}

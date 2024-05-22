package ch.zhaw.techland.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@RequiredArgsConstructor
@Getter
@Document("vermieter")
public class Vermieter {
    @Id
    private String id;

    @NonNull
    private String email;

    @NonNull
    private String name;
}

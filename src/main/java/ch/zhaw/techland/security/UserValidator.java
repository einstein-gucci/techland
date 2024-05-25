package ch.zhaw.techland.security;

import org.springframework.security.oauth2.core.OAuth2Error;
import org.springframework.security.oauth2.core.OAuth2TokenValidator;
import org.springframework.security.oauth2.core.OAuth2TokenValidatorResult;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Component;

import ch.zhaw.techland.model.Vermieter;
import ch.zhaw.techland.repository.VermieterRepository;

@Component
public class UserValidator implements OAuth2TokenValidator<Jwt> {

    private final VermieterRepository vermieterRepository;

    public UserValidator(VermieterRepository vermieterRepository) {
        this.vermieterRepository = vermieterRepository;
    }

    @Override
    public OAuth2TokenValidatorResult validate(Jwt jwt) {
        OAuth2Error error = new OAuth2Error("invalid_token", "The required email is missing", null);

        String userEmail = jwt.getClaimAsString("email");
        if (userEmail != null && !userEmail.isEmpty()) {
            Vermieter v = vermieterRepository.findFirstByEmail(userEmail);
            if (v == null) {
                String username = jwt.getClaimAsString("nickname");
                vermieterRepository.save(new Vermieter(userEmail, username));
                System.out.println("Creating new user:");
                System.out.println("  - name:  " + username);
                System.out.println("  - email: " + userEmail);
            }
            return OAuth2TokenValidatorResult.success();
        }
        return OAuth2TokenValidatorResult.failure(error);
    }
}

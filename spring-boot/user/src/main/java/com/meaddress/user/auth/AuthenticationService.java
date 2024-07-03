package com.meaddress.user.auth;

import com.meaddress.user.config.JwtService;
import com.meaddress.user.user.Role;
import com.meaddress.user.user.User;
import com.meaddress.user.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    // create user, save to database, generate token
    public AuthenticationResponse register(RegisterRequest request) throws DataIntegrityViolationException {
        var user = User.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .email(request.getEmail())
                .role(Role.USER)
                .password(passwordEncoder.encode(request.getPassword()))
                .build();

        userRepository.save(user);

        var jwtToken = jwtService.generateToken(user);

        return AuthenticationResponse
                .builder()
                .token(jwtToken)
                .build();
    }

    // TODO: check
    private boolean isValidEmail(String email) {
        return true;
    }

    // TODO: check
    private boolean isValidPassword(String email) {
        return true;
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) throws IllegalArgumentException {

        String email = request.getEmail();
        String password = request.getPassword();

        if (!isValidEmail(email) || !isValidPassword(password)) {
            throw new IllegalArgumentException("Invalid email or password format");
        }

        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
        var user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));


        System.out.println("Email: " + request.getEmail());

        var jwtToken = jwtService.generateToken(user);

        System.out.println("user: " + jwtToken);

        return AuthenticationResponse
                .builder()
                .token(jwtToken)
                .build();
    }

}

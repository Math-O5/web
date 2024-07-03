package com.meaddress.user.service;

import com.meaddress.user.auth.AuthenticationRequest;
import com.meaddress.user.auth.AuthenticationResponse;
import com.meaddress.user.auth.AuthenticationService;
import com.meaddress.user.auth.RegisterRequest;
import com.meaddress.user.user.Role;
import com.meaddress.user.user.User;
import com.meaddress.user.user.UserRepository;
import com.meaddress.user.config.JwtService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

@SpringBootTest

@ExtendWith(MockitoExtension.class)
public class AuthenticationServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @Mock
    private JwtService jwtService;

    @Mock
    private AuthenticationManager authenticationManager;

    @InjectMocks
    private AuthenticationService authenticationService;

    @Test
    public void testRegister_Success() {
        RegisterRequest registerRequest = new RegisterRequest("John", "Doe", "john.doe@example.com", "password");
        AuthenticationRequest validRequest = new AuthenticationRequest("john.doe@example.com", "password");

        authenticationService.register(registerRequest);

        // AuthenticationResponse response = authenticationService.authenticate(validRequest);
        //assertEquals("john.doe@example.com", jwtService.extractUsername(response.getToken()));
    }

    @Test
    public void testAuthenticate_InvalidCredentials() {
        AuthenticationRequest invalidRequest = new AuthenticationRequest("invalidemail", "password");

        RuntimeException exception = assertThrows(RuntimeException.class, () -> {
            authenticationService.authenticate(invalidRequest);
        });

        assertEquals("User not found", exception.getMessage());
        verifyNoInteractions(authenticationManager);
    }
}


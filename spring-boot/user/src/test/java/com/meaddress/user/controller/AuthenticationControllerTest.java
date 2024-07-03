package com.meaddress.user.controller;

import com.meaddress.user.auth.AuthenticationController;
import com.meaddress.user.auth.AuthenticationService;
import com.meaddress.user.auth.AuthenticationRequest;
import com.meaddress.user.auth.AuthenticationResponse;
import com.meaddress.user.auth.RegisterRequest;
import com.meaddress.user.config.JwtService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
@ExtendWith(SpringExtension.class)
public class AuthenticationControllerTest {

    @Mock
    private AuthenticationService authenticationService;

    @InjectMocks
    private AuthenticationController authenticationController;

    @Test
    public void testRegister() {
        RegisterRequest registerRequest = new RegisterRequest("John", "Doe", "john.doe@example.com", "password");
        AuthenticationResponse authenticationResponse = new AuthenticationResponse("token");

        Mockito.when(authenticationService.register(registerRequest)).thenReturn(authenticationResponse);

        ResponseEntity<?> responseEntity = authenticationController.register(registerRequest);

        assertEquals(authenticationResponse, responseEntity.getBody());
    }

    @Test
    public void testAuthenticate() {
        AuthenticationRequest authenticationRequest = new AuthenticationRequest("john.doe@example.com", "password");
        AuthenticationResponse authenticationResponse = new AuthenticationResponse("token");

        Mockito.when(authenticationService.authenticate(authenticationRequest)).thenReturn(authenticationResponse);

        ResponseEntity<AuthenticationResponse> responseEntity = authenticationController.authenticate(authenticationRequest);

        assertEquals(authenticationResponse, responseEntity.getBody());
    }
}

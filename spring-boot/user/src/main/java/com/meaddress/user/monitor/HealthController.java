package com.meaddress.user.monitor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/health")
public class HealthController {

    @GetMapping
    public ResponseEntity<String> isUp() {
        boolean databaseStatus = checkDatabaseConnection();
        boolean externalServiceStatus = checkExternalServiceAvailability();

        if (databaseStatus && externalServiceStatus) {
            return ResponseEntity.ok("API is up and running");
        } else {
            return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).body("API is experiencing issues");
        }
    }

    // TODO: impl checker select 1
    private boolean checkDatabaseConnection() {
        return true;
    }

    private boolean checkExternalServiceAvailability() {
        return true;
    }

}

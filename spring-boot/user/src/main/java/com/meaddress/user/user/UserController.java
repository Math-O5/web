package com.meaddress.user.user;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.security.Principal;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PatchMapping
    public ResponseEntity<?> changePassword(
            @RequestBody ChangePasswordRequest request,
            Principal connectedUser
    ) {
        userService.changePassword(request, connectedUser);
        return ResponseEntity.ok().build();
    }

    @PutMapping
    public ResponseEntity<?> updatePersonalInfo (
            @RequestBody UpdateUserPersonal request,
            Principal connectedUser
    ) {
        return userService.updatePersonalInfo(request, connectedUser);
    }

    @DeleteMapping
    public RedirectView deleteUser(Principal connectedUser) {
        userService.deleteUser(connectedUser);
        // TODO set variable DELETE_ACOUNT_REDIRECT
        return new RedirectView("/api/v1/auth");
    }

}

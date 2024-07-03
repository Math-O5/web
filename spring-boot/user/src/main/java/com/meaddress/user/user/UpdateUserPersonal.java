package com.meaddress.user.user;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UpdateUserPersonal {
    private String firstname;
    private String lastname;
}

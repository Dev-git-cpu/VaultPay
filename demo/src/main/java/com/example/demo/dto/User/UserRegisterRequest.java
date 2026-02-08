package com.example.demo.dto.User;

import lombok.*;

@Data
public class UserRegisterRequest {
    private String name;
    private String username;
    private String email;
    private String password;

}

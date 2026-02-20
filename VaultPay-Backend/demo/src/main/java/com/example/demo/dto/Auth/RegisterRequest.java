package com.example.demo.dto.Auth;

import lombok.*;

@Data
public class RegisterRequest {
    private String name;
    private String username;
    private String email;
    private String password;

}

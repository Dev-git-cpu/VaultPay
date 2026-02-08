package com.example.demo.dto.User;

import lombok.*;

@Data
public class LoginRequest {
    private String username;
    private String email;
    private String password;
}

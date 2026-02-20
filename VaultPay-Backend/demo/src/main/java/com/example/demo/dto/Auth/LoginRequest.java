package com.example.demo.dto.Auth;

import lombok.*;

@Data
public class LoginRequest {
   private String identifier;
    private String password;
}

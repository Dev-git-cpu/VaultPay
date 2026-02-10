package com.example.demo.dto.User;

import lombok.*;

@Data
public class LoginRequest {
   private String identifier;
    private String password;
}

package com.example.demo.dto.Auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Data
public class RegisterRequest {
    private String name;
    private String username;
    @NotBlank(message = "Email Required")
    @Email(message = "Invalid email format")
    private String email;
    private String password;

}

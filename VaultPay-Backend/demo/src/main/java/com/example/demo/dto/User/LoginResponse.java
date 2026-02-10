package com.example.demo.dto.User;

import lombok.*;

@Data
@AllArgsConstructor
public class LoginResponse {
    private Long userId;
    private String username;
    private String message;

}

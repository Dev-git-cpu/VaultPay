package com.example.demo.controller;

import com.example.demo.dto.User.LoginRequest;
import com.example.demo.dto.User.LoginResponse;
import com.example.demo.dto.User.UserRegisterRequest;
import com.example.demo.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173",
        allowCredentials = "true")
public class AuthController {

    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<LoginResponse> register(@RequestBody UserRegisterRequest userRegisterRequest){
        return ResponseEntity.ok(userService.register(userRegisterRequest));
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest){
        return ResponseEntity.ok(userService.login(loginRequest));
    }
}
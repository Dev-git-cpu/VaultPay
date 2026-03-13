package com.example.demo.service;

import com.example.demo.dto.Auth.LoginRequest;
import com.example.demo.dto.Auth.LoginResponse;
import com.example.demo.dto.Auth.RegisterRequest;
import com.example.demo.dto.Auth.RegisterResponse;
import com.example.demo.entity.User;
import com.example.demo.entity.Wallet;
import com.example.demo.repository.UserRepository;
import com.example.demo.repository.WalletRepository;
import com.example.demo.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final WalletRepository walletRepository;
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public RegisterResponse register(RegisterRequest request) {

        if (userRepository.existsByUsername(request.getUsername())) {
            throw new RuntimeException("Username already exists");
        }

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        User user = User.builder()
                .name(request.getName())
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .build();

        User savedUser = userRepository.saveAndFlush(user);

        Wallet wallet = Wallet.builder()
                .user(savedUser)
                .balance(new BigDecimal("1100"))
                .currency("INR")
                .build();

        walletRepository.save(wallet);

        return new RegisterResponse(
                savedUser.getUserId(),
                savedUser.getUsername(),
                "User Registered Successfully"
        );
    }

    public LoginResponse login(LoginRequest request) {

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getIdentifier(),
                            request.getPassword()
                    )
            );
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }

        User user = userRepository
                .findByUsername(request.getIdentifier())
                .orElseThrow(() -> new RuntimeException("User not found"));

        String token = jwtUtil.generateToken(user.getUsername());


        return new LoginResponse(
                user.getUserId(),
                user.getUsername(),
                token,
                "Login successful"
        );

    }
}
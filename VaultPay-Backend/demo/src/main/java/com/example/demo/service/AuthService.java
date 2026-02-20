package com.example.demo.service;

import com.example.demo.dto.Auth.LoginRequest;
import com.example.demo.dto.Auth.LoginResponse;
import com.example.demo.dto.Auth.RegisterRequest;
import com.example.demo.dto.Auth.RegisterResponse;
import com.example.demo.entity.User;
import com.example.demo.entity.Wallet;
import com.example.demo.exception.UserNotFoundException;
import com.example.demo.repository.UserRepository;
import com.example.demo.repository.WalletRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final WalletRepository walletRepository;

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
                .password(request.getPassword())
                .build();

        User savedUser = userRepository.saveAndFlush(user);

        Wallet wallet = Wallet.builder()
                .user(savedUser)
                .balance(new BigDecimal("5000")) // signup bonus
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
        Optional<User> optionalUser = userRepository.findByUsername(request.getIdentifier());

        if (optionalUser.isEmpty()) {
            return new LoginResponse(null, null, "User not found");
        }

        User user = optionalUser.get();

        if (!user.getPassword().equals(request.getPassword())) {
            return new LoginResponse(null, null, "Invalid password");
        }

        return new LoginResponse(user.getUserId(), user.getUsername(), "Login Successful");
    }
}
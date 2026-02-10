package com.example.demo.service;


import com.example.demo.dto.User.LoginRequest;
import com.example.demo.dto.User.LoginResponse;
import com.example.demo.dto.User.UserRegisterRequest;
import com.example.demo.entity.User;
import com.example.demo.entity.Wallet;
import com.example.demo.exception.UserNotFoundException;
import com.example.demo.exception.WalletNotFoundException;
import com.example.demo.repository.UserRepository;
import com.example.demo.repository.WalletRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final WalletRepository walletRepository;

    public LoginResponse register(UserRegisterRequest userRegisterRequest){

        if(userRepository.existsByUsername(userRegisterRequest.getUsername())){
            throw new IllegalArgumentException("Username Already Exists");
        }
        if(userRepository.existsByEmail(userRegisterRequest.getEmail())){
            throw new IllegalArgumentException("Email Already Exists");
        }

        User user = User.builder()
                .name(userRegisterRequest.getName())
                .username(userRegisterRequest.getUsername())
                .email(userRegisterRequest.getEmail())
                .password(userRegisterRequest.getPassword())
                .build();
        user = userRepository.save(user);


        BigDecimal balance = BigDecimal.valueOf(new Random().nextInt(1501)+500);

        Wallet wallet = Wallet.builder()
                .user(user)
                .balance(balance)
                .currency("INR")
                .build();

        walletRepository.save(wallet);

        return new LoginResponse(user.getUserId(),user.getUsername(),"Register Successful");
    }

    public LoginResponse login(LoginRequest loginRequest){
        String identifier = loginRequest.getIdentifier();
        User user;
        if (identifier.contains("@")) {
            user = userRepository.findByEmail(identifier)
                    .orElseThrow(() -> new UserNotFoundException("User not found"));
        } else {
            user = userRepository.findByUsername(identifier)
                    .orElseThrow(() -> new UserNotFoundException("User not found"));
        }
        if(!user.getPassword().equals(loginRequest.getPassword())){
            throw new IllegalArgumentException("Invalid Password");
        }
        return new LoginResponse(user.getUserId(),
                user.getUsername(),
                "Login Successful");

    }

    public User getUserById(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("User not found with ID: " + userId));
    }
    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new UserNotFoundException("User not found with username: " + username));
    }
    public BigDecimal getWalletBalance(Long userId) {
        Wallet wallet = walletRepository.findByUser_UserId(userId)
                .orElseThrow(() -> new WalletNotFoundException("Wallet not found for userId: " + userId));
        return wallet.getBalance();
    }

}

package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    @GetMapping("/{userId}")
    public ResponseEntity<User> getUserProfile(@PathVariable Long userId){

        return ResponseEntity.ok(userService.getUserById(userId));
    }

    @GetMapping("/search")
    public ResponseEntity<User> searchByUsername(@RequestParam String username) {
        return ResponseEntity.ok(userService.getUserByUsername(username));
    }
    @GetMapping("/{userId}/balance")
    public ResponseEntity<Map<String, Object>> getBalance(@PathVariable Long userId) {
        BigDecimal balance = userService.getWalletBalance(userId);
        Map<String, Object> response = new HashMap<>();
        response.put("userId", userId);
        response.put("balance", balance);
        response.put("currency", "INR");
        return ResponseEntity.ok(response);
    }
}
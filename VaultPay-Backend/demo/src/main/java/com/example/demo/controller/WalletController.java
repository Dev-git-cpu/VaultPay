package com.example.demo.controller;

import com.example.demo.service.WalletService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/wallet")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class WalletController {

    private final WalletService walletService;

    @GetMapping("/balance")
    public Map<String, Object> getBalance(@RequestParam Long userId) {
        return walletService.getBalanceForUser(userId);
    }
}
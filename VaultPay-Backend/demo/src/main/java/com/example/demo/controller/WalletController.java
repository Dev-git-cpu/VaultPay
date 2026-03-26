package com.example.demo.controller;

import com.example.demo.service.WalletService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/wallet")
@RequiredArgsConstructor
public class WalletController {

    private final WalletService walletService;

    @GetMapping("/balance")
    public Map<String, Object> getBalance(Authentication authentication) {
        return walletService.getBalanceForUser(authentication.getName());
    }
}
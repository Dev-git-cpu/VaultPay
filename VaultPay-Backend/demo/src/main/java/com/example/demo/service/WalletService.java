package com.example.demo.service;

import com.example.demo.entity.Wallet;
import com.example.demo.exception.WalletNotFoundException;
import com.example.demo.repository.WalletRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class WalletService {

    private final WalletRepository walletRepository;

    public Map<String, Object> getBalanceForUser(Long userId) {
        Wallet wallet = walletRepository.findByUserUserId(userId)
                .orElseThrow(() -> new WalletNotFoundException("Wallet not found for userId: " + userId));

        String currency = wallet.getCurrency() != null ? wallet.getCurrency() : "INR";
        BigDecimal balance = wallet.getBalance() != null ? wallet.getBalance() : BigDecimal.ZERO;

        Map<String, Object> response = new HashMap<>();
        response.put("userId", wallet.getUser().getUserId());
        response.put("balance", balance);
        response.put("currency", currency);

        return response;
    }
}
package com.example.demo.service;

import com.example.demo.entity.Wallet;
import com.example.demo.exception.WalletNotFoundException;
import com.example.demo.repository.WalletRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
@RequiredArgsConstructor
public class WalletService {

    private final WalletRepository walletRepository;

    public Wallet getWalletByUserId(Long userId) {
        return walletRepository.findByUser_UserId(userId)
                .orElseThrow(() -> new WalletNotFoundException("Wallet not found for userId : " + userId));
    }
    public void deductBalance(Wallet wallet, BigDecimal amount) {
        BigDecimal newBalance = wallet.getBalance().subtract(amount);
        wallet.setBalance(newBalance);
        walletRepository.save(wallet);
    }
    public void addBalance(Wallet wallet, BigDecimal amount) {
        BigDecimal newBalance = wallet.getBalance().add(amount);
        wallet.setBalance(newBalance);
        walletRepository.save(wallet);

}
}
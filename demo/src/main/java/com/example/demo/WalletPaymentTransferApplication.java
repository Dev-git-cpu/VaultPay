package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan("com.example.demo.entity")  // Ensure entity scan
public class WalletPaymentTransferApplication {

    public static void main(String[] args) {
        SpringApplication.run(WalletPaymentTransferApplication.class, args);
    }
}

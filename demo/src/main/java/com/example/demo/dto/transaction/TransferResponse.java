package com.example.demo.dto.transaction;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TransferResponse {
    private String transactionId;
    private BigDecimal remainingBalance;
    private String status;
    private String message;
    private LocalDateTime timestamp;

}

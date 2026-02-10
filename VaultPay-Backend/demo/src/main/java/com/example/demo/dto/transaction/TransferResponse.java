package com.example.demo.dto.transaction;

import com.example.demo.enums.TransactionStatus;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class TransferResponse {
    private String transactionId;
    private BigDecimal remainingBalance;
    private TransactionStatus status;
    private String message;
    private LocalDateTime timestamp;

}

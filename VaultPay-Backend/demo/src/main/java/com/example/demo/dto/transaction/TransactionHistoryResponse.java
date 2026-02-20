package com.example.demo.dto.transaction;

import com.example.demo.enums.TransactionStatus;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class TransactionHistoryResponse {
    private String otherPersonUsername;
    private String type;
    private BigDecimal amount;
    private String message;
    private TransactionStatus status;
    private LocalDateTime date;

}

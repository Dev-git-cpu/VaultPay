package com.example.demo.dto.transaction;

import lombok.*;

import java.math.BigDecimal;

@Data
public class TransferRequest {
    private Long senderUserId;
    private Long receiverUserId;
    private BigDecimal amount;
    private String message;

}

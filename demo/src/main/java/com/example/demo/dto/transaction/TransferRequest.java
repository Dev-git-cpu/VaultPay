package com.example.demo.dto.transaction;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TransferRequest {
    private Long senderUserId;
    private Long receiverUserId;
    private BigDecimal amount;
    private String message;

}

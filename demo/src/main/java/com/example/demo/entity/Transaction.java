package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "transactions")
public class Transaction {
private Long id;
private Long senderUserId;
    @Column(nullable = false)
    private Long receiverUserId;

    @Column(nullable = false)
    private BigDecimal amount;

    @Column(nullable = false)
    private String status;   // SUCCESS / FAILED

    private LocalDateTime createdAt;



}
package com.example.demo.repository;

import com.example.demo.entity.Transaction;
import com.example.demo.entity.User;
import com.example.demo.entity.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction,Long> {

    List<Transaction> findBySenderOrReceiverOrderByCreatedAtDesc(
            Long senderId,
            Long receiverId);
    List<Transaction> findBySenderOrderByCreatedAtDesc(Long senderId);

    List<Transaction> findByReceiverOrderByCreatedAtDesc(Long receiverId);




}

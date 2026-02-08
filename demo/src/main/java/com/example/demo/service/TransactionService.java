package com.example.demo.service;

import com.example.demo.dto.transaction.TransferRequest;
import com.example.demo.dto.transaction.TransferResponse;
import com.example.demo.entity.Transaction;
import com.example.demo.entity.User;
import com.example.demo.entity.Wallet;
import com.example.demo.enums.TransactionStatus;
import com.example.demo.exception.InsufficientBalanceException;
import com.example.demo.exception.InvalidTransferException;
import com.example.demo.repository.TransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Random;



@Service
@RequiredArgsConstructor
public class TransactionService {

    private final TransactionRepository transactionRepository;
    private final UserService userService;
    private final WalletService walletService;

    // Transfer money
    public TransferResponse transfer(TransferRequest request) {
        // Validate amount
        if (request.getAmount() == null || request.getAmount().compareTo(BigDecimal.ZERO) <= 0) {
            throw new InvalidTransferException("Amount must be greater than zero");
        }

        // Fetch sender
        User sender = userService.getUserById(request.getSenderUserId());
        Wallet senderWallet = walletService.getWalletByUserId(sender.getUserId());

        // Fetch receiver (resolve username or ID)
        User receiver;
        try {
            Long receiverId = Long.parseLong(String.valueOf(request.getReceiverUserId()));
            receiver = userService.getUserById(receiverId);
        } catch (NumberFormatException e) {
            receiver = userService.getUserByUsername(String.valueOf(request.getReceiverUserId()));
        }

        if (sender.getUserId().equals(receiver.getUserId())) {
            throw new InvalidTransferException("Sender and receiver cannot be the same");
        }

        // Check balance
        if (senderWallet.getBalance().compareTo(request.getAmount()) < 0) {
            throw new InsufficientBalanceException("Insufficient balance");
        }

        // Deduct and add balances
        walletService.deductBalance(senderWallet, request.getAmount());
        Wallet receiverWallet = walletService.getWalletByUserId(receiver.getUserId());
        walletService.addBalance(receiverWallet, request.getAmount());

        // Create transaction record
        Transaction transaction = Transaction.builder()
                .senderUserId(sender.getUserId())
                .receiverUserId(receiver.getUserId())
                .amount(request.getAmount())
                .status(TransactionStatus.SUCCESS)
                .message(request.getMessage())
                .createdAt(LocalDateTime.now())
                .build();

        transaction = transactionRepository.save(transaction);

        // Generate 8-digit transactionId string
        String txnId = String.format("%08d", new Random().nextInt(100_000_000));

        return new TransferResponse(
                txnId,
                senderWallet.getBalance(),
                TransactionStatus.SUCCESS,
                "Transfer successful",
                transaction.getCreatedAt()
        );
    }

    // Transaction history for a user
    public List<Transaction> getTransactionHistory(Long userId) {
        return transactionRepository.findBySenderUserIdOrReceiverUserIdOrderByCreatedAtDesc(userId, userId);
    }
}

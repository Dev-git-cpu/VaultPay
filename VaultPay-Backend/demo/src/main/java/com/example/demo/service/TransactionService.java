package com.example.demo.service;

import com.example.demo.dto.transaction.TransactionHistoryResponse;
import com.example.demo.dto.transaction.TransferRequest;
import com.example.demo.dto.transaction.TransferResponse;
import com.example.demo.entity.Transaction;
import com.example.demo.entity.User;
import com.example.demo.entity.Wallet;
import com.example.demo.enums.TransactionStatus;
import com.example.demo.exception.InsufficientBalanceException;
import com.example.demo.exception.UserNotFoundException;
import com.example.demo.exception.WalletNotFoundException;
import com.example.demo.repository.TransactionRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.repository.WalletRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


import java.security.InvalidParameterException;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TransactionService {

    private final TransactionRepository transactionRepository;
    private final UserRepository userRepository;
   private final WalletRepository walletRepository;

   @Transactional
   public TransferResponse transfer(Long senderUserId,TransferRequest request){
       User sender = userRepository.findById(senderUserId)
               .orElseThrow(()-> new UserNotFoundException("sender not found"));

       User receiver = userRepository.findByUsername(request.getIdentifier())
               .orElseThrow(()-> new UserNotFoundException("Receiver not found"));

       if(sender.getUserId().equals(receiver.getUserId())){
           throw new InvalidParameterException("Cannot send to yourself");
       }

       Wallet senderWallet = walletRepository.findByUser(sender)
               .orElseThrow(()-> new WalletNotFoundException("Sender wallet not found"));

       Wallet receiverWallet = walletRepository.findByUser(receiver)
               .orElseThrow(()-> new WalletNotFoundException("Receiver wallet not found"));

       if(senderWallet.getBalance().compareTo(request.getAmount()) < 0){
           throw new InsufficientBalanceException("Insufficient Balance");
       }

       senderWallet.setBalance(
               senderWallet.getBalance().subtract(request.getAmount())
       );

       receiverWallet.setBalance(receiverWallet.getBalance().add(request.getAmount())
       );

       walletRepository.save(senderWallet);
       walletRepository.save(receiverWallet);

       Transaction transaction = Transaction.builder()
               .sender(sender.getUserId())
               .receiver(receiver.getUserId())
               .amount(request.getAmount())
               .status(TransactionStatus.SUCCESS)
               .message(request.getMessage())
               .createdAt(LocalDateTime.now())
               .build();
       transactionRepository.save(transaction);

       return new TransferResponse(
               transaction.getTransactionId(),
               receiver.getUsername(),
               request.getAmount(),
               senderWallet.getBalance(),
               TransactionStatus.SUCCESS,
               transaction.getCreatedAt()

       );
   }

    public List<TransactionHistoryResponse> getTransactionHistory(Long userId, String type) {

        type = (type == null) ? "ALL" : type.toUpperCase();

        List<Transaction> transactions;

        switch (type) {

            case "SENT":
                transactions = transactionRepository
                        .findBySenderOrderByCreatedAtDesc(userId);
                break;

            case "RECEIVED":
                transactions = transactionRepository
                        .findByReceiverOrderByCreatedAtDesc(userId);
                break;

            default:
                transactions = transactionRepository
                        .findBySenderOrReceiverOrderByCreatedAtDesc(userId, userId);
        }

        return transactions.stream()
                .map(tx -> {

                    boolean isSender = tx.getSender().equals(userId);
                    Long otherUserId = isSender ? tx.getReceiver() : tx.getSender();

                    User otherUser = userRepository.findById(otherUserId)
                            .orElseThrow(() -> new UserNotFoundException("User not found"));

                    return new TransactionHistoryResponse(
                            otherUser.getUsername(),
                            isSender ? "Sent" : "Received",
                            tx.getAmount(),
                            tx.getMessage(),
                            tx.getStatus(),
                            tx.getCreatedAt()
                    );
                })
                .toList();
    }


}

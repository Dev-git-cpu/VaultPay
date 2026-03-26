package com.example.demo.controller;

import com.example.demo.dto.transaction.TransactionHistoryResponse;
import com.example.demo.dto.transaction.TransferRequest;
import com.example.demo.dto.transaction.TransferResponse;
import com.example.demo.entity.Transaction;
import com.example.demo.service.TransactionService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/transactions")
@RequiredArgsConstructor
public class TransactionController {

    private final TransactionService transactionService;

    @PostMapping("/transfer")
   public TransferResponse transferMoney(Authentication authentication,@RequestBody TransferRequest request){
String username = authentication.getName();
return transactionService.transfer(username,request);
   }

   @GetMapping("/history")
   public List<TransactionHistoryResponse> getHistory(Authentication authentication, @RequestParam(defaultValue = "ALL") String type){
        String username = authentication.getName();
        return transactionService.getTransactionHistory(username,type);

   }
    @GetMapping("/latest")
    public List<TransactionHistoryResponse> getLatest(
           Authentication authentication
    ) {
        String username = authentication.getName();
        return transactionService
                .getTransactionHistory(username, "ALL")
                .stream()
                .limit(3)
                .toList();
    }


}

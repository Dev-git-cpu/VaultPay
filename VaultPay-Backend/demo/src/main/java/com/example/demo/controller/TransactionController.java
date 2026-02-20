package com.example.demo.controller;

import com.example.demo.dto.transaction.TransactionHistoryResponse;
import com.example.demo.dto.transaction.TransferRequest;
import com.example.demo.dto.transaction.TransferResponse;
import com.example.demo.entity.Transaction;
import com.example.demo.service.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/transactions")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class TransactionController {

    private final TransactionService transactionService;

    @PostMapping("/transfer")
   public TransferResponse transferMoney(@RequestParam Long senderUserId,@RequestBody TransferRequest request){

return transactionService.transfer(senderUserId,request);
   }

   @GetMapping("/history")
   public List<TransactionHistoryResponse> getHistory(@RequestParam Long userId, @RequestParam(defaultValue = "ALL") String type){
        return transactionService.getTransactionHistory(userId,type);

   }
    @GetMapping("/latest")
    public List<TransactionHistoryResponse> getLatest(
            @RequestParam Long userId
    ) {
        return transactionService
                .getTransactionHistory(userId, "ALL")
                .stream()
                .limit(3)
                .toList();
    }


}

package com.example.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler({UserNotFoundException.class, WalletNotFoundException.class,
            InsufficientBalanceException.class, InvalidTransferException.class,
            IllegalArgumentException.class})
    public ResponseEntity<Map<String, Object>> handleCustomExceptions(RuntimeException ex) {
        Map<String, Object> body = new HashMap<>();
        body.put("timestamp", LocalDateTime.now());
        body.put("message", ex.getMessage());
        body.put("status", "ERROR");

        return new ResponseEntity<>(body, HttpStatus.BAD_REQUEST);
    }
}

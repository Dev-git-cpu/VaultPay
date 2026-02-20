package com.example.demo.repository;

import com.example.demo.entity.User;
import com.example.demo.entity.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface WalletRepository extends JpaRepository<Wallet,Long> {

    Optional<Wallet> findByUserUserId(Long userId);
    Optional<Wallet> findByUser(User user);


}

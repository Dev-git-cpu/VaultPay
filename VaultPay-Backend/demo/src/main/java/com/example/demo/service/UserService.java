package com.example.demo.service;

import com.example.demo.entity.User;
import com.example.demo.exception.UserNotFoundException;
import com.example.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public User getUserById(Long userId){
        return userRepository.findById(userId)
                .orElseThrow(()-> new UserNotFoundException("User not found with id: "+ userId));
    }


    public User getUserByUsername(String username){
        return userRepository.findByUsername(username)
                .orElseThrow(()-> new UserNotFoundException("User not found with id: "+ username));
    }

    public List<User> searchUsername(String username){
        return userRepository.findByUsernameContainingIgnoreCase(username);
    }

    public boolean existById(Long userId){
        return userRepository.existsById(userId);
    }



}

package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3001")
public class UserController {

    private final UserService userService;

    @GetMapping("/profile")
    public User getProfile(Authentication authentication) {

        String username = authentication.getName();

        return userService.getUserByUsername(username);
    }

    @GetMapping("/search")
    public List<User> searchUser(@RequestParam String username) {
        return userService.searchUsername(username);
    }

}

package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private final UserService userService;

    @GetMapping("/profile")
    public User getProfile(@RequestParam Long userId) {
        return userService.getUserById(userId);
    }

    @GetMapping("/search")
    public List<User> searchUser(@RequestParam String username) {
        return userService.searchUsername(username);
    }

}

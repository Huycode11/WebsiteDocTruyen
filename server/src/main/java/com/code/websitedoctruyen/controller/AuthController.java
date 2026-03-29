package com.code.websitedoctruyen.controller;

import com.code.websitedoctruyen.model.User;
import com.code.websitedoctruyen.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        try {
            User savedUser = userService.registerUser(user);
            return ResponseEntity.ok(Map.of("message", "User registered successfully", "userId", savedUser.getUserID()));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        try {
            String identifier = credentials.get("username");
            String password = credentials.get("password");
            User user = userService.loginUser(identifier, password);
            return ResponseEntity.ok(Map.of("message", "Login successful", "username", user.getUsername(), "userId", user.getUserID()));
        } catch (Exception e) {
            return ResponseEntity.status(401).body(Map.of("error", e.getMessage()));
        }
    }
}

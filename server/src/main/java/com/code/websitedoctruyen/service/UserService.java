package com.code.websitedoctruyen.service;

import com.code.websitedoctruyen.model.User;
import com.code.websitedoctruyen.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User registerUser(User user) {
        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            throw new RuntimeException("Username already exists");
        }
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }

        // Hash password
        user.setPasswordHash(passwordEncoder.encode(user.getPasswordHash()));
        
        // Default role (Placeholder: 2 for regular user, 6 was admin)
        if (user.getRoleID() == null) {
            user.setRoleID(2);
        }
        
        return userRepository.save(user);
    }
}

package com.example.bookapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.bookapp.entity.User;
import com.example.bookapp.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User register(User user) {
        if(userRepository.existsByUsername(user.getUsername())) {
            throw new RuntimeException("Username already exists");
        }
        // Hash password
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        return userRepository.save(user);
    }

    public User login(String username, String password) {
        User user = userRepository.findByUsername(username);
        if(user != null && new BCryptPasswordEncoder().matches(password, user.getPassword())) {
            return user;
        }
        throw new RuntimeException("Invalid credentials");
    }
}

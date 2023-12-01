package com.backend2shine.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/test")
public class UserController {

    @Autowired
    private UserDetailsService service;

    // Get the solution:
    @GetMapping("")
    public int getSolution() {
        return 42;
    }

    // Get all accounts:
    @GetMapping("/users")
    public List<UserOld> getAllAccounts() {
        return this.service.findAll();
    }

    // Get an account by its UUID:
    @GetMapping("/user/{username}")
    public ResponseEntity<UserDetails> getAccountById(@PathVariable String username) {
        return ResponseEntity.ok(service.loadUserByUsername(username));
    }

    // Create a new account:
//    @PostMapping("/account")
//    public UserDetails createUser(@RequestParam String username, @RequestParam String email) {
//        UserOld user = new UserOld(username, email);
//        return this.service.createUser(user);
//    }

}

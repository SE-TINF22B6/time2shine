package com.backend2shine.accounts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class AccountController {

    @Autowired
    private AccountService service;

    // Get all accounts:
    @GetMapping("/accounts")
    public List<Account> getAllAccounts() {
        return this.service.findAll();
    }

    // Get an account by its Id:
    @GetMapping("/account/{id}")
    public ResponseEntity<Account> getAccountById(@PathVariable long accountId) {
        Account account = service.findById(accountId);
        return ResponseEntity.ok(account);
    }


    // Create a new account:
    @PostMapping("/account")
    public Account createAccount(@RequestParam String username, @RequestParam String email) {
        Account account = new Account(username, email);
        return this.service.save(account);
    }


}

package com.backend2shine.accounts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class AccountController {

    @Autowired
    private AccountService service;

    // Get the solution:
    @GetMapping("")
    public int getSolution() {
        return 42;
    }

    // Get all accounts:
    @GetMapping("/accounts")
    public List<Account> getAllAccounts() {
        return this.service.findAll();
    }

    // Get an account by its UUID:
    @GetMapping("/account/{id}")
    public ResponseEntity<Account> getAccountById(@PathVariable long id) {
        return service.findByUuid(id);
    }


    // Create a new account:
    @PostMapping("/account")
    public Account createAccount(@RequestParam String username, @RequestParam String email) {
        Account account = new Account(username, email);
        return this.service.save(account);
    }

}

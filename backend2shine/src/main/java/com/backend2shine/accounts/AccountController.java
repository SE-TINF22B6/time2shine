package com.backend2shine.accounts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:4200")
//@RestController
//@RequestMapping("/api/v1/")
public class AccountController {
//
//    @Autowired
//    private AccountRepository accountRepository;
//
//    // Get all accounts:
//    @GetMapping("/accounts")
//    public List<Account> getAllAccounts() {
//        return this.accountRepository.findAll();
//    }
//
//    // Get an account by its Id:
//    @GetMapping("/account/{id}")
//    public ResponseEntity<Account> getAccountById(@PathVariable long accountId) {
//        Account account = accountRepository.findById(accountId)
//                .orElseThrow(() -> new RessourceNoteFoundException("Account not found with id: " + accountId));
//        return ResponseEntity.ok(account);
//    }
//
//
//    // Create a new account:
//    @PostMapping("/account")
//    public Account createAccount(@RequestParam String firstName, @RequestParam String lastName, @RequestParam String email) {
//        Account account = new Account(firstName, lastName, email);
//        return this.accountRepository.save(account);
//    }


}

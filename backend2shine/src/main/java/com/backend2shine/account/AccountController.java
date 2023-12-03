package com.backend2shine.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("")
public class AccountController {

    @Autowired
    private UserDetailsService service;

//     Get the solution:
    @GetMapping("")
    public int getSolution() {
        return 42;
    }

//     Get all accounts:
    @GetMapping("/accounts")
    public List<Account> getAllAccounts() {
        return this.service.findAll();
    }

    // Get an account by its UUID:
    @GetMapping("/account/{username}")
    public ResponseEntity<UserDetails> getAccountById(@PathVariable String username) {
        return ResponseEntity.ok(service.loadUserByUsername(username));
    }

//     Create a new account:
    @PostMapping("/account")
    public ResponseEntity<Account> createAccount(@RequestParam String username, @RequestParam String email, @RequestParam String password) {
        Account account = new Account();
        account.setAccount_id(service.findAll().size());
        account.setUsername(username);
        account.setEmail(email);
        account.setPassword(new BCryptPasswordEncoder().encode(password));

        return this.service.createAccount(account);




//        if (service.loadUserByUsername(username) != null ) { //|| service.findByEmail(email) != null) {
////////            return ResponseEntity.status(409).build();
//            System.out.println("den geraet hat kabutt");
//            return ResponseEntity.ok(this.service.createUser(user));
////            throw new RuntimeException("Username already exists");
//        } else {
//            return ResponseEntity.ok(this.service.createUser(user));
//        }







    }


}

package com.backend2shine.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("")
public class UserController {

    @Autowired
    private UserDetailsService service;

//     Get the solution:
    @GetMapping("")
    public int getSolution() {
        return 42;
    }

//     Get all accounts:
    @GetMapping("/users")
    public List<User> getAllAccounts() {
        return this.service.findAll();
    }

    // Get an account by its UUID:
    @GetMapping("/user/{username}")
    public ResponseEntity<UserDetails> getAccountById(@PathVariable String username) {
        return ResponseEntity.ok(service.loadUserByUsername(username));
    }

//     Create a new account:
    @PostMapping("/user")
    public ResponseEntity<User> createUser(@RequestParam String username, @RequestParam String password) {
        User user = new User();
        user.setId(service.findAll().size());
        user.setUsername(username);
        user.setPassword(new BCryptPasswordEncoder().encode(password));

        return this.service.createUser(user);




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

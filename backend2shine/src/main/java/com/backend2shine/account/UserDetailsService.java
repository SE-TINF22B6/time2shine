package com.backend2shine.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {

    @Autowired
    private AccountRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Account account = repository.findByUsername(username);
        if (account == null) {
            throw new UsernameNotFoundException(username);
        }

        return account;

    }

    public List<Account> findAll() {
        return repository.findAll();
    }

    public ResponseEntity createAccount(Account account) {
        if (repository.findByEmail(account.getEmail()) != null || repository.findByUsername(account.getUsername()) != null
        ) {
            return ResponseEntity.status(409).build();
        } {
            return ResponseEntity.ok(repository.save(account));
        }




//            return ResponseEntity.status(409).build();
    }

}
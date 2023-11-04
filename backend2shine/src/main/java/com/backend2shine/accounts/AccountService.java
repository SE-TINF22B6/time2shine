package com.backend2shine.accounts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService {
    @Autowired
    private AccountRepository repository;

    public List<Account> findAll() {
        return this.repository.findAll();
    }

    public ResponseEntity<Account> findByUuid(long id) {
        Account account = (this.repository.findById(id).orElse(null));

        if (account == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok().body(account);
        }
    }

    public Account save(Account account) {
        return this.repository.save(account);
    }
}

package com.backend2shine.accounts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService {
    @Autowired
    private AccountRepository repository;

    public List<Account> findAll() {
        return this.repository.findAll();
    }

    public Account findById(long id) {
        return this.repository.findById(id).orElseThrow(() -> new RessourceNoteFoundException("Account not found with id: " + id));
    }

    public Account save(Account account) {
        return this.repository.save(account);
    }
}

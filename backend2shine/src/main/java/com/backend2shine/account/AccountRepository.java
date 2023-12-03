package com.backend2shine.account;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface AccountRepository extends JpaRepository<Account, Integer> {

    public Account findByUsername(String username);
    public List<Account> findAll();
    public Account findByEmail(String email);
}
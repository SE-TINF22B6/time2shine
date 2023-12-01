package com.backend2shine.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface UserRepository extends JpaRepository<User, Integer> {

    public User findByUsername(String username);
    public List<User> findAll();
    public User findByEmail(String email);
}
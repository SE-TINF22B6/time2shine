package com.backend2shine.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface UserRepository extends JpaRepository<UserOld, Integer> {
    public UserOld findByUsername(String username);
    public List<UserOld> findAll();
//    public User save(User user);
}
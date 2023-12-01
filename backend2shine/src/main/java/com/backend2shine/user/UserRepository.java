package com.backend2shine.user;

import org.springframework.data.jpa.repository.JpaRepository;



public interface UserRepository extends  JpaRepository<User, Integer>{


    public User findByUsername(String username);
}
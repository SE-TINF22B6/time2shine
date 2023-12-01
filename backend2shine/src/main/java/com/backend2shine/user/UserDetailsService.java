package com.backend2shine.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {

    @Autowired
    private UserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user = repository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException(username);
        }

        return user;

    }

    public List<User> findAll() {
        return repository.findAll();
    }

    public ResponseEntity createUser(User user) {
        if (repository.findByEmail(user.getEmail()) != null || repository.findByUsername(user.getUsername()) != null
        ) {
            return ResponseEntity.status(409).build();
        } {
            return ResponseEntity.ok(repository.save(user));
        }




//            return ResponseEntity.status(409).build();
    }

}
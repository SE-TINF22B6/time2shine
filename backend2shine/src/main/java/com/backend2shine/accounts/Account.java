package com.backend2shine.accounts;

import jakarta.persistence.*;
import java.util.UUID;

@Entity
@Table(name="accounts")
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "username")
    private String username;

    @Column(name = "email")
    private String email;

    //TODO: password authentication

    public Account() {

    }

    public Account(String username, String email) {
        super();
        this.username = username;
        this.email = email;
    }

    public UUID getId() {
        return id;
    }


    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}

package com.backend2shine.accounts;

import jakarta.persistence.*;

@Entity
@Table(name="accounts")
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long account_id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(name = "email")
    private String email;

    public Account() {

    }

    public Account(String username, String email) {
        super();
        this.username = username;
        this.email = email;
    }

    public long getId() {
        return account_id;
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

    public String toString() {
        return this.username + "has registered with the email address " + this.email; 
    }
}

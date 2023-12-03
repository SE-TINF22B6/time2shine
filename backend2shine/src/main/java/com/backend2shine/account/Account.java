package com.backend2shine.account;
import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.*;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Entity
@Table(name = "accounts")
public class Account implements UserDetails {

    /**
     *
     */
    private static final long serialVersionUID = 1L;

    /**
     *
     */

    @Id
    private Integer account_id;

    private String email;

    private String username;

    private int[] friends;

    private String password;

    /**
     * @return the id
     */
    public Integer getAccount_id() {
        return account_id;
    }

    /**
     * @param id the id to set
     */
    public void setAccount_id(Integer id) {
        this.account_id = id;
    }

    /**
     * @return the username
     */
    public String getUsername() {
        return username;
    }

    /**
     * @param username the username to set
     */
    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * @return the password
     */
    public String getPassword() {
        return password;
    }

    /**
     * @param password the password to set
     */
    public void setPassword(String password) {
        this.password = password;
    }

    public int[] getFriends() {
        return friends;
    }

    public void setFriends(int[] friends) {
        this.friends = friends;
    }

    @Override
    public Set<GrantedAuthority> getAuthorities() {
        Set<GrantedAuthority> authorities = new HashSet<GrantedAuthority>();
        authorities.add(new SimpleGrantedAuthority("USER"));
        return authorities;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    /*
     * (non-Javadoc)
     *
     * @see java.lang.Object#toString()
     */
    @Override
    public String toString() {
        return "User [id=" + account_id + ", username=" + username + ", password=" + password + "]";
    }

}
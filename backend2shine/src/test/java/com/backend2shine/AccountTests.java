package com.backend2shine;

import com.backend2shine.accounts.Account;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.springframework.test.util.AssertionErrors.assertEquals;

public class AccountTests {
    private Account account;


    @BeforeEach
    public void setUp() {
        account = new Account("testUser", "test@example.com");
    }


    @Test
    public void testGetUsername() {
        // Test the getUsername() method
        assertEquals("Testen, ob die getUsername() Methode funktioniert: ", "testUser", account.getUsername());
    }

    @Test
    public void testSetUsername() {
        // Test the setUsername() method
        account.setUsername("newUser");
        assertEquals("Testen, ob die setUsername() Methode funktioniert: ","newUser", account.getUsername());
    }

    @Test
    public void testGetEmail() {
        // Test the getEmail() method
        assertEquals("Testen, ob die getEmail() Methode funktioniert: ","test@example.com", account.getEmail());
    }

    @Test
    public void testSetEmail() {
        // Test the setEmail() method
        account.setEmail("new@example.com");
        assertEquals("Testen, ob die setEmail() Methode funktioniert: ","new@example.com", account.getEmail());
    }
}

package com.backend2shine.account_tests;

import com.backend2shine.accounts.Account;
import com.backend2shine.accounts.AccountController;
import com.backend2shine.accounts.AccountService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.Collections;
import java.util.List;
import java.util.UUID;

import static org.mockito.Mockito.when;

@ExtendWith(SpringExtension.class)
@WebMvcTest(AccountController.class)
public class AccountControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private AccountService accountService;

    @Test
    public void testGetAllAccounts() throws Exception {
        // Mock the service to return a list of accounts
        List<Account> accounts = Collections.singletonList(new Account("testUser", "test@example.com"));
        when(accountService.findAll()).thenReturn(accounts);

        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/accounts")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    // You can write similar tests for other controller methods like createAccount, getAccountById, etc.
}
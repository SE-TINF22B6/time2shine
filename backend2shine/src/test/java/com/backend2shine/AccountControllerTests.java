package com.backend2shine;


import com.backend2shine.accounts.AccountController;
import org.junit.jupiter.api.Test;

import static org.springframework.test.util.AssertionErrors.assertEquals;

public class AccountControllerTests {

    @Test
    void should42() {
        AccountController accountController = new AccountController();
        assertEquals( "some random test:", accountController.getSolution() + "", "42");
    }
}

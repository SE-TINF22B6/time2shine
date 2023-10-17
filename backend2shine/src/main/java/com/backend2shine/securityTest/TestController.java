package com.backend2shine.securityTest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/secured")
    public String secured() {
        return "Hello World! This is a secured endpoint.";
    }

    @GetMapping("/")
    public String home() {
        return "Hello World! This is the unsecured home page.";
    }
}

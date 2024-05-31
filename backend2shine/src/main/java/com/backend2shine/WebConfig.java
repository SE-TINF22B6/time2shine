package com.backend2shine;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://engine.maiwald.cc", "https://engine.maiwald.cc")
                .allowedMethods("POST")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
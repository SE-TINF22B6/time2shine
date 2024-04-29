package com.backend2shine.scores;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ScoreTest {

    @Test
    void getId() {
        Score score = new Score();
        score.setId(1);
        assertEquals(1, score.getId());
    }

    @Test
    void getUsername() {
        Score score = new Score();
        score.setUsername("testUser");
        assertEquals("testUser", score.getUsername());
    }

    @Test
    void getEmail() {
        Score score = new Score();
        score.setEmail("testEmail@test.com");
        assertEquals("testEmail@test.com", score.getEmail());
    }

    @Test
    void getGame() {
        Score score = new Score();
        score.setGame("testGame");
        assertEquals("testGame", score.getGame());
    }

    @Test
    void getScore() {
        Score score = new Score();
        score.setScore(100);
        assertEquals(100, score.getScore());
    }

    @Test
    void setId() {
        Score score = new Score();
        score.setId(2);
        assertEquals(2, score.getId());
    }

    @Test
    void setUsername() {
        Score score = new Score();
        score.setUsername("newUser");
        assertEquals("newUser", score.getUsername());
    }

    @Test
    void setEmail() {
        Score score = new Score();
        score.setEmail("newEmail@test.com");
        assertEquals("newEmail@test.com", score.getEmail());
    }

    @Test
    void setGame() {
        Score score = new Score();
        score.setGame("newGame");
        assertEquals("newGame", score.getGame());
    }

    @Test
    void setScore() {
        Score score = new Score();
        score.setScore(200);
        assertEquals(200, score.getScore());
    }
}
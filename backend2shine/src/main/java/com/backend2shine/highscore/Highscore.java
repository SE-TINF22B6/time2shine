package com.backend2shine.highscore;

import jakarta.persistence.*;

@Entity
@Table(name = "highscores")
public class Highscore {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String username;

    private String email;

    private String game;

    private int score;

    public Highscore(String username, String email, String game, int score) {
        this.username = username;
        this.email = email;
        this.game = game;
        this.score = score;
    }

    public Highscore() {

    }

    public Integer getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public String getGame() {
        return game;
    }

    public int getScore() {
        return score;
    }


    public void setId(Integer highscore_id) {
        this.id = highscore_id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setGame(String game) {
        this.game = game;
    }

    public void setScore(int score) {
        this.score = score;
    }
}
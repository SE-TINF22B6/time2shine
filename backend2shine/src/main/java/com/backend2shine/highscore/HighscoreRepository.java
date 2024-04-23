package com.backend2shine.highscore;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface HighscoreRepository extends JpaRepository<Highscore, Integer> {
    // Methods for finding highscores
    public List<Highscore> findTop10ByGame(String game);

    public List<Highscore> findTop10ByUsername(String username);

    public List<Highscore> findTop10ByUsernameAndGame(String username, String game);

    public List<Highscore> findTop10ByEmail(String email);


    // Method for saving a new highscore
    public Highscore save(Highscore highscore);
}
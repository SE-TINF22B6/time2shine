package com.backend2shine.highscore;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface HighscoreRepository extends JpaRepository<Highscore, Integer> {
    // Methods for finding highscores
    public List<Highscore> findTop10ByGameOrderByScoreDesc(String game);

    public List<Highscore> findTop10ByUsernameOrderByScoreDesc(String username);

    public List<Highscore> findTop10ByUsernameAndGameOrderByScoreDesc(String username, String game);

    public List<Highscore> findTop10ByEmailOrderByScoreDesc(String email);


    // Method for saving a new highscore
    public Highscore save(Highscore highscore);
}
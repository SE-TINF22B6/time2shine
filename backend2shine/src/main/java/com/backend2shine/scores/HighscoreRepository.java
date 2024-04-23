package com.backend2shine.scores;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface HighscoreRepository extends JpaRepository<Score, Integer> {
    // Methods for finding highscores
    public List<Score> findTop10ByGameOrderByScoreDesc(String game);

    public List<Score> findTop10ByUsernameOrderByScoreDesc(String username);

    public List<Score> findTop10ByUsernameAndGameOrderByScoreDesc(String username, String game);

    public List<Score> findTop10ByEmailOrderByScoreDesc(String email);


    // Method for saving a new highscore
    public Score save(Score highscore);
}
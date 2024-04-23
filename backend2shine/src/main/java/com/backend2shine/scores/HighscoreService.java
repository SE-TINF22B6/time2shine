package com.backend2shine.scores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HighscoreService {
    @Autowired
    private HighscoreRepository repo;

    //Methods for finding highscores
    public List<Score> findByGame(String game) {
        return this.repo.findTop10ByGameOrderByScoreDesc(game);
    }

    public List<Score> findByUsername(String username) {
        return this.repo.findTop10ByUsernameOrderByScoreDesc(username);
    }

    public List<Score> findByUsernameAndGame(String username, String game) {
        return this.repo.findTop10ByUsernameAndGameOrderByScoreDesc(username, game);
    }


    // Method for saving a new highscore
    public Score saveNewHighscore(Score score) {
        return this.repo.save(score);
    }
}

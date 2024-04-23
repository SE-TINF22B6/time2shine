package com.backend2shine.highscore;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HighscoreService {
    @Autowired
    private HighscoreRepository repo;

    //Methods for finding highscores
    public List<Highscore> findByGame(String game) {
        return this.repo.findTop10ByGame(game);
    }

    public List<Highscore> findByUsername(String username) {
        return this.repo.findTop10ByUsername(username);
    }

    public List<Highscore> findByUsernameAndGame(String username, String game) {
        return this.repo.findTop10ByUsernameAndGame(username, game);
    }


    // Method for saving a new highscore
    public Highscore saveNewHighscore(Highscore highscore) {
        return this.repo.save(highscore);
    }
}

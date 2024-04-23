package com.backend2shine.highscore;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/highscores")
public class HighscoreController {

    @Autowired
    private HighscoreService service;

    // Get the solution:
    @GetMapping("/secret")
    public int getSolution() {
        return 42;
    }


    // Endpoints for getting highscore data
    @GetMapping("")
    public List<Highscore> getSpecificHighscores(@RequestParam String game, @RequestParam String username) {
        return this.service.findByUsernameAndGame(game, username);
    }

    @GetMapping("/games/{game}")
    public List<Highscore> getGameHighscores(@PathVariable String game) {
        return this.service.findByGame(game);
    }

    @GetMapping("/users/{username}")
    public List<Highscore> getUserScores(@PathVariable String username) {
        return this.service.findByUsername(username);
    }


    // Endpoint for saving a new highscore to the DB
    @PostMapping()
    public Highscore saveNewHighscore(
            @RequestParam String username,
            @RequestParam String email,
            @RequestParam String game,
            @RequestParam int score
    ) {
        Highscore newHighscore = new Highscore(username, email, game, score);
        return this.service.saveNewHighscore(newHighscore);
    }
}

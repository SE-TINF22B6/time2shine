import React, { useEffect, useState } from 'react';

type Highscores = { [key: string]: number };

interface UserHighscoresProps {
    username: string;
}

export const UserHighscores: React.FC<UserHighscoresProps> = ({ username }) => {
    const [highscores, setHighscores] = useState<Highscores>({});

    useEffect(() => {
        ['blackjack', 'poker'].forEach(game => {
            fetch(`https://api.maiwald.cc/highscores?username=${username}&game=${game}`)
                .then(response => response.json())
                .then(data => setHighscores(prevScores => ({...prevScores, [game]: data})));
        });
    }, [username]);

    return (
        <div>
            <p className="mb-3 text-gray-200">Highscores:</p>
            {Object.entries(highscores).map(([game, score]) => (
                <p key={game} className="text-gray-200">{game}: <span className="font-semibold">{score}</span></p>
            ))}
        </div>
    );
}
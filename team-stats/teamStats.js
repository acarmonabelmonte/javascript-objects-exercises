const team = {
    _players: [{
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11
        },
        {
            firstName: 'Pete',
            lastName: 'Wheeler',
            age: 54
        },
        {
            firstName: 'Jules',
            lastName: 'Smith',
            age: 34
        }
    ],
    _games: [{
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'Troncos',
            teamPoints: 23,
            opponentPoints: 14
        },
        {
            opponent: 'Croncos',
            teamPoints: 34,
            opponentPoints: 76
        }
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };

        this.players.push(player);
    },
    addGame(opp, myPts, oppPts) {
        const game = {
            opponent: opp,
            teamPoints: myPts,
            opponentPoints: oppPts
        };
        this.games.push(game);
    }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Titans', 100, 98);
team.addGame('Lions', 120, 38);
team.addGame('Mastodontes', 98, 67);

console.log(team.players)
console.log(team.games)¡
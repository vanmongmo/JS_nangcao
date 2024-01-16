const game = {
    team1 : "Bayern Munich",
    team2 : "Borrussia Dortmund", 
    player: [

    ]
}

//1
const [players1, players2] = game.players;
console.log(players1, players2);
//2
const [gk,...filePlayers] = players1;
console.log(gk, filePlayers);
//3
const allPlayers = [...players1,...players2];
console.log(allPlayers);
//4
const playerFinal = [...players1,"Thiago", "Coutinho","Perisic"]
//5
const {odds: team1, x : draw, team2} = game;
//6
const printGoals = function (...players) {
    console.log(`${players, lenght} goals`)
}
printGoals(...game.scored);
//7
team1 < team2 && console.log("team1 win");
team1 > team2 && console.log("team1 win");

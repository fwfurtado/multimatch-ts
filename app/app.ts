import {$} from "./utils";
import {Player} from "./player";
import {Game, GameCommand} from "./game";
import {Scoreboard} from "./scoreboard";

const startButton: HTMLButtonElement | null = $<HTMLButtonElement>('#startGame') ;
const calculateScore: HTMLButtonElement | null = $<HTMLButtonElement>('#calculate') ;
const messageElement: HTMLElement | null = $<HTMLElement>('#messages') ;
const playerNameField: HTMLInputElement | null = $<HTMLInputElement>('#playername');
const factorField: HTMLInputElement | null = $<HTMLInputElement>('#factor');
const problemCountField: HTMLInputElement | null = $<HTMLInputElement>('#problemCount');
const scoreElement: HTMLElement | null = $<HTMLElement>('#playerScore');

const scoreboard = new Scoreboard(scoreElement!);

const startGame = () => {

    const player: Player = new Player(playerNameField!.value);
    const factor: number = Number(factorField!.value);
    const problemCount: number = Number(problemCountField!.value);

    const gameCommand: GameCommand = {
        player,
        factor,
        problemCount
    };

    const game = new Game(gameCommand, messageElement!, scoreboard);

    game.displayGame();

    calculateScore!.addEventListener('click', () => game.calculateScore());
};

startButton!.addEventListener('click', startGame);


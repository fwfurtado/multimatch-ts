import {Result, Scoreboard} from "./scoreboard";
import {Player} from "./player";
import {$, range} from "./utils";

export interface GameCommand {
    player: Player;
    problemCount: number;
    factor: number;
}

export class Game {
    constructor(private readonly gameCommand: GameCommand, private gameView: HTMLElement, private scoreboard: Scoreboard) {
    }

    displayGame(): void {
        const {factor, problemCount} = this.gameCommand;
        let gameForm = '';

        range(problemCount).forEach(index => {
            gameForm += '<div class="row form-group">';
            gameForm += `<label for="answer${index}" class="col-sm-2 control-label">`;
            gameForm += `${factor} x ${index} = </label>`;
            gameForm += `<div class="col-sm-1"><input class="form-control" id="answer${index}" size="5"></div>`
            gameForm += '</div>'
        });

        this.gameView.innerHTML = gameForm;
    }

    calculateScore(): void {
        let score = 0;

        const {factor, problemCount, player} = this.gameCommand;

        range(problemCount).forEach(index => {
            const answerValue = Number($<HTMLInputElement>(`#answer${index}`)?.value || -1);

            if (factor * index === answerValue) {
                score++;
            }
        });

        const result: Result = {
            playerName: player.display(),
            factor,
            problemCount,
            score
        };

        this.scoreboard.add(result)
    }
}
export interface Result {
    playerName: string;
    score: number;
    problemCount: number;
    factor: number;
}

export class Scoreboard {
    private readonly results: Result[] = [];
    private firstTime = true;

    constructor(private scoresElement: HTMLElement) {
    }

    add(result: Result): void {
        this.results.push(result);

        if (this.firstTime) {
            this.scoresElement.innerHTML = '<h2>Scoreboard</h2>'
        }

        let output = '';

        output += '<h4>';
        output += `${result.playerName} : ${result.score} / ${result.problemCount} for factor ${result.factor}`;
        output += '</h4>';

        this.scoresElement.innerHTML += output;

        this.firstTime = false;
    }

}
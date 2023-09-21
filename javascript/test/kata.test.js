class RockPaperScissors {
    static rockPaperScissors() {
        return 'playerOne'
    }
}

describe("Rock Paper Scissors", () => {
    it("Given I have chosen rock When the opponent chooses scissors Then I should win", () => {
        const playerOneMove = 'rock'
        const playerTwoMove = 'scissors'

        const winner = RockPaperScissors.rockPaperScissors(playerOneMove, playerTwoMove)

        expect(winner).toBe('playerOne')
    })
})

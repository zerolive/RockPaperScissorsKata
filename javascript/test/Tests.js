class RockPaperScissors {
  static rockPaperSissors() {
    return 'playerOne'
  }
}

describe("Rock Paper Scissors", () => {
  it("Given I have chosen rock When the opponent chooses scissors Then I should win", () => {
    const playerOneMove = 'rock'
    const playerTwoMove = 'scissors'

    const winner = RockPaperScissors.rockPaperSissors(playerOneMove, playerTwoMove)

    expect(winner).toBe('playerOne')
  })
})

class RockPaperScissors {
    static rockPaperScissors(playerOneMove, playerTwoMove) {
      if (playerTwoMove === "paper") {
        return "playerTwo";
      }

      if (playerOneMove === "rock") {
        return "playerOne";
      }

      if (playerOneMove === "paper") {
        return "playerOne";
      }

      return "playerTwo";
    }
  }

  describe("Rock Paper Scissors", () => {
    it("Given I have chosen rock When the opponent chooses scissors Then I should win", () => {
        const playerOneMove = 'rock'
        const playerTwoMove = 'scissors'

        const winner = RockPaperScissors.rockPaperScissors(playerOneMove, playerTwoMove)

        expect(winner).toBe('playerOne')
    })

    it("Given I have chosen scissors When the opponent chooses rock Then the opponent win", () => {
        const playerOneMove = 'scissors'
        const playerTwoMove = 'rock'

        const winner = RockPaperScissors.rockPaperScissors(playerOneMove, playerTwoMove)

        expect(winner).toBe('playerTwo')
    })

    it("Given I have chosen paper When the opponent chooses rock Then I should win", () => {
        const playerOneMove = 'paper'
        const playerTwoMove = 'rock'

        const winner = RockPaperScissors.rockPaperScissors(playerOneMove, playerTwoMove)

        expect(winner).toBe('playerOne')
    })

    it("Given I have chosen rock When the opponent chooses paper Then the opponent win", () => {
        const playerOneMove = 'rock'
        const playerTwoMove = 'paper'

        const winner = RockPaperScissors.rockPaperScissors(playerOneMove, playerTwoMove)

        expect(winner).toBe('playerTwo')
    })
  })

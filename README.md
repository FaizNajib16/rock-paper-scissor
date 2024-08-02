# rock-paper-scissor
This is rock, paper, scissor game.
This game will be utilizing the console in web browser in order to play. For now there will be no UI yet.


FUNCTION getComputerChoice
    SET choice to random number between 1 to 3
    IF choice is 1
        THEN return "Rock"
    ELSE IF choice is 2
        THEN return "Paper"
    ELSE
        return "Scissors"
    ENDIF
END


FUNCTION getHumanChoice
    GET user input
    return user input
END

FUNCTION playRound accepts humanChoice and computerChoice
    IF humanChoice is "Rock" and computerChoice is "Scissor"
        THEN INCREMENT humanScore by 1
    ELSE IF humanChoice is "Paper" and computerChoice is "Rock"
        THEN INCREMENT humanScore by 1
    ELSE IF humanChoice is "Scissor" and computerChoice is "Paper"
        THEN INCREMENT humanScore by 1
    ELSE IF humanChoice is the same as computerChoice
        THEN do nothing
    ELSE
        INCREMENT computerScore by 1
    ENDIF
END

FUNCTION playGame
    DECLARE FUNCTION playRound
    SET humanScore to 0
    SET computerScore to 0
    FOR counter is less than 5
        CALL playRound
    ENDFOR
END 

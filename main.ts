input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        # # # # #
        # . . . #
        `)
    basic.pause(2000)
    basic.clearScreen()
    Rounds += 1
    Player_1_Score += 1
    Update_Scoreboard()
})
function Update_Scoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("Player_1_Score: " + Player_1_Score)
    OLED.newLine()
    OLED.writeStringNewLine("Player_2_Score: " + Player_2_Score)
    OLED.newLine()
    OLED.writeStringNewLine("Ties: " + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds: " + Rounds)
}
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(2000)
    basic.clearScreen()
    Rounds += 1
    Ties += 1
    Update_Scoreboard()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . # .
        # # # . .
        `)
    basic.pause(2000)
    basic.clearScreen()
    Rounds += 1
    Player_2_Score += 1
    Update_Scoreboard()
})
input.onGesture(Gesture.Shake, function () {
    Call_Reset()
})
function Call_Reset () {
    OLED.init(128, 64)
    OLED.writeStringNewLine("Let's Play A Game...")
    basic.pause(2000)
    OLED.clear()
    OLED.writeStringNewLine("Hahahahaha.")
    Player_1_Score = 0
    Player_2_Score = 0
    Ties = 0
    Rounds = 0
    basic.pause(2000)
    Update_Scoreboard()
}
let Ties = 0
let Player_2_Score = 0
let Player_1_Score = 0
let Rounds = 0
Call_Reset()

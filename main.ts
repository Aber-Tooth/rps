function Update_Scoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("Player_1_Score: " + Player_1_Score)
    OLED.newLine()
    OLED.writeStringNewLine("Player_1_Score: " + Player_2_Score)
    OLED.newLine()
    OLED.writeStringNewLine("Player_1_Score: " + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Player_1_Score: " + Rounds)
}
let Rounds = 0
let Ties = 0
let Player_2_Score = 0
let Player_1_Score = 0
OLED.init(128, 64)
OLED.writeStringNewLine("Let's Play A Game")
Player_1_Score = 0
Player_2_Score = 0
Ties = 0
Rounds = 0
basic.pause(2000)
Update_Scoreboard()

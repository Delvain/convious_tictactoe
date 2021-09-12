TicTacToe game built with React and Redux.

It is made up of 4 base components:

    1. The Game component is the main component that envelops the Board and Log components
    2. The Board component is made up out of 9 instances of the Square component
    3. The Square component defines each square within the board
    4. The Log component displays a history of all moves made by the players

The logic is split up into two reducers:

    1. The gameReducer, which contains all logic necessary for playing the game
    2. The logReducer, which is responsible for updating the log of past moves

Inside the reducers, immer's produce function is used to make state updates a bit more readable.
Read more about it here: https://redux-toolkit.js.org/usage/immer-reducers

Playing the game is fairly straightforward; on initialization, a blank board with 9 squares is displayed.
On the top, "Player turn" is shown; Player X is always the one who starts.
Players then take turns clicking squares in order to attempt to create a line of 3 of their own marks, X or O respectively.
Obviously, a player cannot pick a square that is already filled in.
Once a player has managed to get 3 of their marks in a row, they are declared the winner and the game ends.
If the entire board gets filled up without either player winning, the game ends in a draw.
At any point, a new game can be started by clicking the "Restart" button.

The game's state is saved in the browser's localStorage, ensuring the game will continue after a page refresh.

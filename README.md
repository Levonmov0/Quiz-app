# QuizzerStrike

Try the live app [QuizzerStrike](https://quizzerstrike.netlify.app/)

## Description

This app is a quizz/trivia game, where you choose a category and then answer questions from the category and try gather as much score as possible. 

## How its made

#### Routing
Quizzerstrike was made with React-router.

#### API
QuizzerStrike uses the [Trivia API](https://opentdb.com/api_config.php). This API was the only one API about trivia that i could find. The way it works is that
you choose Category, number of questions, difficuly and type and then generate an API url that you can use to get the questions. I personally didnt use it that way
and instead I let the player choose difficulty and the category so that its more broad of a game. 


#### Visuals

For visiuals/UI i used material UI. It was very easy to use and made the styling process much easier. The reason i used it is because i never had used it before and wanted to learn it so that i could use it in the future if needed. 

## Changes to come
There is alot with the app to improve. But one thing that stands out is that the API doesnt allways decode correctly for example quotes("") can some time render as the word 'quote' and that has been really hard to fix because the API doesnt have much people working with it for there to be a solution online. I have tried to use other encodings and then decode them like RFC3986-encoding and so on.\
\
Another change to be done is to fix the styling to fit the screen better and be more aesthetically pleasing. 







# Do You Know Me QUIZ

This is a quiz that I made for my friends to know how well they know me.

So, how i coded this quiz :-

1. Taking thier name using readline-sync.question.
2. Display a welcome message.
3. Asking them to press ok/yes to continue using readline-sync.question.
4. if statement to check user's answer. if true then continue or else return error and tell to enter yes/ok.
5. store questions and answers in {key:value} pair in a array[].
6. A variable to store the score
7. A function() that takes question and answer as input from the array[], display ques.. and take user answer (using readline-sync.question), check user answer if right or wrong (using if else statement) and update the score.
8. A for loop to run the function() for each question in the array[].
9. Display total score of the user.
10. If user score more than 40 then display a certain message.
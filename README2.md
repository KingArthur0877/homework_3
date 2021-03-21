# 03 JavaScript: Password Generator

## Description & Solution

The Application Ive created creates a Randomly Complex Password based on the parameters set by the User, the user will receive the following Questions:

- How long do you want the password to be? - the user will need to input a value between 8 and 128.
  
  A pre-check is done to check whether:

  1. The value entered is a number
  2. If the value entered is between 8 and 128 after being converted to a Integer
  3. If not then an alert appears informing the user of the set parameters

Then if the Number IS within the set parameters then it will ask the following questions:

- Do you want your password to contain lowercase characters?
  > the confirm() function is used to understand the users request
- Do you want your password to contain uppercase characters?
  > the confirm() function is used to understand the users request
- Do you want your password to contain Numeric characters?
  > the confirm() function is used to understand the users request
- Do you want your password to contain Special characters?
  > the confirm() function is used to understand the users request

If no more than 1 option is selected then the following alert will appear:
 > At least one type of Character needs to be selected

Once the options have been decided a [chosenCharArray] is created

Then the [chosenCharArray] is used to generate the [randomArray], from this [randomArray], [randomCharacter] is established and converted into a string and pushed to the user

## Screenshots

The user is answers all the questions and the password is generated correctly
![image 1](./assets/completed%20password.png)

The user does not choose yes to any prompts
![image 2](./assets/no%20choices%20chosen.png)

The user enters a character that isn't a number
![image 3](./assets/number%20not%20input.png)

## Review

- The URL of the deployed application: https://kingarthur0877.github.io/homework_3/.
- The URL for the Github repository; https://github.com/KingArthur0877/homework_3

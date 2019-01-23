## Lager Head

Lager Head is an application that allows a user to take a quiz that, based on his/her answers to said quiz, will match the user with a beer, the brewery that the beer is at, some facts about the beer (description, abv, ibu), as well as some nearby food options. 

This application utilizes Express.js, Node.js, Handlebars, HTML, CSS, JavaScript, and MySQL. We also utilized a 3rd party API called Untappd in order to fill our database with relevant information. In order for a user to engage with this application, he/she simply needs to install Node.js (if that is not already installed), and then using his/her terminal, navigate to the folder where the server.js file is located. Once there, the user can type in **node server.js** and navigate to **localhost: 8080/** in their browser of choice.

From there, the user has a couple of options. The user can either navigate to take a survey, search for a beer in the database, or get a random beer from the database. 

In order to take the survey, the user simply needs to click on the button that says *Take Survey*. The user will then be taken to the survey where he/she will be prompted to answer the 4 questions. Once the user has answered all of the questions, he/she can click *Submit* and the program will produce results!

In order to get a random beer from the database, the user simply needs to click the button that says *Beer Me*. The program will then run a query in the database and return a random beer to the screen for the user to review.

In order to use teh search function, the user needs to click into the search bar in the middle of the screen. **The search function as of now can only search beers.** Once the user has entered the name of a beer, he/she simply needs to click on the button that says *Search* and if the beer exists in the database, the program will return that beer to the screen for the user to review.

There were numerous challenges for the group to overcome throughout this project. There was a lot of difficulty getting nearly every aspect of this application to come together. For starters, the developers at Untappd did not allow us access for ~4 days. When they finally granted us access, it was limited access which made it so that we could only query 100 times per hour. As a group, after testing for hours, we went through ~3400 queries. Regarding the logic, there was a good amount of internal debate on how to structure the logic so that it made sense for everyone and fully utilized the entire database. Regarding the routes, a lot of work went into creating the post and get routes and which contributed to our group being able to get results to show up. **Ultimately, we overcame every issue by communicating more, spending more face-to-face time together, and working out the challenges logically and methodically.**


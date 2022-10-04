# homework13: E-Commerce Back End

## Your Task

Internet retail, also known as **e-commerce**, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to their prevalence, understanding the fundamental architecture of these platforms will benefit you as a full-stack web developer.

Your task is to build the back end for an e-commerce site by modifying starter code. You’ll configure a working Express.js API to use Sequelize to interact with a MySQL database.

Because this application won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates its functionality and all of the acceptance criteria being met. You’ll need to submit a link to the video and add it to the readme of your project.

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

### Seed the Database

After creating the models and routes, run `npm run seed` to seed data to your database so that you can test your routes.

### Sync Sequelize to the Database on Server Start

Create the code needed in `server.js` to sync the Sequelize models to the MySQL database on server start.


### Walkthrough Video: 37%

* A walkthrough video that demonstrates the functionality of the e-commerce back end must be submitted, and a link to the video should be included in your readme file.

* The walkthrough video must show all of the technical acceptance criteria being met.

* The walkthrough video must demonstrate how to create the schema from the MySQL shell.

* The walkthrough video must demonstrate how to seed the database from the command line.

* The walkthrough video must demonstrate how to start the application’s server.

* The walkthrough video must demonstrate GET routes for all categories, all products, and all tags being tested in Insomnia or Postman.

* The walkthrough video must demonstrate GET routes for a single category, a single product, and a single tag being tested in Insomnia or Postman.

* The walkthrough video must demonstrate POST, PUT, and DELETE routes for categories, products, and tags being tested in Insomnia or Postman.

# Result Screenshots: E-Commerce Back End

<img width="2090" alt="Screen Shot 2022-10-03 at 6 58 40 PM" src="https://user-images.githubusercontent.com/15242022/193702395-72613fd6-e096-4c85-bdc8-b86c6cbc6bc7.png">

<img width="2090" alt="Screen Shot 2022-10-03 at 6 59 06 PM" src="https://user-images.githubusercontent.com/15242022/193702472-bbcb3470-10fc-4ae9-948e-afc5da945a1a.png">

<img width="2090" alt="Screen Shot 2022-10-03 at 6 59 47 PM" src="https://user-images.githubusercontent.com/15242022/193702518-fd9a69af-073f-4209-855d-37f1f192f1a3.png">

<img width="2352" alt="Screen Shot 2022-10-03 at 7 00 25 PM" src="https://user-images.githubusercontent.com/15242022/193702580-6b6aa147-eb19-467d-bdf5-6735b30fbe79.png">

<img width="2524" alt="Screen Shot 2022-10-03 at 7 01 33 PM" src="https://user-images.githubusercontent.com/15242022/193702622-e3ffcb87-e1cc-4889-af6c-265790de0d16.png">

<img width="2524" alt="Screen Shot 2022-10-03 at 7 01 49 PM" src="https://user-images.githubusercontent.com/15242022/193702672-3d997dbc-d12f-476f-8b48-9e6b05b1ae0d.png">

<img width="2524" alt="Screen Shot 2022-10-03 at 7 02 39 PM" src="https://user-images.githubusercontent.com/15242022/193702706-46806441-bebc-4152-8da0-fecef9ebcc04.png">


# 3 Walktrough Videos: E-Commerce Back End

# Walktrough Video 1:

https://drive.google.com/file/d/10qxw-1SDeoCKdRaNKfHzZ2vcSdNFx97j/view?usp=sharing 

a)- Demonstration of how to create the schema from the MySQL shell

b)- Demonstration of how to seed the database from the command line

c)- Demonstration of how to start the application’s server

d)- Showing GET routes that returns all categories,a single category, POST, PUT and delete routes for categories on POSTMAN.

# Walktrough Video 2:

https://drive.google.com/file/d/1PTctQRIhdNc1RyTuTQwSdLJ4e0Wh9rkI/view?usp=sharing

Showing GET routes that returns all products,a single product, POST, PUT and delete routes for products on POSTMAN.

# Walktrough Video 3:

https://drive.google.com/file/d/17aMElg4qyzz5Hbdp874mEixHxtWAWr1e/view?usp=sharing

Showing GET routes that returns all tags,a single tag, POST, PUT and delete routes for tags on POSTMAN.

# Note:
I added 3 walktrough video instead of one because i wanted to follow the recommendations of Screencastify better maximun time of the lenght of video to 3 minutes.

---
© Done by: Bocar Ly
Assigment: Week 13 Homework 

[Github_URL](https://github.com/bl-engineer/homework13/)

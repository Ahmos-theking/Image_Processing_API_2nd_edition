# Image Processing API

## Table of Contents

* [Description](#Description)
* [How to Run](#How_to_run)
* [How to get the resized picture](#How_to_get_the_resized_picture)
* [languages Used](#languages_Used)
* [Author's name](#Author's_name)


## Description


This API is used to convert the type of image that comes from a database calling by name from Jpeg to png which is more suitable for websites and resize it with the wanted height and width.

## How to Run?
 To run this project, clone this repo to your machine, and in the command terminal of the folder do the following:
 type: npm install     //then
 type: npm run start   //to start the server which will log to localhost//3000. 
 type: npm  run test   //to the functionality of the server and to be sure of each part that works probably   

## How to get the resized picture
to get the endpoint and the resized picture of you want do these steps:
1- open your localhost on 3000 
2- add the route to the URL /city 
3- add the name of the picture you desire followed by the width then the height 
the full URL will be like this (http://localhost:3000/city/?name=encenadaport&width=200&height=500)
where city_name is encenadaport and width 200 , height 200.
## Note:
the foHow to get the endpoint and the resized picture on the localhostlder contains the src folder and dist folder and other folders please don't change anything inside these files and folders.

## languages_Used

This API build totally with JavaScript and TypeScript and The server is powered by Node.js using NPM
also, this API used  NPM  modules like prettier and Eslinal to refine and make code more readable.
 
 
 ## Author's name
 This project made by Ahmed Mostafa from scratch under the supervision of Udacity.

# Snewzzz

![GitHub repo code size](https://img.shields.io/github/languages/code-size/heyimmatt/snewz)
![GitHub contributors](https://img.shields.io/github/contributors/heyimmatt/snewz)
![GitHub stars](https://img.shields.io/github/stars/heyimmatt/snewz?style=social)
![GitHub forks](https://img.shields.io/github/forks/heyimmatt/snewz?style=social)
[![Twitter Follow](https://img.shields.io/twitter/follow/heyimmatt?style=social)](https://twitter.com/heyimmatt)
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-black.svg?style=plastic&logo=linkedin&colorB=2867B2)](https://www.linkedin.com/in/mattmcfarland/)

**Created by: Matt McFarland**

Snewzzz is a web app that will provide you the day's headlines from NewsAPI, but filters out anything to do with Trump or Covid-19 by default. You can un-snooze these topics by unchecking the associated boxes.

You can view it here: https://snewzzz.herokuapp.com/

Main Screen  
![Main Screen](https://github.com/HeyImMatt/snewz/blob/master/public/img/snewzzz-ui.png)

## Technologies Used
- Nodejs
- Express
- MongoDb
- Ejs
- NewsAPI
- JavaScript
- Bootstrap
- HTML
- CSS

## Prerequisites

Before you begin, ensure you have met the following requirements:
* You have an Internet browser (Chrome, Firefox, Safari, etc)
* You have a code editor (VS Code, Atom, etc)
* You have [nodejs](https://nodejs.org/en/) installed

## Installing Snewzzz

To install Snewzzz, follow these steps:

Via Downloading from GitHub:
1. Download this repository onto your machine by clicking the "Clone or Download" button
2. Download and extract the zip file to a directory of your choice
3. Open up the index.html, styles.css, and the scripts.js files in your preferred code editor
4. Open the index.html file in your preferred browser

Via command line:
```
$ git clone https://github.com/HeyImMatt/snewz.git
```
Install dependencies (see package.json file)

1. express
2. mongodb
3. node-fetch
4. helmet
5. ejs

```
$ npm <package name>
```
You will need a MongoDb account and database. Add your MongoDb URL into your process_env using your preferred method. I used a nodemon.json file.
```
$ cd snewz

$ code .

$ npm start
```
Navigate to your localhost address

## Known Bugs

There are no known bugs at this time

## Support and Contact

If you want to contact me you can reach me at <mrmcfarland@gmail.com>

## License

This project uses the following license: [MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2020 Matt McFarland

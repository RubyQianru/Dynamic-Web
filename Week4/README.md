# Dynamic Web Development

Repo for Dynamic Web Development. 

## Week 4

I simplistic "Ask NY Times" website that auto saves data from NY Times based on user inputs. 

## Setup

### Prerequisites

1. A text editor - preferably [VS Code](https://code.visualstudio.com/)
2. Live Server - Install Live Server pluggin in your VS Code.
3. Installed node.js, nodemon, express dependencies.


### Develop

To develop this document, you can follow the steps provided below:
1. Create a fork of this project on Github
2. Open the file in VS Code
3. Run the following command:

```
npx nodemon server.js
```

or

```
node server.js
```

### Deployment

This project is hosted on Glitch. Link - [https://week2-dynamic-web.glitch.me]

## Built with

* [VS Code](https://code.visualstudio.com/)
* [Github](https://github.com)

# Notes & Process

## Process & Documentation

1. The frontend structure and styling is based on Week3's files.
2. I used npm package manager for managing plugins including express, cors, nodemon, etc.
3. I created a POST route for scraping NY Times API, and save response data using JSON format. You may see the saved files in /data folder.

## Challenges & Struggles

1. Handling POST. 
2. The development requires constant debugging using console.log, in order to accurately and correctly handle JSON formats.

## Questions


# Dynamic Web Development

Repo for Dynamic Web Development. 

## Week 3

A website that allows user to search for NY Times articles with input keywords.

## Setup

### Prerequisites

1. A text editor - preferably [VS Code](https://code.visualstudio.com/)
2. Live Server - Install Live Server pluggin in your VS Code.


### Develop

To develop this document, you can follow the steps provided below:
1. Create a fork of this project on Github
2. Open the file in VS Code
3. Click **Go Live** on the bottom right of your VS Code window 

### Deployment

This project is hosted on Glitch. Go to /Week3 folder after clicking the link. (Link)[https://dynamic-web-ruby-zhang.glitch.me/Week3]

## Built with

* [VS Code](https://code.visualstudio.com/)
* [Github](https://github.com)

HTML consists  of two div elements: A container of the background, and a container of text.

# Notes & Process

## Process & Documentation

1. Get NY Times API keys from NY Times Developers platform: Link - https://developer.nytimes.com/apis
2. Use asynchronous functions to fetch data from NY Times API:

```javascript

try{
        const response = await fetch(apiUrl)  
        const json = await response.json();

        const docs = json.response.docs

        for (const doc of docs) {
            const item = document.createElement("li");
            item.textContent = `${doc.abstract}`;
            list.appendChild(item);
        }
    
        nytimesContainer.appendChild(list);

    }catch(error){
        console.log(error)
    };
```

3. Process data received, and manipulate DOM with the processed data to present the titles received.
4. Add event listener to "learn more" button to enable scroll animation.

## Challenges & Struggles

1. Data processing of the JSON data received from NY Times API. 
2. Add event listener to button and allow the window to scroll when button is clicked.

## Questions & Thoughts

1. How should I implement scroll animations?

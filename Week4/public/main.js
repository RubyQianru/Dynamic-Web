const nytimesContainer = document.querySelector("#nytimesContainer");
const list = document.createElement("ul");

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

async function fetchTopStories(input) {

    const apiUrl = "http://localhost:3000/nytimes";

    try{
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "input": input })
        })  
        const json = await response.json();
        const message = json.message

        const res = document.createElement("p");
        res.textContent = `${message}`;
        
        nytimesContainer.appendChild(res);

    }catch(error){
        console.log(error)
    };

} 

searchButton.addEventListener("click", () => {
    const userInput = searchInput.value.trim();
    if (userInput) {
        fetchTopStories(userInput);
    }

    window.scrollTo({
        top: window.scrollY + window.innerHeight, 
        behavior: 'smooth' 
    });

  });

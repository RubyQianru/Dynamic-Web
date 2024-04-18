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
        console.log(response);
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

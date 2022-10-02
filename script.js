const productsDiv = document.getElementById('cards')

window.onload = getAllInformations


async function getAllInformations() {
    const unvan = "informations.json"

    try {
        const unsuccessfulData = await fetch(unvan)
        const successfulData = await unsuccessfulData.json()

        for(let i=0; i<successfulData.length; i++)
        
        productsDiv.innerHTML+= `
        <div class="card">
        <div class="images">
        <img class="image" src="${successfulData[i].img}"></div>
        <div class="text-section">
        <h2> ${successfulData[i].country_name} </h2>
        <h3> Population: ${successfulData[i].population} </h3>
        <h4> Language: ${successfulData[i].language} </h4>
        <p> Currency: ${successfulData[i].currency} </p> </div>
        <div class="field">
        <div class="likeButton">
        <span class="btn"></span>
        </div>
        </div>
        </div>
        `
    }

    catch(error) {
        document.write(`error occured: ${error}`);
    }
}

const likeButton = document.querySelector(".likeButton");
    likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("liked");
  });

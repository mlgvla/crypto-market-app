console.log(info)
    function testData(info) {
        let arrayNames = info;
        let cat = arrayNames.filter(element => element.symbol.toLowerCase() === 'btc');
        return cat;
    }
    testData(info)
// Function to fetch API endpoint. Converted from Curl to Fetch.
function fetchTrendingCoins() {
    return fetch("https://api.coingecko.com/api/v3/search/trending", {
        headers: {
            Accept: "application/json"
        }
    })
    .then(resp => resp.json())
    .then(json => renderTrendingCoins(json.coins));
}

/*
Top search Function to search for coins based on user input. 
Must update code to work with new API endpoint
*/
const topSearch = () => {
    const topSearchForm = document.querySelector('#form-1');
    topSearchForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const input = document.querySelector('input#searchCoinID');
  
        fetch(`https://api.coingecko.com/api/v3/search?query=${input.value}`, { 

                 headers: {
                    Accept: "application/json"
                 }
             })
                .then( response => response.json())
                .then(json => {
        
                    renderSearchCoins(json.coins)
                })
    });
}
// Top search Function END!
/*
Main search function to search for coins based on user input. 
Must update code to work with new API endpoint
*/
const mainSearch = () => {
    const mainSearchForm = document.querySelector('#form-2');
    mainSearchForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const input = document.querySelector('input#searchCoinID2');
  
        fetch(`https://api.coingecko.com/api/v3/search?query=${input.value}`, { 

                 headers: {
                    Accept: "application/json"
                 }
             })
                .then( response => response.json())
                .then(json => {
                    console.log(json.coins)
                    renderSearchCoins(json.coins)
                })
    });
}
// Main search Function END!
// For search forms
document.addEventListener('DOMContentLoaded', topSearch);
document.addEventListener('DOMContentLoaded', mainSearch);

// Function to render top 7 trending coins on the DOM.
function renderTrendingCoins(coins) {
    
    const trendingResults = document.querySelector('#trendingResults');
    coins.forEach(coin => {

        const div = document.createElement('div')
        
        div.className = 'list-group';
        // Must convert to textContent
        div.innerHTML = `
        <button type="button" class="list-group-item list-group-item-action" data-bs-toggle="modal" data-bs-target="#modalID" onclick="modalData()">
                <img src="${coin.item.small}" alt="">
            <div class="d-flex w-100 justify-content-between">
                    <h6 class="mb-1">${coin.item.name} (${coin.item.symbol})</h6>
                <small>Market Rank: ${coin.item.market_cap_rank}</small>
            </div>
            <small>Score: ${coin.item.score}</small>
        </button>
        `
        trendingResults.appendChild(div);
        
    });
}
// Function to render search results
function renderSearchCoins(coins) {
    
    const searchResults = document.querySelector('#searchResults');
    coins.forEach(coin => {
       
        const div = document.createElement('div')

// Must convert to textContent
        div.className = 'list-group';
        div.innerHTML = `
        <button type="button" class="list-group-item list-group-item-action" data-bs-toggle="modal" data-bs-target="#modalID" onclick="modalData()">
                <img src="${coin.thumb}">
            <div class="d-flex w-100 justify-content-between">
                <div id="crypto-name">
                    <h6 class="mb-1">${coin.name} (${coin.symbol})</h6>
                </div>
                <small>Market Cap Rank: ${coin.market_cap_rank}</small>
            </div>
        </button>
        `
        searchResults.appendChild(div);
    });
}

document.getElementById("modalbutton").onclick = function() {modalData()};

function modalData() {
    const { 
        symbol,
        name,
        image, 
        current_price,
        market_cap_rank, 
        high_24h, 
        low_24h, 
    } = testData(info)[0]

    // Get modal IDs 
    const coinImage = document.getElementById("coinImage")
    const divCoinImage = document.createElement('div')
        coinImage.innerHTML = `
        <img src="${image}" height="30px">
        `
    
    document.getElementById("modalH5").textContent = `
        ${name} (${symbol})
    `
    const modalDiv2 = document.getElementById("modalDiv")
    const div = document.createElement('div')
    //Get element ID via modal body
    // Must convert to textContent
    modalDiv2.innerHTML = `
    <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">Rank</th>
            <th scope="col">Current Price</th>
            <th scope="col">High <= 24hr</th>
            <th scope="col">Low <= 24hr</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">#${market_cap_rank}</th>
            <td>$${current_price}</td>
            <td>$${high_24h}</td>
            <td>$${low_24h}</td>
            </tr>
        </tbody>
    </table>
     Chart coming soon!
    `
}

// Call fetchTrendingCoins function and fetch API on page load. 
document.addEventListener("DOMContentLoaded", function() {
    fetchTrendingCoins()
});
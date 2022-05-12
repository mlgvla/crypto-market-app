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

// Top search Function to search for coins based on user input.
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
// Main search function to search for coins based on user input.
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
        div.innerHTML = `
        <a data-toggle="modal" href="javascript:void(0)" class="list-group-item data-bs-target="#exampleModal" list-group-item-action">
                <img src="${coin.item.small}">
            <div class="d-flex w-100 justify-content-between">
                    <h6 class="mb-1">${coin.item.name} (${coin.item.symbol})</h6>
                <small>Market Cap Rank: ${coin.item.market_cap_rank}</small>
            </div>
            <p class="mb-1">BTC Price: ${coin.item.price_btc}</p>
            <small>Score: ${coin.item.score}</small>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
        </a>
        `
        trendingResults.appendChild(div);
        
    });
}

// Function to render search results
function renderSearchCoins(coins) {
    
    const searchResults = document.querySelector('#searchResults');
    coins.forEach(coin => {
       
        const div = document.createElement('div')
        
        div.className = 'list-group';
        div.innerHTML = `
        <a data-toggle="modal" href="" class="list-group-item list-group-item-action">
                <img src="${coin.thumb}">
            <div class="d-flex w-100 justify-content-between">
                <div id="crypto-name">
                    <h6 class="mb-1">${coin.name} (${coin.symbol})</h6>
                </div>
                <small>Market Cap Rank: ${coin.market_cap_rank}</small>
                
            </div>
            
        </a>
        `
        searchResults.appendChild(div);
        
    });
}


// Call trendingCoins function and fetch API on page load. 
document.addEventListener("DOMContentLoaded", function() {
    fetchTrendingCoins()
});
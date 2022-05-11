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
        
                    renderTrendingCoins(json.coins)
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
        
                    renderTrendingCoins(json.coins)
                })
    });
}
// Main search Function END!
// For search forms
document.addEventListener('DOMContentLoaded', topSearch);
document.addEventListener('DOMContentLoaded', mainSearch);

// Function to render top 7 trending coins on the DOM.
function renderTrendingCoins(coins) {
    console.log(coins)
    const listGroup = document.querySelector('.list-group');
    coins.forEach(coin => {
        const div = document.createElement('div');
        const results = document.querySelector('#results');
        div.className = 'list-group';
        div.innerHTML = `
        <a href="#" class="list-group-item list-group-item-action">
                <img src="${coin.item.small}">
            <div class="d-flex w-100 justify-content-between">
                <div id="crypto-name">
                    <h6 class="mb-1">${coin.item.name} (${coin.item.symbol})</h6>
                </div>
                <small>Market Cap Rank: ${coin.item.market_cap_rank}</small>
            </div>
            <p class="mb-1">Price: ${coin.item.price_btc}</p>
            <small>Score: ${coin.item.score}</small>
        </a>
        `
        // div.textContent = <small>And some small print.</small>
        listGroup.append(div);
        
    });
}
 
// Call trendingCoins function and fetch API on page load. 
document.addEventListener("DOMContentLoaded", function() {
    fetchTrendingCoins()
});

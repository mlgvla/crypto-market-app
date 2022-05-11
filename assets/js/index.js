// Function to fetch API endpoint. Converted from Curl to Fetch.
function trendingCoins() {
    return fetch("https://api.coingecko.com/api/v3/search/trending", {
        headers: {
            Accept: "application/json"
        }
    })
    .then(resp => resp.json())
    .then(json => renderCoins(json.coins));
}

// Function to search for coins based on user input.
const init = () => {
    const searchForm = document.querySelector('form');

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const input = document.querySelector('input#searchCoinID');

        fetch(`https://api.coingecko.com/api/v3/search?query=${input.value}`)
            .then(resp => resp.json()) 
            .then(json => {
                renderCoins(json.coins)
                console.log(json)
            })
    });
}
// function searchCoins() {
//    return fetch("https://api.coingecko.com/api/v3/search?query= ", { //check the end of query
//         headers: {
//             Accept: "application/json"
//         }
//     })
//         .then(resp => resp.json())
//         .then(json => renderCoins(json));
// }


function renderCoins(coins) {
    console.log(coins)
    const cyrptoName = document.querySelector('.list-group');
    coins.forEach(coin => {
        const div = document.createElement('div');
        const results = document.querySelector('#results');
        div.className = 'list-group';
        div.innerHTML = `
        <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
                <div id="crypto-name">
                    <h5 class="mb-1">${coin.item.name}</h5>
                </div>
                <small>Market Cap Rank:</small>
            </div>
            <p class="mb-1">Some placeholder content in a paragraph.</p>
            <small>And some small print.</small>
        </a>
        `
        // div.textContent = <small>And some small print.</small>
        cyrptoName.append(div);
        
    });
}
 
// Call trendingCoins function and fetch API on page load. 
document.addEventListener("DOMContentLoaded", function() {
    trendingCoins()
});

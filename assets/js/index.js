// Function to fetch API endpoint. Converted from Curl to Fetch.
function trendingCoins() {
    return fetch("https://api.coingecko.com/api/v3/search/trending", {
        headers: {
        Accept: "application/json"
        }
    })
        .then(resp => resp.json())
        .then(json => renderCoins(json));
 }

function fetchCoins() {
   return fetch("https://api.coingecko.com/api/v3/search?query= ", { //check the end of query
    headers: {
      Accept: "application/json"
    }
  })
        .then(resp => resp.json())
        .then(json => renderCoins(json));
}

function renderCoins() {
    
}

 
// Fetch API on page load. 
document.addEventListener("DOMContentLoaded", function() {
    trendingCoins()
});

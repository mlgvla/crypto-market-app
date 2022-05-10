function fetchCoin() {
   return fetch("https://api.coingecko.com/api/v3/coins/list", {
    headers: {
      Accept: "application/json"
    }
  })
}
fetchCoin()
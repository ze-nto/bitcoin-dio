
let apiKey = {
    key: "0eb4b797-399c-4518-8e2c-9961cad4eadb"
}




fetch ("https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=" +
    apiKey.key)
    .then((response) => {
        if(!response.ok) throw new Error("Erro ao executar a requisição, status " + response.status);
        return response.json();
    })
    .then((api) => {
        let texto = "";

        for(let i = 0; i < 10; i++){
            // console.log(api);

            texto = texto + `
            
            <div class="media">
                <img src="coin.jpg" alt="" class="align-self-center mr-3" alt="Coin" width="100" height="60">
                <div class="media-body">
                    <h5 class="mt-2">${api.data[i].name}</h5>
                    <p>${api.data[i].symbol}</p>
                </div>
            </div>`;
        
            document.getElementById("coins").innerHTML = texto;
        }
    })
    .catch((err) => {
        console.error(error.message);
    });
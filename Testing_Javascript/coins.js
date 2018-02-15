/*  Name:Api
    Purpose: Fetch json data from api's
*/
async function api(URL) {
  // Message to the user.
 console.log('Calling the API ');
 // Variables to hold the data coming.
 const data = await fetch(URL);
 return await data.json();
}

function coinSelection(coin){
    url =`https://api.fixer.io/latest?base=${coin}`;
    let div = document.querySelector("#result");
    div.innerHTML+= `Coin exchanges for ${coin}`;
    api(url).then((value) => {
      div.innerHTML += `<p > Date: ${value.date}</p>`;
      for(const [key, val] of Object.entries(value.rates)){
        div.innerHTML += `<p >${key}:${val}</p>`;
     }
    })
}

function clicked(){
  let coin = document.querySelector("#coinSelect").value;
  if(coin === ""){
    coin = 'CAD';
  }
  coinSelection(coin);
}

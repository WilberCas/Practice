/* Name: API call
  Function: Call and filter data coming from server
*/
 async function api(URL) {
   // Message to the user.
  console.log('Calling the API ');
  // Variables to hold the data coming.
  const data = await fetch(URL);
  return await data.json();
}
function createLayout(URL, valToSearch) {
  api(URL).then((value) => {
    let element = document.querySelector('#result').insertAdjacentHTML ('beforeend',`<p >${value[valToSearch]}</p>`);
  });

}
function createLayoutOptions(URL){
  let div = document.getElementById('optionsInfo');
  if(div === null){
    document.querySelector('.myclass').insertAdjacentHTML ('beforeend', '<div id="optionsInfo"></div>');
    div = document.getElementById('optionsInfo');
    div.innerHTML += 'Options of the API: ';
    api(URL).then((value) => {
      for(const [key, val] of Object.entries(value)){
        div.innerHTML += `<p >${key}</p>`;
     }
   });
  }
}


function clicked(){
  const urlPage= document.getElementById('searchURL').value;
  const valueToSearch = document.getElementById('searchText').value;
  createLayout(urlPage, valueToSearch);
}

function options(){
  const urlPage= document.getElementById('searchURL').value;
   createLayoutOptions(urlPage);
}

function clearElements(){
  document.getElementById('searchURL').value = "";
  document.getElementById('searchText').value = "";
  let opt = document.getElementById('optionsInfo');
  let result = document.getElementById('result');
  if (!(opt === null) ){
    opt.outerHTML = "";
    delete opt;
  }
  if (!(result === null) ){
    result.outerHTML = "";
    delete result;
  }
}

// window.addEventListener('load', () => {
//     document.querySelector('.loader-container').style.display ="none";
//   })



const loeadData = () =>{
  fetch('https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p')
  .then(res => res.json())
  .then(data => showPlayers(data.player));

};
loeadData();

const getSearchVale = ()=>{
    const searchValue = document.getElementById('Input-fild');
    const searchText =searchValue.value;
    searchValue.value ='';
    const url = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${searchText}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => showPlayers(data.player))
};

const showPlayers = players =>{
    const playersContainer = document.getElementById('playersContener')
    playersContainer.textContent='';
    if( players== null){
        const p = document.createElement('p')
        p.innerHTML =`<p class="text-uppercase text-danger text-center mt-5">##There Is No food of this name##</p>`
        playersContainer.appendChild(p);
    }
    else{
        for(const player of players ){
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div class="card h-100">
                    <img src="${player.strThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${player.strPlayer}</h5>
                      <h5 class="card-title">sport: ${player.strSport}</h5>
                      <h3 class="card-title">Date Of Birth : ${player.dateBorn}</h3>
                      <h3 class="card-title">Gender :${player.strGender}</h3>
                      <h3 class="card-title">Birth Location :${player.strBirthLocation}</h3>
                      <p class="card-text">${player.strDescriptionEN.slice(0,200)}</p>
                    </div>
                  </div>
            `
            playersContainer.appendChild(div);
            console.log(player)
        }
    }




   
    
}
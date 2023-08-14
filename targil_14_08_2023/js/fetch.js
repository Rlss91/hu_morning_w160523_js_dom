const initData = async () => {
  try {
    let response = await fetch("https://rickandmortyapi.com/api/character");
    let data = await response.json();
    /*
        let data = await response.text();
        data (string)
        data = JSON.prase(data)
        data (object)
    */
    // console.log("data", data);
    // console.log(data.results[0].name);
    console.log(data.results);
    let containerDiv = document.getElementById("containerDiv");
    //for(let someName of array)
    for (let myCharacter of data.results) {
      containerDiv.innerHTML += `
    <div class="card text-bg-dark">
        <img
          src="${myCharacter.image}"
          class="card-img"
          alt="..."
        />
        <div class="card-img-overlay">
          <h5 class="card-title">${myCharacter.name}</h5>
        </div>
      </div>
    `;
    }
  } catch (err) {}
};
initData();

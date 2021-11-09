let got = {
  houses: [
    {
      name: "Starks",
      wikiLink: "http://gameofthrones.wikia.com/wiki/House_Stark",
      people: [
        {
          name: 'Eddard "Ned" Stark',
          description:
            "Lord of Winterfell - Warden of the North - Hand of the King - Married to Catelyn (Tully) Stark",
          image:
            "https://raw.githubusercontent.com/nnnkit/json-data-collections/master/game-of-thrones/game-of-thrones-eddard-stark.jpg",
          wikiLink: "http://gameofthrones.wikia.com/wiki/Eddard_Stark",
        },
        
let parentElm = document.querySelector(".mainbox")
        
let allPeople = got.houses.reduce((acc, cv) => {
 acc = acc.concat(cv.people);
    return acc;
  }, []);

let cardsHTML =  allPeople.map(person => {
  return `<li class="card">
            <div class="info">
              <img src=${person.image}
                    alt=${person.name}
              />
              <h2>${person.name}</h2>
            </div>
            <p> ${person.description} </p>
            <a href= ${person.wikiLink}> Learn More! </a>
         </li>`;
});

parentElm.innerHTML = cardsHTML.join("")


        

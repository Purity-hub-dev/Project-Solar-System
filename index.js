const planetValues = {
  mecury: { mass: 3.3e23, radius: 2.44e6, surfaceGravity: 3.7 },
  venus: { mass: 4.87e24, radius: 6.05e6, surfaceGravity: 8.87 },
  earth: { mass: 5.97e24, radius: 6.37e6, surfaceGravity: 9.81 },
  mars: { mass: 6.39e23, radius: 3.39e6, surfaceGravity: 3.71 },
  jupiter: { mass: 1.9e27, radius: 6.99e7, surfaceGravity: 24.79 },
  saturn: { mass: 5.68e25, radius: 5.82e7, surfaceGravity: 10.44 },
  uranus: { mass: 8.68e26, radius: 2.54e7, surfaceGravity: 8.69 },
  neptune: { mass: 1.02e26, radius: 2.46e7, surfaceGravity: 11.15 },
  pluto: { mass: 1.303e26, radius: 2.46e7, surfaceGravity: 0.62 },
  moon: { mass: 7.34e26, radius: 2.46e7, surfaceGravity: 1.63 },
};
const button = document.querySelector("button");
button.addEventListener("click", calculateWeight);

function calculateWeight() {
  const mass = document.querySelector("#mass").value,
    eachPlanet = document.querySelector("#planet").value,
    container = document.querySelector(".main_container");

  let content = document.querySelector("p.content");


    if (mass === "") {
      return content.textContent = 'Mass is required';
  }
    if (eachPlanet === "none") {
      return (content.textContent =
        'Planet is required to carry out this operation');
  }

  container.innerHTML = "";

    const planetName = planetValues[eachPlanet.toLowerCase()];

    const weight = parseFloat(mass * planetName.surfaceGravity).toFixed(2);

    const description = `
    <img src= './24_day_starter/images/${eachPlanet.toLowerCase()}.png' alt= '${eachPlanet}'/>

    <div class= "text_container">
      <div class="content">
        The weight of an object on 
        ${eachPlanet}
      </div>
      <div class= 'calculateWeight'>
        ${weight} N
      </div>
    </div>
  `;
  container.innerHTML = description;
}

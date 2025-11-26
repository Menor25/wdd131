const navigation = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const old = document.querySelector('#old');
const newTemple = document.querySelector('#new');
const large = document.querySelector('#large');
const small = document.querySelector('#small');

const navLinks = document.querySelectorAll(".nav-link");

const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;

hambutton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hambutton.classList.toggle('show');
})

navLinks.forEach(link => {
  link.addEventListener("click", function () {
    navLinks.forEach(removeLinks => removeLinks.classList.remove("active"));

    this.classList.add("active");
  });

});


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "McAllen Texas Temple",
    location: "Texas, United States",
    dedicated: "2023, October, 8",
    area: 27897,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mcallen-texas-temple/mcallen-texas-temple-39905-main.jpg"
  },
  {
    templeName: "Bern Switzerland Temple",
    location: "Zollikofen, Switzerland",
    dedicated: "1955, September, 11–15",
    area: 35546,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54641-main.jpg"
  },  
  {
    templeName: "Perth Australia Temple",
    location: "Yokine, Western Australia",
    dedicated: "1999, November, 20",
    area: 10700,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/perth-australia-temple/perth-australia-temple-34994-main.jpg"
  },
];

createCard(temples);

// Filtering old temples
old.addEventListener("click", () => {
  let oldLink = temples.filter((temple) => {
    const yearString = temple.dedicated.split(", ")
    const year = parseInt(yearString[0]);
    return year < 1900;
  });
  createCard(oldLink);
})

// Filtering new temples
newTemple.addEventListener("click", () => {
  let newLink = temples.filter((temple) => {
    const yearString = temple.dedicated.split(", ")
    const year = parseInt(yearString[0]);
    return year > 2000;
  })
  createCard(newLink);
})

// Filtering small big temples
large.addEventListener("click", () => {
  let largeLink = temples.filter((temple) => {
    return temple.area > 90000;
  })
  createCard(largeLink);
})

// Filtering small size temples
small.addEventListener("click", () => {
  let smallLink = temples.filter((temple) => {
    return temple.area < 10000;
  });
  createCard(smallLink)
})

function createCard(filteredTemple) {
  document.querySelector(".card-container").innerHTML = "";
  filteredTemple.forEach((temple) => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('template-card');

    const h2 = document.createElement('h2');
    h2.textContent = temple.templeName;

    const p = document.createElement('p');
    p.innerHTML = `<span>Location:</span> ${temple.location}`;

    const p2 = document.createElement('p');
    p2.innerHTML = `<span>Dedicated:</span> ${temple.dedicated}`;

    const p3 = document.createElement('p');
    p3.innerHTML = `<span>Size:</span> ${temple.area}`;

    const img = document.createElement('img');
    img.setAttribute('src', temple.imageUrl);
    img.setAttribute('alt', `Picture of ${temple.templeName} template`);
    img.setAttribute('loading', 'lazy');

    cardDiv.append(h2, p, p2, p3, img);

    document.querySelector(".card-container").append(cardDiv);
})
}

// document.querySelector('#card-title').innerHTML = title;
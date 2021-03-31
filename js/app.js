var hotels = {
    Mencey: {
        name: "Mencey",
        location: "Tenerife",
        img: "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
    },
    Lani: {
        name: "Lani's Suites Deluxe",
        location: "Lanzarote",
        img: "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/49/47/e3/lani-s-suites-deluxe.jpg",
    },
};
var stars = {
    1: "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    2: "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    3: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    4: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    5: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};
var selectedHotel = prompt("Indique hotel sobre el que quiere hacer la reseña: Mencey o Lani: ");
var rating = prompt("Puntuación del 1 al 5:");
var anonymous = confirm("¿Quiere que la reseña sea anónima?");

document.getElementById("name-hotel").innerHTML = "Hotel " + hotels[selectedHotel].name;
document.getElementById("location-hotel").innerHTML = "Ubicado en " + hotels[selectedHotel].location;
document.getElementById("img-hotel").src = hotels[selectedHotel].img;
document.getElementById("rating").innerHTML = stars[rating];
document.getElementById("anonymous").checked = anonymous;
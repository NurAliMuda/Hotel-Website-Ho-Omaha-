let text = document.getElementById("text");
let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hill1");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");
let plant = document.getElementById("plant");

window.addEventListener("scroll", () => {
    let value = window.scrollY;

    text.style.transform = `translateY(${value * 2.5}px)`;
    leaf.style.transform = `translate(${value * 1.5}px, ${value * -1.5}px)`;
    hill5.style.transform = `translateX(${value * 1.5}px)`;
    hill4.style.transform = `translateX(${value * -1.5}px)`;
    hill1.style.transform = `translateY(${value}px)`;
    plant.style.transform = `translateY(${value * 0.5}px)`;
});

// wave animation
let waveBack = document.querySelector(".wave-back");
let waveMid = document.querySelector(".wave-mid");
let waveFront = document.querySelector(".wave-front");

window.addEventListener("scroll", () => {
    let value = window.scrollY;

    waveBack.style.transform = `translateY(${value * 0.1}px)`;
    waveMid.style.transform = `translateY(${value * 0.2}px)`;
    waveFront.style.transform = `translateY(${value * 0.3}px)`;
});

// ROOM BOOKING
const form = document.querySelector(".booking-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    let data = new FormData(form);

    let response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        alert("Booking request sent!");
        form.reset();
    } else {
        alert("Something went wrong.");
    }
});

// const rooms = [
//     { name: "Standard Room", price: 120, img: "room1.jpg" },
//     { name: "Deluxe Room", price: 200, img: "room2.jpg" },
//     { name: "Suite", price: 350, img: "room3.jpg" }
// ];

// function checkAvailability() {
//     document.getElementById("step1").classList.add("hidden");
//     document.getElementById("step2").classList.remove("hidden");

//     let roomList = document.getElementById("roomList");
//     roomList.innerHTML = "";

//     rooms.forEach(room => {
//         roomList.innerHTML += `
//             <div class="room-card">
//                 <img src="${room.img}">
//                 <h3>${room.name}</h3>
//                 <p>$${room.price}/night</p>
//                 <button onclick="selectRoom('${room.name}', ${room.price})">
//                     Select
//                 </button>
//             </div>
//         `;
//     });
// }

// // CONFIRM BOOKING
// let selectedRoom = null;

// function selectRoom(name, price) {
//     selectedRoom = { name, price };

//     document.getElementById("step2").classList.add("hidden");
//     document.getElementById("step3").classList.remove("hidden");

//     document.getElementById("summary").innerText =
//         `You selected: ${name} - $${price}/night`;
// }

// function confirmBooking() {
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;

//     alert(`Thank you ${name}! Booking confirmed for ${selectedRoom.name}`);
// }

// takyah delete
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});
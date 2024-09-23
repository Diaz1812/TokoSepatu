//toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika humbergur menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const images = [
  "url(img/sepatu1.jpg)",
  "url(img/sepatu2.jpg)",
  "url(img/sepatu3.jpg)",
];
let currentIndex = 0;

function changeBackground() {
  // Ganti background-image
  document.querySelector(".hero").style.backgroundImage = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}

// Set background awal
document.querySelector(".hero").style.backgroundImage = images[currentIndex];

// Ganti gambar setiap 5 detik
setInterval(changeBackground, 5000);

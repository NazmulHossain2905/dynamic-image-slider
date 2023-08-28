const body = document.querySelector("body");
const slideImage = document.querySelector(".slide-image");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const dotsParent = document.querySelector(".dots");

const IMAGES = [
  "https://c4.wallpaperflare.com/wallpaper/448/174/357/neon-4k-hd-best-for-desktop-wallpaper-preview.jpg",
  "https://i.pinimg.com/736x/a3/15/80/a3158011a18e623c4d25b68846ee9383.jpg",
  "https://images.freecreatives.com/wp-content/uploads/2015/10/awesome-moon-wide-high-definition-wallpaper-.jpg",
  "https://cdn.wallpapersafari.com/52/98/5oPLsu.jpg",
  "https://i.pinimg.com/736x/43/71/a5/4371a5030e717706b8264be1e8d6bdb1.jpg",
  "https://c0.wallpaperflare.com/preview/789/637/166/backlit-chiemsee-dawn-desktop-backgrounds.jpg",
  "https://wallpapers.com/images/featured/desktop-lsjkr6wg7ctq97qv.jpg",
  "https://www.pixelstalk.net/wp-content/uploads/images6/Aesthetic-PC-Wallpaper-Desktop.jpg",
  "https://i.pinimg.com/1200x/02/ba/86/02ba867e545f953631148c89629412b1.jpg",
  "https://a-static.besthdwallpaper.com/night-mountain-wallpaper-1280x768-81164_13.jpg",
];

let imageIndex = 0;

IMAGES.forEach((image, index) => {
  const div = document.createElement("div");
  div.className = "dot";
  div.innerText = ++index;
  dotsParent.appendChild(div);
});

const allDot = document.querySelectorAll(".dot");

// Active dot functionality
const activeDot = (activeDotIndex) => {
  allDot.forEach((dot) => {
    if (dot.classList.contains("activeDot")) {
      dot.classList.remove("activeDot");
    }

    allDot[activeDotIndex].classList.add("activeDot");
  });
};

// On dot click image change and remove previously active dot
allDot.forEach((dot, index) => {
  dot.addEventListener("click", (event) => {
    imageIndex = index;
    slideImage.src = IMAGES[index];
    body.style.backgroundImage = `url(${IMAGES[index]})`;

    allDot.forEach((dot, index) => {
      if (dot.classList.contains("activeDot")) {
        dot.classList.remove("activeDot");
      }
    });

    dot.classList.add("activeDot");
  });
});

// Go to next image function
const nextImage = () => {
  if (imageIndex < IMAGES.length - 1) {
    slideImage.src = IMAGES[++imageIndex];
    body.style.backgroundImage = `url(${IMAGES[imageIndex]})`;
    activeDot(imageIndex);
  } else {
    imageIndex = 0;

    slideImage.src = IMAGES[imageIndex];
    body.style.backgroundImage = `url(${IMAGES[imageIndex]})`;
    activeDot(imageIndex);
  }
};

// Go to previous image function
const previousImage = () => {
  if (imageIndex > 0) {
    slideImage.src = IMAGES[--imageIndex];
    body.style.backgroundImage = `url(${IMAGES[imageIndex]})`;
    activeDot(imageIndex);
  } else {
    imageIndex = IMAGES.length - 1;

    slideImage.src = IMAGES[imageIndex];
    body.style.backgroundImage = `url(${IMAGES[imageIndex]})`;
    activeDot(imageIndex);
  }
};

slideImage.src = IMAGES[0];
allDot[0].classList.add("activeDot");

rightBtn.addEventListener("click", nextImage);
leftBtn.addEventListener("click", previousImage);

// Auto change image
setInterval(nextImage, 5000);

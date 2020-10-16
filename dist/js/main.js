window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".nav");
  const body = document.querySelector("body");
  const btn = document.querySelector(".menu-btn");
  const searchBtn = document.querySelector(".search-icon");
  const searchInput = document.querySelector(".search-input");
  const btnPlay = document.querySelector(".play-btn");
  const overlay = document.querySelector(".overlay");
  const btnClose = overlay.querySelector(".close");
  let player;

  //Slider
  $(".slider-wrapp").slick({
    autoplay: true,
    slideToShow: 1,
    slideToScroll: 1,
    draggable: false,
    dots: true,
    prevArrow: '<button type = button class = "slick-prev">01</button>',
    nextArrow: `<button type = button class = "slick-next">03</button>`,
    appendDots: $(".slider-nav"),
    appendArrows: $(".slider-nav"),
  });

  //VideoPlayer

  function createPlayer(url) {
    player = new YT.Player("frame", {
      height: "100%",
      width: "100%",
      videoId: `${url}`,
    });

    overlay.style.display = "block";
  }

  function init() {
    const tag = document.createElement("script");

    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    btnPlay.addEventListener("click", () => {
      if (document.querySelector("iframe#frame")) {
        overlay.style.display = "block";
      } else {
        const path = btnPlay.getAttribute("data-url");
        createPlayer(path);
      }
    });
  }

  btnClose.addEventListener("click", () => {
    overlay.style.display = "none";
    player.stopVideo();
  });

  //Burger Menu
  btn.addEventListener("click", () => {
    btn.classList.toggle("menu-open");
    menu.classList.toggle("nav-open");
    body.classList.toggle("nav-open");
  });

  searchBtn.addEventListener("click", () => {
    searchInput.focus();
  });

  init();
});

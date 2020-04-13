document.addEventListener("scroll", () => {
  //alert( window.scrollY );

  let scrollPos = window.scrollY;
  if (scrollPos >= 200) {
    document.querySelector(".scroll-top").style.display = "unset";
    document.getElementById("scroll-top-container").style.opacity = "0.7";
    document.getElementById("scroll-top-container").style.transition =
      "0.5s ease-in-out";
  } else {
    document.getElementById("scroll-top-container").style.opacity = "0";
  }
});

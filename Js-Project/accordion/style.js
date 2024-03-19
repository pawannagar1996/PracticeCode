const clickMe = document.querySelectorAll(".accordian-item");

clickMe.forEach((item) => {
  item.addEventListener("click", () => {
    for (var i = 0; i < clickMe.length; i++) {
      if (clickMe[i] != item) {
        clickMe[i].classList.remove("active");
      } else {
        item.classList.toggle("active");
      
      }
    }
  });
});

const clickMe = document.querySelectorAll(".accordian-item")

clickMe.forEach((item) => {
    const showHide = document.querySelector(".accordian-context")
    const title = item.querySelector(".accordian-title")

    title.addEventListener("click", () => {

        for (var i = 0; i < clickMe.length; i++) {
            if (clickMe[i] != item) {
                clickMe[i].classList.remove("active")
            } else {
                item.classList.toggle("active")
            }
        }

    })

})
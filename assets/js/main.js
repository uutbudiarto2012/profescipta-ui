
AOS.init();
const topNav = document.querySelector("._topnav")
const btnOpenMega = document.querySelector(".btnOpenMega")
const btnCloseMega = document.querySelector(".btnCloseMega")
const megaMenu = document.querySelector(".mega-menu")
if (topNav) {
    const logoNav = topNav.querySelector(".main-nav .logo img")
    window.addEventListener("scroll", (event) => {
        let scroll = this.scrollY;
        if (scroll > 400) {
            logoNav.setAttribute("src", "./assets/images/logo_color_text.png")
            topNav.classList.add("scrolledTop")
        } else {
            logoNav.setAttribute("src", "./assets/images/logo_white_text.png")
            topNav.classList.remove("scrolledTop")

        }
    });

}

btnOpenMega.addEventListener("click", function () {
    megaMenu.classList.add("show")
    topNav.classList.add("d-none")
})
btnCloseMega.addEventListener("click", function () {
    megaMenu.classList.remove("show")
    topNav.classList.remove("d-none")
})
const showSolutionButton = document.querySelector(".showSolutionButton")
const hideSolutionButton = document.querySelector(".hideSolutionButton")
const linkInHero = document.querySelector(".link-in-hero")
if (showSolutionButton) {
    showSolutionButton.addEventListener("click", () => {
        linkInHero.classList.add("show")
    })

}
if (hideSolutionButton) {
    hideSolutionButton.addEventListener("click", () => {
        linkInHero.classList.remove("show")
    })

}


$(window).on('scroll', function () {
    const countOne = new CountUp('counterOne', 10, 1000);
    const countTwo = new CountUp('counterTwo', 2, 200);
    const countThree = new CountUp('counterThree', 0, 20);
    $('.counter').each(function () {
        if ($(this).inViewport('-250')) {
            countOne.start()
            countTwo.start()
            countThree.start()
        }
    });
});
// const countOne = new CountUp('counterOne', 10, 1000);
// const countTwo = new CountUp('counterTwo', 2, 200);
// const countThree = new CountUp('counterThree', 0, 20);
// $('.counter').each(function () {
//     if ($(this).inViewport('-150')) {
//         countOne.start()
//         countTwo.start()
//         countThree.start()
//     }
// });


// FITUR SECTION
const contentBox = document.querySelectorAll(".content-box")
const contentBoxDesk = document.querySelectorAll(".f-item-desk")
if (contentBox) {
    contentBox.forEach(content => {
        content.addEventListener("click", function () {
            const bodyContent = this.querySelector(".body-item")
            bodyContent && bodyContent.classList.toggle("show")
        })
    });
}
if (contentBoxDesk) {
    contentBoxDesk.forEach(content => {
        content.addEventListener("mouseover", function () {
            const thisContent = this.querySelector(".b-item-desk")
            if (thisContent) {
                thisContent.classList.add("show")
            }
        })
        content.addEventListener("mouseleave", function () {
            const thisContent = this.querySelector(".b-item-desk")
            if (thisContent) {
                thisContent.classList.remove("show")
            }
        })
    });
}
// FITUR SECTION


const talkToUsSec = document.querySelector('.talk-to-us-sec')
if (talkToUsSec) {

    talkToUsSec.addEventListener("mouseover", function (e) {
        const bgSectionttu = document.querySelector('.bg-section-ttu')
        bgSectionttu.style.transform = "scale(1.5) translateY(-10%)"
    })
    talkToUsSec.addEventListener("mouseleave", function (e) {
        const bgSectionttu = document.querySelector('.bg-section-ttu')
        bgSectionttu.style.transform = "scale(1)"
    })
}

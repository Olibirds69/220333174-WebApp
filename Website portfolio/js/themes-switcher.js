const styleSwitchToggle = document.querySelector(".themes-switcher-toggler");
styleSwitchToggle.addEventListener("click", () => {
    document.querySelector(".themes-switcher").classList.toggle("open")
})
window.addEventListener("scroll", () => {
    if(document.querySelector(".themes-switcher").classList.contains("open"))
    {
        document.querySelector(".themes-switcher").classList.remove("open")
    }
})
const alternateStyels = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyels.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon")
    }
})
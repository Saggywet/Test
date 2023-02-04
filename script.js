const toggle = document.querySelector(".dpb");
const siteNav = document.querySelector(".dpm");



toggle.addEventListener("click", function () {
    if (siteNav.classList.contains("dpm-open")) {
        siteNav.classList.remove("dpm-open");
        toggle.classList.remove("open");

        siteNav.classList.add("dpm-closed");
    } else {
        siteNav.classList.remove("dpm-closed");
        toggle.classList.add("open");

        siteNav.classList.add("dpm-open");
    }
});

let models_cont = document.querySelector('.box');

models_cont.addEventListener('wheel', (evnt) => {
    evnt.preventDefault();

    models_cont.scrollLeft += evnt.deltaY;
});


document.querySelectorAll('.box img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').classList.toggle("pshow");
        document.querySelector('.popup-image.pshow img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-image').onclick = () => {
    document.querySelector('.popup-image').classList.toggle("pshow");

}

const image = document.querySelectorAll(".gallery")

const imgObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("gshow", entry.isIntersecting)
        if (entry.isIntersecting) imgObserver.unobserve(entry.target)
    })
},
    {
    threshold: .25,
})

image.forEach(image => {
    imgObserver.observe(image)
})

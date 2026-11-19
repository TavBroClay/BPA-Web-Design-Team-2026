/* Cities' Slider */
const slider = document.querySelector("#citySlider figure");
const radios = document.querySelectorAll('input[name="r"]');
const bars = document.querySelectorAll(".switchBar");
const citySlider = document.querySelector("#citySlider");

let currentSlide = 0;
let autoSlide;

function showSlide(city) {
    currentSlide = city;
    slider.style.transform = `translateX(-${city * 10}%)`;
    radios[city].checked = true;
    bars.forEach(bar => bar.classList.remove("active"));
    bars[city].classList.add("active");
}
function nextSlide() {
    let next = (currentSlide + 1) % radios.length;
    showSlide(next);
}
function startAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 5000);
}
function stopAutoSlide() {
    clearInterval(autoSlide);
}
radios.forEach((radio, index) => {
    radio.addEventListener("change", function() {
        if (this.checked) {
            showSlide(index);
            startAutoSlide();
        }
    });
});
citySlider.addEventListener("mouseenter", stopAutoSlide);
citySlider.addEventListener("mouseleave", startAutoSlide);
showSlide(0);
startAutoSlide();

/* States' Slider */
const stateList = document.getElementById("stateList");
const stateFlags = Array.from(stateList.children);
const flagsPerSlide = 8;

function slideStates(direction) {

    const totalSlides = Math.ceil(
        stateFlags.length / flagsPerSlide
    );

    currentSlide += direction;

    currentSlide = Math.max(
        0,
        Math.min(currentSlide, totalSlides - 1)
    );

    stateFlags.forEach((flag, index) => {

        const start = currentSlide * flagsPerSlide;
        const end = start + flagsPerSlide;

        flag.style.display =
            index >= start && index < end ? "flex" : "none";

    });
}
slideStates(0);
const slider = document.querySelector("#citySlider figure");
const radios = document.querySelectorAll('input[name="r"]');
const bars = document.querySelectorAll(".bar");
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
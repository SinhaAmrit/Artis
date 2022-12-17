!function () { const e = document.documentElement; if (e.classList.remove("no-js"), e.classList.add("js"), document.body.classList.contains("has-animations")) { (window.sr = ScrollReveal()).reveal(".feature, .testimonial", { duration: 600, distance: "50px", easing: "cubic-bezier(0.5, -0.01, 0, 1.005)", origin: "bottom", interval: 100 }); const a = anime.timeline({ autoplay: !1 }), t = document.querySelector(".stroke-animation"); t.setAttribute("stroke-dashoffset", anime.setDashoffset(t)), a.add({ targets: ".stroke-animation", strokeDashoffset: { value: 0, duration: 2e3, easing: "easeInOutQuart" }, strokeWidth: { value: [0, 2], duration: 2e3, easing: "easeOutCubic" }, strokeOpacity: { value: [1, 0], duration: 1e3, easing: "easeOutCubic", delay: 1e3 }, fillOpacity: { value: [0, 1], duration: 500, easing: "easeOutCubic", delay: 1300 } }).add({ targets: ".fadeup-animation", offset: 1300, translateY: { value: [100, 0], duration: 1500, easing: "easeOutElastic", delay: function (e, a) { return 150 * a } }, opacity: { value: [0, 1], duration: 200, easing: "linear", delay: function (e, a) { return 150 * a } } }).add({ targets: ".fadeleft-animation", offset: 1300, translateX: { value: [40, 0], duration: 400, easing: "easeOutCubic", delay: function (e, a) { return 100 * a } }, opacity: { value: [0, 1], duration: 200, easing: "linear", delay: function (e, a) { return 100 * a } } }), e.classList.add("anime-ready"), a.play() } }();
function onSubmit(e) {
    e.preventDefault();
    document.querySelector('.msg').textContent = '';
    document.querySelector('#image').src = '';
    document.querySelector('.image').src = '';
    document.querySelector('.image').classList.remove('remove');
    document.querySelector('.image').classList.add('show');
    const prompt = document.querySelector('#prompt').value;
    // const size = document.querySelector('#size').value;
    const radioButtons = document.querySelectorAll('input[name="size"]');
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            size = radioButton.value;
            break;
        }
    }
    if (prompt === '') {
        alert('Please enter some text');
        return;
    }
    generateImageRequest(prompt, size);
}
async function generateImageRequest(prompt, size) {
    try {
        showSpinner();
        const response = await fetch('/openai/generateimage', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                prompt, size
            })
        });
        if (!response.ok) {
            hideSpinner();
            throw new Error('We do not draw this here! 😤');
        }
        const resData = await response.json();
        console.log(prompt, size);
        const imageURL = resData.data;
        document.querySelector('#image').src = imageURL;
        hideSpinner();
    } catch (error) {
        document.querySelector('.msg').textContent = error;
    }
}
function showSpinner() {
    document.querySelector('.spinner').classList.remove('remove');
    document.querySelector('.spinner').classList.add('show');
    document.querySelector('.artist').classList.remove('show');
    document.querySelector('.artist').classList.add('remove');
}
function hideSpinner() {
    document.querySelector('.spinner').classList.remove('show');
    document.querySelector('.spinner').classList.add('remove');
    document.querySelector('.artist').classList.remove('remove');
    document.querySelector('.artist').classList.add('show');
    const element = document.getElementById("circle");
    element.scrollIntoView({ behavior: "smooth" });

}

document.querySelector('#image-form').addEventListener('submit', onSubmit);
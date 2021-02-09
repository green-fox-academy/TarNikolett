let img = document.querySelector('img');
setInterval(() => {
    ord = Math.random() * 10000000000000000;
    img.removeAttribute("src");
    img.setAttribute(
        "src",
        "https://loremflickr.com/g/1280/800/hungary/?ord=" + ord
    );
}, 5000);
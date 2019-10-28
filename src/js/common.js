var loader;

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#jsEmail').addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = 'mailto:olegn@outlook.com';
    }, false);

    loader = pageLoader();
    document.documentElement.appendChild(loader);
}, window.passiveSupported ? { passive: true } : false);

window.addEventListener('load', function () {
    loader.parentNode.removeChild(loader);
}, window.passiveSupported ? { passive: true } : false);

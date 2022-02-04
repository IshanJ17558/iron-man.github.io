let parallax = document.getElementById('home');

window.onscroll = () => {
    let scrollTop = document.documentElement.scrollTop;

    parallax.style.backgroundPositionY = scrollTop * -0.22 + 'px';
}
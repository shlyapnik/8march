document.addEventListener("mousemove", parallax);

function parallax(e) {
    this.querySelectorAll(".parallax").forEach(img => {
        const speed = img.getAttribute("data-speed");

        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;

        img.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}
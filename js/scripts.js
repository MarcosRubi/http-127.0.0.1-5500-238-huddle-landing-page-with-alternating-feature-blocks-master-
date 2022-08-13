window.onload = () => {
    const menu = document.querySelector("header.menu");
    menu.classList.toggle("sticky", scrollY > 0);

    window.addEventListener("scroll", () => {
        menu.classList.toggle("sticky", scrollY > 0);
    });

    //ANIMACIONES PARA MOSTRAR EL CONTENIDO
    const bannerContent = document.querySelector(".banner__content");
    const bannerImg = document.querySelector(".banner__img");
    const cardItem1 = document.getElementById("card-1");
    const cardItem2 = document.getElementById("card-2");
    const cardItem3 = document.getElementById("card-3");
    const form = document.querySelector('.form form');
    const footer = document.querySelector('footer .container');

    const showContent = (entries, observer) => {
        entries.forEach((entry) => {
            entry.isIntersecting ? entry.target.classList.add("visible") : "";
        });
    };

    const observer = new IntersectionObserver(showContent, {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    });

    observer.observe(bannerContent);
    observer.observe(bannerImg);
    observer.observe(cardItem1);
    observer.observe(cardItem2);
    observer.observe(cardItem3);
    observer.observe(form);
    observer.observe(footer);
};

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        header.classList.add("active");
    }else{
        header.classList.remove("active");
    }
});

const cards = document.querySelectorAll(".card,.project-card");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
},{threshold:0.2});

cards.forEach(card=>{
    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition=".6s";
    observer.observe(card);
});
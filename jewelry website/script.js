// this is array for all position of item childs
const transforms = [
  "rotateY(0deg) translateZ(350px)",
  "rotateY(60deg) translateZ(350px)",
  "rotateY(120deg) translateZ(350px)",
  "rotateY(180deg) translateZ(350px)",
  "rotateY(240deg) translateZ(350px)",
  "rotateY(300deg) translateZ(350px)"
];
const items = document.querySelectorAll(".item");
// this will Set initial transform for each item
items.forEach((item, i) => {
  item.style.transform = transforms[i];
});
// this is for the rotation of carasoule
let angle = 0;
const carousel = document.querySelector('.carousel1');
document.querySelector('.next').onclick = () => {
  angle -= 60;
  carousel.style.transform = `rotateY(${angle}deg)`;
};
document.querySelector('.prev').onclick = () => {
  angle += 60;
  carousel.style.transform = `rotateY(${angle}deg)`;
};
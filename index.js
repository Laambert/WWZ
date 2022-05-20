let buy = document.getElementById('buy');
let left = document.getElementById('left');
let right = document.getElementById('right');
let galery = document.getElementById("galery");
let galeryIndex = 0;

let galeryImages = [
  "australia.jpg", 
  "coloseum.webp", 
  "garden.jpg",
  'default.webp'
];

buy.addEventListener('click', function onClick(event) {

    event.target.style.backgroundColor = 'background: rgba(184, 17, 46, 1);';
  });

left.addEventListener('click', function onClick(event) {
  if(galeryIndex == 0){
    galeryIndex = galeryImages.length;
    galery.style.backgroundImage='url("default.webp")';
  }
    else{
      galeryIndex -= 1;
      galery.style.backgroundImage="url("+ galeryImages[galeryIndex]+")";

    }
  });

  right.addEventListener('click', function onClick(event) {

    if(galeryIndex == galeryImages.length){
      galeryIndex = 0;
      galery.style.backgroundImage='url("default.webp")';
    }
      else{
        galery.style.backgroundImage="url("+ galeryImages[galeryIndex]+")";
        galeryIndex += 1;
      }
  });


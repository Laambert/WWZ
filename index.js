let buy = document.getElementById('buy');
let left = document.getElementById('left');
let right = document.getElementById('right');
let galery = document.getElementById("galery");
let galeryIndex = 0;

let galeryImages = [
  "using_images/australia.jpg", 
  "using_images/coloseum.webp", 
  "using_images/garden.jpg",
  'using_images/default.webp'
];

buy.addEventListener('click', function onClick(event) {

    event.target.style.backgroundColor = 'background: rgba(184, 17, 46, 1);';
  });

left.addEventListener('click', function onClick(event) {
  if(galeryIndex == 0){
    galeryIndex = galeryImages.length;
    galery.style.backgroundImage='url("using_images/default.webp")';
  }
    else{
      galeryIndex -= 1;
      galery.style.backgroundImage="url("+ galeryImages[galeryIndex]+")";

    }
  });

  right.addEventListener('click', function onClick(event) {

    if(galeryIndex == galeryImages.length){
      galeryIndex = 0;
      galery.style.backgroundImage='url("using_images/default.webp")';
    }
      else{
        galery.style.backgroundImage="url("+ galeryImages[galeryIndex]+")";
        galeryIndex += 1;
      }
  });


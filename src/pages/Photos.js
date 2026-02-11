// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Run scripts/generate_photos.py to regenerate.

const preshuffle_photos = [
  { src: "/photos/IMG_1338.JPG", width: 4000, height: 6000 },
  { src: "/photos/IMG_2771 (2).JPG", width: 6000, height: 4000 },
  { src: "/photos/IMG_2774.JPG", width: 4000, height: 6000 },
  { src: "/photos/IMG_2840.JPG", width: 6000, height: 4000 },
  { src: "/photos/IMG_2851.JPG", width: 6000, height: 4000 },
  { src: "/photos/IMG_3155.JPG", width: 6000, height: 4000 },
  { src: "/photos/IMG_3210.JPG", width: 4000, height: 6000 },
  { src: "/photos/IMG_3491.JPG", width: 4000, height: 6000 },
  { src: "/photos/IMG_3557.JPG", width: 6000, height: 4000 },
  { src: "/photos/IMG_3645.JPG", width: 4000, height: 6000 },
  { src: "/photos/IMG_3657.JPG", width: 4000, height: 6000 },
  { src: "/photos/IMG_3972.JPG", width: 4000, height: 6000 },
  { src: "/photos/IMG_3979.JPG", width: 6000, height: 4000 },
  { src: "/photos/IMG_4030.JPG", width: 6000, height: 4000 },
  { src: "/photos/IMG_4033.JPG", width: 6000, height: 4000 },
  { src: "/photos/IMG_4132.JPG", width: 6000, height: 4000 },
  { src: "/photos/IMG_4444.JPG", width: 6000, height: 4000 },
  { src: "/photos/IMG_4761.JPG", width: 6000, height: 4000 },
  { src: "/photos/IMG_8921.JPG", width: 6000, height: 4000 },
  { src: "/photos/IMG_9020.JPG", width: 4000, height: 6000 },
  { src: "/photos/IMG_9178.JPG", width: 6000, height: 4000 },
  { src: "/photos/IMG_9214.JPG", width: 6000, height: 4000 },
  { src: "/photos/IMG_9563.JPG", width: 6000, height: 4000 },
  { src: "/photos/IMG_9583.JPG", width: 4000, height: 6000 },
  { src: "/photos/IMG_9641.JPG", width: 6000, height: 4000 },
  { src: "/photos/WINTER.jpg", width: 4000, height: 2250 },
  { src: "/photos/WINTER2.jpg", width: 4000, height: 2250 },
];

function shuffleArray(array) {
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}
                 
                 const photos = shuffleArray(preshuffle_photos)

export default photos;

// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Run scripts/generate_photos.py to regenerate.

const preshuffle_photos = [
  { src: "/photos/resized/resized_IMG_1338.JPG", width: 800, height: 1200 },
  { src: "/photos/resized/resized_IMG_2771 (2).JPG", width: 1200, height: 800 },
  { src: "/photos/resized/resized_IMG_2774.JPG", width: 800, height: 1200 },
  { src: "/photos/resized/resized_IMG_2840.JPG", width: 1200, height: 800 },
  { src: "/photos/resized/resized_IMG_2851.JPG", width: 1200, height: 800 },
  { src: "/photos/resized/resized_IMG_3155.JPG", width: 1200, height: 800 },
  { src: "/photos/resized/resized_IMG_3210.JPG", width: 800, height: 1200 },
  { src: "/photos/resized/resized_IMG_3491.JPG", width: 800, height: 1200 },
  { src: "/photos/resized/resized_IMG_3557.JPG", width: 1200, height: 800 },
  { src: "/photos/resized/resized_IMG_3645.JPG", width: 800, height: 1200 },
  { src: "/photos/resized/resized_IMG_3657.JPG", width: 800, height: 1200 },
  { src: "/photos/resized/resized_IMG_3972.JPG", width: 800, height: 1200 },
  { src: "/photos/resized/resized_IMG_3979.JPG", width: 1200, height: 800 },
  { src: "/photos/resized/resized_IMG_4030.JPG", width: 1200, height: 800 },
  { src: "/photos/resized/resized_IMG_4033.JPG", width: 1200, height: 800 },
  { src: "/photos/resized/resized_IMG_4132.JPG", width: 1200, height: 800 },
  { src: "/photos/resized/resized_IMG_4444.JPG", width: 1200, height: 800 },
  { src: "/photos/resized/resized_IMG_4761.JPG", width: 1200, height: 800 },
  { src: "/photos/resized/resized_IMG_8921.JPG", width: 1200, height: 800 },
  { src: "/photos/resized/resized_IMG_9020.JPG", width: 800, height: 1200 },
  { src: "/photos/resized/resized_IMG_9178.JPG", width: 1200, height: 800 },
  { src: "/photos/resized/resized_IMG_9214.JPG", width: 1200, height: 800 },
  { src: "/photos/resized/resized_IMG_9563.JPG", width: 1200, height: 800 },
  { src: "/photos/resized/resized_IMG_9583.JPG", width: 800, height: 1200 },
  { src: "/photos/resized/resized_IMG_9641.JPG", width: 1200, height: 800 },
  { src: "/photos/resized/resized_WINTER.jpg", width: 1200, height: 675 },
  { src: "/photos/resized/resized_WINTER2.jpg", width: 1200, height: 675 },
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

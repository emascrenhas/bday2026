let currentPage = 0;

const pages = [
  "page1",
  "page2",
  "memoryPage",
  "finalPage"
];

function nextPage() {
  document.getElementById(pages[currentPage]).classList.remove("active");
  currentPage++;
  document.getElementById(pages[currentPage]).classList.add("active");
}

/* MEMORY DATA (EDIT THIS PART ONLY) */
const memories = [
  {
    img: "images/pic1.jpg",
    text: "This was one of my favorite moments with you ❤️",
    song: "music/song1.mp3"
  },
  {
    img: "images/pic2.jpg",
    text: "You looked so beautiful here 😍",
    song: "music/song2.mp3"
  },
  {
    img: "images/pic3.jpg",
    text: "I still smile thinking about this day 😊",
    song: "music/song3.mp3"
  },
  {
    img: "images/pic4.jpg",
    text: "This moment means a lot to me 💖",
    song: "music/song4.mp3"
  },
  {
    img: "images/pic5.jpg",
    text: "Your smile here = my happiness 💕",
    song: "music/song5.mp3"
  },
  {
    img: "images/pic6.jpg",
    text: "You’re the cutest person ever 🥺",
    song: "music/song6.mp3"
  },
  {
    img: "images/pic7.jpg",
    text: "Forever us ❤️",
    song: "music/song7.mp3"
  },
  {
    img: "images/pic8.jpg",
    text: "Click below for your final surprise 🎁",
    song: "music/song8.mp3",
    final: true
  }
];

let audio = new Audio();

function openMemory(index) {
  document.getElementById("page2").classList.remove("active");
  document.getElementById("memoryPage").classList.add("active");

  const memory = memories[index];

  document.getElementById("memoryImage").src = memory.img;
  document.getElementById("memoryText").innerText = memory.text;

  /* STOP PREVIOUS SONG */
  audio.pause();
  audio = new Audio(memory.song);
  audio.play();

  /* FINAL PAGE LOGIC */
  if (memory.final) {
    setTimeout(() => {
      nextPageFinal();
    }, 4000);
  }
}

function backToTabs() {
  audio.pause();
  document.getElementById("memoryPage").classList.remove("active");
  document.getElementById("page2").classList.add("active");
}

function nextPageFinal() {
  document.getElementById("memoryPage").classList.remove("active");
  document.getElementById("finalPage").classList.add("active");
}

const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile-img");
const name = document.getElementById("name");
const date = document.getElementById("date");
const today = new Date();
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

const getData = () => {
  header.innerHTML =
    '<img src="https://live.staticflickr.com/65535/48143431771_8fced02482_b.jpg" alt="" />';
  title.innerHTML = "Software Developer";
  excerpt.innerHTML =
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results.";
  profile_img.innerHTML =
    '<img src="https://live.staticflickr.com/65535/52814423850_898ee48df1_w.jpg" alt="" />';
  name.innerHTML = "Vipin Kushwaha";
  date.innerHTML = `${
    monthNames[today.getMonth()]
  } ${today.getDate()}, ${today.getFullYear()}`;
  animated_bgs.forEach((background) =>
    background.classList.remove("animated-bg")
  );
  animated_bg_texts.forEach((background) =>
    background.classList.remove("animated-bg-text")
  );
};

setTimeout(getData, 2500);

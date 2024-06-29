// // script.js
// const videos = {
//   motivationals: [
//     {
//       src: "Videos/Temp1.mp4",
//       thumb: "Thumbnails/Temp1.png",
//       title: "First Video",
//     },
//     { src: "video2.mp4", thumb: "Thumbnails/Temp2.png", title: "Second Video" },
//   ],
//   projects: [
//     { src: "video3.mp4", thumb: "Thumbnails/Temp2.png", title: "First Video" },
//     { src: "video4.mp4", thumb: "Thumbnails/Temp1.png", title: "Second Video" },
//   ],
//   // Another Category
// };

// function filterVideos(category) {
//   const videoList = document.getElementById("videoList");
//   videoList.innerHTML = "";
//   videos[category].forEach((video) => {
//     const videoItem = document.createElement("div");
//     videoItem.classList.add("video-item");
//     videoItem.innerHTML = `
//             <img src="${video.thumb}" alt="${video.title}" onclick="playVideo('${video.src}')">
//             <p>${video.title}</p>
//         `;
//     videoList.appendChild(videoItem);
//   });
// }

// function playVideo(src) {
//   const video = document.getElementById("video");
//   const videoSource = document.getElementById("videoSource");
//   videoSource.src = src;
//   video.load();
//   video.play();
// }

// function changePlaybackRate() {
//   const video = document.getElementById("video");
//   const playbackRate = document.getElementById("playbackRate").value;
//   video.playbackRate = playbackRate;
// }

// script.js
const video = document.getElementById("video");
const playPauseBtn = document.getElementById("playPause");
const muteUnmuteBtn = document.getElementById("muteUnmute");
const volumeSlider = document.getElementById("volume");
const playbackRateSelect = document.getElementById("playbackRate");
const qualitySelect = document.getElementById("quality");
const fullscreenBtn = document.getElementById("fullscreen");
const currentTimeDisplay = document.getElementById("currentTime");
const durationDisplay = document.getElementById("duration");
const seekBar = document.getElementById("seekBar");

playPauseBtn.addEventListener("click", () => {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
});

muteUnmuteBtn.addEventListener("click", () => {
  video.muted = !video.muted;
});

volumeSlider.addEventListener("input", () => {
  video.volume = volumeSlider.value;
});

playbackRateSelect.addEventListener("change", () => {
  video.playbackRate = playbackRateSelect.value;
});

qualitySelect.addEventListener("change", () => {
  const currentTime = video.currentTime;
  const playbackRate = video.playbackRate;
  video.src = `video_${qualitySelect.value}.mp4`; // Assuming video files are named appropriately
  video.playbackRate = playbackRate;
  video.currentTime = currentTime;
  video.play();
});

fullscreenBtn.addEventListener("click", () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
});

video.addEventListener("timeupdate", () => {
  const currentTime = video.currentTime;
  const duration = video.duration;
  seekBar.value = (currentTime / duration) * 100;
  currentTimeDisplay.textContent = formatTime(currentTime);
  durationDisplay.textContent = formatTime(duration);
});

seekBar.addEventListener("input", () => {
  const seekTo = (seekBar.value / 100) * video.duration;
  video.currentTime = seekTo;
});

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

video.addEventListener("loadedmetadata", () => {
  durationDisplay.textContent = formatTime(video.duration);
});

video.addEventListener("play", () => {
  playPauseBtn.textContent = "⏸️";
});

video.addEventListener("pause", () => {
  playPauseBtn.textContent = "▶️";
});

video.addEventListener("volumechange", () => {
  muteUnmuteBtn.textContent = video.muted ? "🔇" : "🔊";
});

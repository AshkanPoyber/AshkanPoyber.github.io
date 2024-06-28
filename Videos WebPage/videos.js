// script.js
const videos = {
  temp1: [
    {
      src: "Videos/Temp1.mp4",
      thumb: "Thumbnails/Temp1.png",
      title: "First Video",
    },
    { src: "video2.mp4", thumb: "Thumbnails/Temp2.png", title: "Second Video" },
  ],
  temp2: [
    { src: "video3.mp4", thumb: "Thumbnails/Temp1.png", title: "First Video" },
    { src: "video4.mp4", thumb: "Thumbnails/Temp2.png", title: "Second Video" },
  ],
  // Another Category
};

function filterVideos(category) {
  const videoList = document.getElementById("videoList");
  videoList.innerHTML = "";
  videos[category].forEach((video) => {
    const videoItem = document.createElement("div");
    videoItem.classList.add("video-item");
    videoItem.innerHTML = `
            <img src="${video.thumb}" alt="${video.title}" onclick="playVideo('${video.src}')">
            <p>${video.title}</p>
        `;
    videoList.appendChild(videoItem);
  });
}

function playVideo(src) {
  const video = document.getElementById("video");
  const videoSource = document.getElementById("videoSource");
  videoSource.src = src;
  video.load();
  video.play();
}

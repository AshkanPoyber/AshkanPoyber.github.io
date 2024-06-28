// script.js
const videos = {
  temp1: [
    { src: "video1.mp4", thumb: "thumb1.jpg", title: "First Video" },
    { src: "video2.mp4", thumb: "thumb2.jpg", title: "Second Video" },
  ],
  temp2: [
    { src: "video3.mp4", thumb: "thumb3.jpg", title: "First Video" },
    { src: "video4.mp4", thumb: "thumb4.jpg", title: "Second Video" },
  ],
  temp3: [
    { src: "video1.mp4", thumb: "thumb1.jpg", title: "First Video" },
    { src: "video2.mp4", thumb: "thumb2.jpg", title: "Second Video" },
  ],
  temp4: [
    { src: "video3.mp4", thumb: "thumb3.jpg", title: "First Video" },
    { src: "video4.mp4", thumb: "thumb4.jpg", title: "Second Video" },
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

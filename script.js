async function loadChannels() {
  const response = await fetch("/api/channels");
  const channels = await response.json();

  // Sort alphabetically
  channels.sort((a, b) => a.name.localeCompare(b.name));

  renderChannels(channels);
}

function renderChannels(channels) {
  const panel = document.getElementById("channelPanel");
  panel.innerHTML = "";

  channels.forEach(channel => {
    const card = document.createElement("div");
    card.className = "channel-card";
    card.dataset.name = channel.name;
    card.innerHTML = `
      <img src="${channel.logo}" alt="${channel.name}">
      <span>${channel.name}</span>
    `;
    card.onclick = () => playChannel(channel);
    panel.appendChild(card);
  });
}

function playChannel(channel) {
  const video = document.getElementById("videoPlayer");
  const panel = document.getElementById("channelPanel");

  // Hide side panel (smooth slide)
  panel.classList.add("hidden");

  // Initialize dash.js player
  if (video.player) video.player.reset();
  const player = dashjs.MediaPlayer().create();
  player.initialize(video, channel.url, true);

  if (channel.keyId && channel.key) {
    player.setProtectionData({
      "org.w3.clearkey": {
        "clearkeys": {
          [channel.keyId]: channel.key
        }
      }
    });
  }

  video.player = player;
}

// Hamburger toggle
document.getElementById("togglePanel").addEventListener("click", () => {
  const panel = document.getElementById("channelPanel");
  panel.classList.toggle("hidden");
});

window.onload = loadChannels;

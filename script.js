async function loadChannels() {
  const response = await fetch("/api/channels");
  const channels = await response.json();

  channels.sort((a, b) => a.name.localeCompare(b.name));
  renderChannels(channels);
  setupSearch(channels);
}

function renderChannels(channels) {
  const panel = document.getElementById("channelGrid");
  if (!panel) return;

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

function setupSearch(channels) {
  const searchBar = document.getElementById("searchBar");
  searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase();
    const filtered = channels.filter(c =>
      c.name.toLowerCase().includes(query)
    );
    renderChannels(filtered);
  });
}

function playChannel(channel) {
  const video = document.getElementById("videoPlayer");
  const panel = document.getElementById("channelGrid");

  panel.classList.add("hidden");

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
  const panel = document.getElementById("channelGrid");
  panel.classList.toggle("hidden");
});

window.onload = loadChannels;

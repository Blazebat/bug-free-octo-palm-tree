async function loadChannels() {
  const response = await fetch("/api/channels");
  const channels = await response.json();

  // Sort alphabetically
  channels.sort((a, b) => a.name.localeCompare(b.name));

  renderChannels(channels);
  setupSearch(channels);

  if (channels.length > 0) playChannel(channels[0]); // autoplay first
}

function renderChannels(channels) {
  const grid = document.getElementById("channelGrid");
  grid.innerHTML = "";

  channels.forEach(channel => {
    const card = document.createElement("div");
    card.className = "channel-card";
    card.dataset.name = channel.name; // use name as identifier
    card.innerHTML = `
      <img src="${channel.logo}" alt="${channel.name}">
      <span>${channel.name}</span>
    `;
    card.onclick = () => playChannel(channel);
    grid.appendChild(card);
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
  if (video.player) {
    video.player.reset();
  }

  const player = dashjs.MediaPlayer().create();
  player.initialize(video, channel.url, true);

  player.setProtectionData({
    "org.w3.clearkey": {
      "clearkeys": {
        [channel.keyId]: channel.key
      }
    }
  });

  video.player = player;
}

window.onload = loadChannels;

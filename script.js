// Initialize DASH.js player
let player;

async function loadChannels() {
  try {
    const response = await fetch("./channels.json");
    const channels = await response.json();

    const container = document.getElementById("channels");
    container.innerHTML = "";

    channels.forEach((ch, index) => {
      const div = document.createElement("div");
      div.className = "channel";
      div.innerHTML = `
        <img src="${ch.logo}" alt="${ch.name}" />
        <p>${ch.name}</p>
      `;

      div.addEventListener("click", () => {
        playChannel(ch);
      });

      container.appendChild(div);

      // Autoplay first channel
      if (index === 0) {
        playChannel(ch);
      }
    });
  } catch (err) {
    console.error("Error loading channels.json:", err);
  }
}

function playChannel(channel) {
  const video = document.getElementById("videoPlayer");

  if (!player) {
    player = dashjs.MediaPlayer().create();
    player.initialize(video, null, true);
  }

  player.setProtectionData({
    "org.w3.clearkey": {
      clearkeys: {
        [channel.keyId]: channel.key
      }
    }
  });

  player.attachSource(channel.url);
}

// Run on load
document.addEventListener("DOMContentLoaded", loadChannels);

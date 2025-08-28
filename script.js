// Netflix-style Skywatch player: channels are loaded from channels.json (same folder)
const videoEl = document.getElementById('video');
const channelGrid = document.getElementById('channel-grid');
const nowPlaying = document.getElementById('now-playing');
const playerErrorEl = document.getElementById('player-error');
const searchInput = document.getElementById('search');

let player = null;
let allChannels = [];

// Init when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
  try {
    // fetch channels.json from the same folder
    const res = await fetch('./channels.json', {cache: "no-store"});
    if (!res.ok) throw new Error(`Failed to load channels.json (${res.status})`);
    allChannels = await res.json();

    // show grid
    renderChannels(allChannels);

    // init Shaka
    initPlayer();

    // autoplay first channel if available
    if (allChannels.length > 0) {
      loadChannel(allChannels[0]);
    }
  } catch (err) {
    console.error(err);
    showPlayerError(err.message || 'Failed to load channels');
  }
});

// search filter
searchInput?.addEventListener('input', (e) => {
  const q = e.target.value.trim().toLowerCase();
  const filtered = allChannels.filter(c => c.name.toLowerCase().includes(q));
  renderChannels(filtered);
});

// Initialize Shaka Player
function initPlayer() {
  shaka.polyfill.installAll();
  if (!shaka.Player.isBrowserSupported()) {
    showPlayerError('Browser not supported by Shaka Player');
    return;
  }

  player = new shaka.Player(videoEl);
  player.addEventListener('error', onShakaError);
}

// Load and play a channel (DASH manifest + ClearKey)
async function loadChannel(channel) {
  if (!player) return;
  clearPlayerError();

  // show currently playing
  nowPlaying.textContent = `Loading: ${channel.name}`;

  // configure ClearKey for this stream
  // Keep the same keyId/key format you use in channels.json
  const clearKeys = {};
  clearKeys[channel.keyId] = channel.key;

  player.configure({
    drm: {
      clearKeys: clearKeys,
      // optional: set persistentState or advanced options here if needed
    },
    streaming: {
      failureCallback: null
    }
  });

  try {
    await player.load(channel.url);
    nowPlaying.textContent = channel.name;
    console.log('Playing', channel.name);
  } catch (err) {
    console.error('Load failed', err);
    showPlayerError(`Could not play ${channel.name}: ${err?.message || err}`);
  }
}

// Render channel cards into the grid
function renderChannels(list){
  channelGrid.innerHTML = '';
  if (!Array.isArray(list) || list.length === 0) {
    channelGrid.innerHTML = `<div class="empty" style="padding:18px;color:#aaa">No channels found</div>`;
    return;
  }

  list.forEach(ch => {
    const card = document.createElement('button');
    card.className = 'card';
    card.type = 'button';
    card.title = ch.name;
    // Use logo as thumbnail if no thumbnail provided
    const thumbUrl = ch.thumbnail || ch.logo || '';

    card.innerHTML = `
      <img class="card-thumb" src="${thumbUrl}" alt="${escapeHtml(ch.name)} thumbnail" loading="lazy" onerror="this.style.objectFit='contain';this.style.background='#111'">
      <div class="card-body">
        <img class="card-logo" src="${ch.logo}" alt="${escapeHtml(ch.name)} logo" onerror="this.style.display='none'">
        <div class="card-title">${escapeHtml(ch.name)}</div>
      </div>
    `;

    card.addEventListener('click', () => loadChannel(ch));
    channelGrid.appendChild(card);
  });
}

// Shaka error handler
function onShakaError(evt) {
  const err = evt?.detail || evt;
  console.error('Shaka error', err);
  showPlayerError(err?.message || 'Player error');
}

// Player error UI
function showPlayerError(msg) {
  playerErrorEl.hidden = false;
  playerErrorEl.textContent = msg;
  nowPlaying.textContent = 'Playback error';
}

function clearPlayerError() {
  playerErrorEl.hidden = true;
  playerErrorEl.textContent = '';
}

// tiny helper to sanitize strings for injection
function escapeHtml(text) {
  if (typeof text !== 'string') return '';
  return text.replace(/[&<>"']/g, (c) => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  })[c]);
}

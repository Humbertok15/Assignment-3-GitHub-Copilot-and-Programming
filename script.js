const games = [
  {
    id: 1,
    home: "Oklahoma City",
    away: "Denver",
    homeCode: "OKC",
    awayCode: "DEN",
    homeScore: 112,
    awayScore: 108,
    date: "Sep 27, 2026",
    time: "7:30 PM",
    status: "live",
    arena: "Downtown Arena",
    quarter: "Q4 · 02:14",
    stats: { rebounds: "42–39", assists: "27–24", threePoint: "38%–35%" }
  },
  {
    id: 2,
    home: "Boston",
    away: "Chicago",
    homeCode: "BOS",
    awayCode: "CHI",
    homeScore: 118,
    awayScore: 103,
    date: "Sep 27, 2026",
    time: "6:00 PM",
    status: "completed",
    arena: "Harbor Center",
    quarter: "Final",
    stats: { rebounds: "46–40", assists: "31–22", threePoint: "41%–31%" }
  },
  {
    id: 3,
    home: "Los Angeles",
    away: "Phoenix",
    homeCode: "LAL",
    awayCode: "PHX",
    homeScore: 0,
    awayScore: 0,
    date: "Sep 27, 2026",
    time: "9:00 PM",
    status: "upcoming",
    arena: "West Coast Pavilion",
    quarter: "Starts in 3h",
    stats: { rebounds: "—", assists: "—", threePoint: "—" }
  },
  {
    id: 4,
    home: "Milwaukee",
    away: "Miami",
    homeCode: "MIL",
    awayCode: "MIA",
    homeScore: 104,
    awayScore: 104,
    date: "Sep 27, 2026",
    time: "8:00 PM",
    status: "live",
    arena: "Lakefront Center",
    quarter: "Q3 · 05:42",
    stats: { rebounds: "37–37", assists: "20–21", threePoint: "34%–36%" }
  },
  {
    id: 5,
    home: "Golden State",
    away: "Dallas",
    homeCode: "GSW",
    awayCode: "DAL",
    homeScore: 109,
    awayScore: 115,
    date: "Sep 26, 2026",
    time: "9:30 PM",
    status: "completed",
    arena: "Pacific Forum",
    quarter: "Final",
    stats: { rebounds: "35–44", assists: "29–28", threePoint: "39%–42%" }
  },
  {
    id: 6,
    home: "New York",
    away: "Atlanta",
    homeCode: "NYK",
    awayCode: "ATL",
    homeScore: 0,
    awayScore: 0,
    date: "Sep 28, 2026",
    time: "7:00 PM",
    status: "upcoming",
    arena: "Madison Square Arena",
    quarter: "Tomorrow",
    stats: { rebounds: "—", assists: "—", threePoint: "—" }
  },
  {
    id: 7,
    home: "Minnesota",
    away: "Sacramento",
    homeCode: "MIN",
    awayCode: "SAC",
    homeScore: 121,
    awayScore: 117,
    date: "Sep 26, 2026",
    time: "8:30 PM",
    status: "completed",
    arena: "North Star Center",
    quarter: "Final",
    stats: { rebounds: "48–41", assists: "30–26", threePoint: "37%–34%" }
  },
  {
    id: 8,
    home: "Philadelphia",
    away: "Cleveland",
    homeCode: "PHI",
    awayCode: "CLE",
    homeScore: 0,
    awayScore: 0,
    date: "Sep 28, 2026",
    time: "7:30 PM",
    status: "upcoming",
    arena: "Liberty Arena",
    quarter: "Tomorrow",
    stats: { rebounds: "—", assists: "—", threePoint: "—" }
  }
];

const gameGrid = document.querySelector("#gameGrid");
const searchInput = document.querySelector("#searchInput");
const filterButtons = document.querySelectorAll(".filter-button");
const resultCount = document.querySelector("#resultCount");
const heroGameCount = document.querySelector("#heroGameCount");
const favoriteCount = document.querySelector("#favoriteCount");
const emptyState = document.querySelector("#emptyState");
const clearSearch = document.querySelector("#clearSearch");
const themeToggle = document.querySelector("#themeToggle");
const modal = document.querySelector("#gameModal");
const modalContent = document.querySelector("#modalContent");
const closeModal = document.querySelector("#closeModal");

let activeFilter = "all";
let favorites = JSON.parse(localStorage.getItem("courthub-favorites") || "[]");
let darkMode = localStorage.getItem("courthub-theme") === "dark";

function formatStatus(status) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

function isFavorite(id) {
  return favorites.includes(id);
}

function saveFavorites() {
  localStorage.setItem("courthub-favorites", JSON.stringify(favorites));
}

function renderGames() {
  const query = searchInput.value.trim().toLowerCase();

  const filteredGames = games.filter((game) => {
    const matchesSearch =
      game.home.toLowerCase().includes(query) ||
      game.away.toLowerCase().includes(query);

    const matchesFilter =
      activeFilter === "all" || game.status === activeFilter;

    return matchesSearch && matchesFilter;
  });

  gameGrid.innerHTML = filteredGames.map(createGameCard).join("");
  resultCount.textContent = `${filteredGames.length} ${filteredGames.length === 1 ? "game" : "games"}`;
  heroGameCount.textContent = games.length;
  emptyState.classList.toggle("hidden", filteredGames.length !== 0);

  updateFavoriteCount();
}

function createGameCard(game) {
  return `
    <article class="game-card" data-id="${game.id}">
      <div class="game-card-header">
        <span class="status ${game.status}">${formatStatus(game.status)}${game.status === "live" ? ` · ${game.quarter}` : ""}</span>
        <button class="favorite-button ${isFavorite(game.id) ? "active" : ""}" data-action="favorite" data-id="${game.id}" type="button" aria-label="Favorite ${game.home} vs ${game.away}">
          ${isFavorite(game.id) ? "★" : "☆"}
        </button>
      </div>

      <div class="teams">
        <div class="team-row">
          <div class="team-info">
            <span class="team-logo">${game.awayCode}</span>
            <span>${game.away}</span>
          </div>
          <strong class="score">${game.awayScore || "—"}</strong>
        </div>
        <div class="team-row">
          <div class="team-info">
            <span class="team-logo">${game.homeCode}</span>
            <span>${game.home}</span>
          </div>
          <strong class="score">${game.homeScore || "—"}</strong>
        </div>
      </div>

      <div class="game-card-footer">
        <span>${game.date} · ${game.time}</span>
        <button class="details-button" data-action="details" data-id="${game.id}" type="button">Details →</button>
      </div>
    </article>
  `;
}

function updateFavoriteCount() {
  favoriteCount.textContent = `${favorites.length} saved`;
}

function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter((favoriteId) => favoriteId !== id);
  } else {
    favorites.push(id);
  }

  saveFavorites();
  renderGames();
}

function openGameModal(id) {
  const game = games.find((item) => item.id === id);
  if (!game) return;

  modalContent.innerHTML = `
    <span class="eyebrow">${formatStatus(game.status)}</span>
    <h2 id="modalTitle" class="modal-title">${game.away} at ${game.home}</h2>
    <p class="modal-subtitle">${game.date} · ${game.time} · ${game.arena}</p>

    <div class="modal-scoreboard">
      <div class="modal-team">
        <span class="team-logo">${game.awayCode}</span>
        <span>${game.away}</span>
        <strong class="modal-score">${game.awayScore || "—"}</strong>
      </div>
      <span>VS</span>
      <div class="modal-team">
        <span class="team-logo">${game.homeCode}</span>
        <span>${game.home}</span>
        <strong class="modal-score">${game.homeScore || "—"}</strong>
      </div>
    </div>

    <div class="stat-grid">
      <div class="stat"><span>Game Status</span><strong>${game.quarter}</strong></div>
      <div class="stat"><span>Rebounds</span><strong>${game.stats.rebounds}</strong></div>
      <div class="stat"><span>Assists</span><strong>${game.stats.assists}</strong></div>
      <div class="stat"><span>3PT</span><strong>${game.stats.threePoint}</strong></div>
      <div class="stat"><span>Arena</span><strong>${game.arena}</strong></div>
      <div class="stat"><span>Favorite</span><strong>${isFavorite(game.id) ? "Yes ★" : "No"}</strong></div>
    </div>
  `;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeGameModal() {
  modal.classList.add("hidden");
  document.body.style.overflow = "";
}

function applyTheme() {
  document.body.classList.toggle("dark", darkMode);
  themeToggle.textContent = darkMode ? "☀" : "☾";
  themeToggle.setAttribute(
    "aria-label",
    darkMode ? "Switch to light mode" : "Switch to dark mode"
  );
}

gameGrid.addEventListener("click", (event) => {
  const actionElement = event.target.closest("[data-action]");
  if (!actionElement) return;

  const id = Number(actionElement.dataset.id);

  if (actionElement.dataset.action === "favorite") {
    event.stopPropagation();
    toggleFavorite(id);
  }

  if (actionElement.dataset.action === "details") {
    openGameModal(id);
  }
});

searchInput.addEventListener("input", renderGames);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
    });

    renderGames();
  });
});

clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  activeFilter = "all";

  filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === "all");
  });

  renderGames();
});

themeToggle.addEventListener("click", () => {
  darkMode = !darkMode;
  localStorage.setItem("courthub-theme", darkMode ? "dark" : "light");
  applyTheme();
});

closeModal.addEventListener("click", closeGameModal);

modal.addEventListener("click", (event) => {
  if (event.target.dataset.closeModal === "true") {
    closeGameModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeGameModal();
  }
});

applyTheme();
renderGames();

const profile = {
  name: "Nahu Podestá",
  initial: "N",
  eyebrow: "Linktree personal",
  bio: "Redes, contenido y playlists favoritas en un solo lugar."
};

const socialLinks = [
  {
    label: "YouTube",
    description: "Videos y contenido",
    url: "https://www.youtube.com/@nahupodesta",
    icon: "YT"
  },
  {
    label: "Instagram",
    description: "Fotos, historias y novedades",
    url: "https://instagram.com/nahupodesta",
    icon: "IG"
  },
  {
    label: "TikTok",
    description: "Clips y contenido corto",
    url: "https://www.tiktok.com/@nahupodesta",
    icon: "TT"
  },
  {
    label: "LinkedIn",
    description: "Perfil profesional",
    url: "https://www.linkedin.com/in/nahuelpodesta/",
    icon: "IN"
  }
];

const spotifyLinks = [
  {
    label: "Playlist favorita",
    description: "Reemplazá este link por tu playlist",
    url: "https://open.spotify.com/",
    icon: "SP"
  },
  {
    label: "Otra playlist",
    description: "Agregá o quitá playlists desde script.js",
    url: "https://open.spotify.com/",
    icon: "SP"
  }
];

function updateProfile() {
  document.title = `${profile.name} | Links`;

  const name = document.querySelector("#profile-name");
  const avatar = document.querySelector(".avatar");
  const eyebrow = document.querySelector(".eyebrow");
  const bio = document.querySelector(".bio");

  name.textContent = profile.name;
  avatar.textContent = profile.initial;
  eyebrow.textContent = profile.eyebrow;
  bio.textContent = profile.bio;
}

function createLinkCard(link) {
  const anchor = document.createElement("a");
  anchor.className = "link-card";
  anchor.href = link.url;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  anchor.setAttribute("aria-label", `Abrir ${link.label}`);

  anchor.innerHTML = `
    <span class="link-icon" aria-hidden="true">${link.icon}</span>
    <span class="link-copy">
      <strong>${link.label}</strong>
      <small>${link.description}</small>
    </span>
    <span class="link-arrow" aria-hidden="true">↗</span>
  `;

  return anchor;
}

function renderLinks(containerId, links) {
  const container = document.querySelector(containerId);
  container.replaceChildren(...links.map(createLinkCard));
}

updateProfile();
renderLinks("#social-links", socialLinks);
renderLinks("#spotify-links", spotifyLinks);

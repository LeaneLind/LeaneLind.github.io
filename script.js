/* ===== Parcours ===== */
const experiences = [
  {
    cat: "av", date: "2026", title: "Capta Prod", place: "Les Sorinières · stage de 1re année de BTS",
    intro: "Entreprise d'événementiel et de diffusion, en actionnariat avec TéléNantes.",
    items: [
      "Préparation et déploiement du matériel technique selon le cahier des charges",
      "Pilotage des flux de diffusion et gestion des régies lors d'événements live",
      "Relation client et suivi technique des prestations sur site",
      "Conception, montage et réglage des dispositifs d'éclairage",
      "Interventions techniques sur le terrain",
      "Assistante technicienne audiovisuel pour TéléNantes",
      "Suivi du stock technique, manutention et acheminement du matériel"
    ]
  },

  {
    cat: "av", date: "2026", title: "Grount", place: "Montaigu-Vendée · projet de classe",
    intro: "Projet proposé par Martin Davy et Engerann Dupuis, inspiré de l'émission Grunt : de jeunes rappeurs peu connus viennent performer en direct sur nos plateaux.",
    items: [
      "Montage de la régie mobile HD",
      "Création et lancement du titrage et de l'habillage",
      "Diffusion et gestion du flux",
      "Travail d'équipe avec les autres options"
    ]
  },

  {
    cat: "av", date: "2026", title: "TéléNantes", place: "Nantes · stage d'observation",
    items: [
      "Préparation des médias avant le direct",
      "Participation à l'enregistrement des JT",
      "Observation de l'organisation et de la mise en place du matériel pour un reportage",
      "Observation de tournages réalisés par des étudiants dans les locaux"
    ]
  },

  {
    cat: "av", date: "2025 – 2027", title: "BTS Audiovisuel", place: "Montaigu-Vendée · option TIEE",
    intro: "Création de JT et de fictions pour s'entraîner sur du matériel broadcast et se préparer aux métiers de l'audiovisuel.",
    items: [
      "Ingénieur vision",
      "Kahuna, Sony, Carbonite",
      "EVS XT3 et XTGO",
      "Avid et suite Adobe",
      "Consoles 01V et CL3"
    ]
  },

  {
    cat: "av", date: "2025 – 2027", title: "Courts-métrages", place: "Montaigu-Vendée · BTS",
    items: [
      "Mise en place des lumières et du décor",
      "Aide à la prise de son",
      "Mise en service des équipements de réception, d'enregistrement et d'acquisition",
      "Mise en place des moyens de production, de postproduction et de diffusion"
    ]
  },

  {
    cat: "code", date: "Depuis le lycée", title: "Programmation", place: "Autodidacte et Baccalauréat",
    items: [
      "JS / TS : création de bots en autodidacte",
      "HTML : création de pages web",
      "CSS : mise en page et possibilités du web",
      "Python : appris pour mon Baccalauréat"
    ]
  },

  {
    cat: "code", date: "Depuis toujours", title: "Créations artistiques", place: "Digital et traditionnel",
    intro: "Réalisations et créations en autodidacte d'oeuvre digital et physique en tout genre ainsi que de la photographie",
    items: ["Dessin", "Peinture", "Photographie"]
  },

  {
    cat: "service", date: "2021", title: "Hôtel félin Georges Cat", place: "Vertou",
    items: [
      "Accueil et orientation de la clientèle (humains et félins)",
      "Suivi et prise en charge des pensionnaires : alimentation, hygiène, bien-être",
      "Participation à l'entretien général de l'établissement"
    ]
  },

  {
    cat: "service", date: "2020", title: "Cinéma Bonne Garde", place: "Nantes",
    items: [
      "Vente de confiseries et service de boissons au bar",
      "Inventaire et gestion des stocks",
      "Organisation et mise en place des salles de ciné-débat et de spectacle"
    ]
  }
];

const rundown = document.getElementById("rundown");
function renderRows(filter = "all") {
  rundown.innerHTML = experiences
    .filter((e) => filter === "all" || e.cat === filter)
    .map((e) => `
      <details class="row">
        <summary>
          <span class="row__date">${e.date}</span>
          <span class="row__title">${e.title}<small>${e.place}</small></span>
          <span class="row__plus" aria-hidden="true">+</span>
        </summary>
        <div class="row__body"><div class="row__inner">
          ${e.intro ? `<p>${e.intro}</p>` : ""}
          <ul>${e.items.map((i) => `<li>${i}</li>`).join("")}</ul>
        </div></div>
      </details>`)
    .join("");
}
renderRows();

document.querySelectorAll(".filters .chip").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filters .chip").forEach((b) => b.classList.remove("is-on"));
    btn.classList.add("is-on");
    renderRows(btn.dataset.filter);
  });
});




/* ===== Projets vidéo ===== */
const videos = [
  { id: "-p3Fp0RQtEg", title: "JT Génaration Cool Âge" },
  { id: "bURTAtXwP5s", title: "Grount" },
  { id: "p0LI6su6qmA", title: "Pub Heurtier" },
  { id: "pKjFWCbidXg", title: "Le Poker" },
  { id: "7rhS5trJn2I", title: "Le Parrain" },
  { id: "WfeYIN5pSLM", title: "L'extraJTerrestre des AVliens" }
];
const reel = document.getElementById("reel");

reel.innerHTML = videos.map(({ id, title }) => `
  <button class="clip" data-id="${id}" aria-label="Lancer la vidéo : ${title}">
    <img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="" loading="lazy">
    <span class="clip__play" aria-hidden="true">▶</span>
    <span class="clip__tag">${title}</span>
  </button>`).join("");

reel.addEventListener("click", (e) => {
  const clip = e.target.closest(".clip");
  if (!clip || clip.querySelector("iframe")) return;
  clip.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${clip.dataset.id}?autoplay=1"
    title="Projet vidéo" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
});

const step = () => reel.clientWidth * 0.8;
document.getElementById("prev").addEventListener("click", () => reel.scrollBy({ left: -step(), behavior: "smooth" }));
document.getElementById("next").addEventListener("click", () => reel.scrollBy({ left: step(), behavior: "smooth" }));




/* ===== Animation des lignes du parcours ===== */
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
rundown.addEventListener("click", (e) => {
  const summary = e.target.closest("summary");
  if (!summary) return;
  e.preventDefault();
  const row = summary.parentElement;
  if (row.dataset.busy) return;
  const opening = !row.classList.contains("is-open");
  row.classList.toggle("is-open", opening);
  if (reduceMotion) { row.open = opening; return; }

  const body = row.querySelector(".row__body");
  const inner = row.querySelector(".row__inner");
  if (opening) row.open = true;
  const from = opening ? 0 : body.offsetHeight;
  const to = opening ? body.scrollHeight : 0;
  row.dataset.busy = "1";

  const opts = { duration: 420, easing: "cubic-bezier(.2,.8,.2,1)", fill: "forwards" };
  const slide = body.animate({ height: [from + "px", to + "px"] }, opts);
  inner.animate(
    { opacity: opening ? [0, 1] : [1, 0], transform: opening ? ["translateY(-12px)", "none"] : ["none", "translateY(-12px)"] },
    { ...opts, duration: 320, delay: opening ? 90 : 0, fill: "both" }
  );
  slide.onfinish = () => {
    if (!opening) row.open = false;
    body.getAnimations().concat(inner.getAnimations()).forEach((a) => a.cancel());
    delete row.dataset.busy;
  };
});

// --- CONFIGURATION INITIALE ---
const emojisBase = ['😂', '💀', '🤡', '👻', '🔥', '💩', '🫠', '👽', '😱', '👑', '💥'];
const packDanger = ['☢️', '☣️', '⚠️', '💣', '🧨'];
const packInternet = ['🐸', '🤡', '🦍', '🍌', '🐕'];
const packApocalypse = ['☄️', '🌋', '🧟', '🛸', '☠️'];

let emojisActuels = [...emojisBase];
const count = 20; 
const speed = 4;  
let allEmojis = [];
let derniersSonsJoues = []; 

const sonsChaosOriginal = [
    "talmo-sound", "talmo-v2", "bebou-talmo", "poupette-kenza-rire", "nasdas-chien", "nasdas-la-degaine",
    "michou-rire", "inoxtag-houlala", "greg-guillotin-pire-stagiaire", "mister-v-police", "mister-v-pique",
    "maskey-type-beat", "squeezie-non", "joueur-du-grenier-colere", "jdg-putain", "amixem-rire",
    "mcfly-et-carlito-concours-danecdote", "david-lafarge-pokemon", "thekairi78-colere", "tk78-rire",
    "ah-denis-brogniart", "mais-tes-pas-net-baptiste", "la-boule-magique", "merci-la-zone-jul",
    "issou-risitas", "kaamelott-cest-pas-faux", "kaamelott-le-gras-cest-la-vie", "kaamelott-on-en-a-gros",
    "chevalier-laspales-le-train", "kad-merad-kamoulox", "oss-117-jaime-me-battre", "jul-en-y",
    "cloclo-ca-sen-va-et-ca-revient", "booba-la-piraterie", "sch-oui-ma-gatée", "naps-ok-ok",
    "wejdene-anissa", "pnl-mowgli", "gims-sapés-comme-jamais", "heuss-lenfoire-moulaga",
    "la-fouine-paname-boss", "gradur-sheguey", "pso-thug", "kaaris-je-vais-te-tuer", "niska-charo",
    "crab-rave-10s", "shooting-stars-10s", "nyan-cat-original", "trololo-song-long", 
    "he-man-hey-yay-yay", "gangnam-style-chorus", "earthquake-rumble", "police-siren-loud",
    "directed-by-robert-b-weide-long", "kahoot-lobby-music", "wii-sports-theme", "mii-channel-music-long",
    "mario-kart-start", "tetris-theme", "pacman-intro", "pokemon-center-theme", "zelda-overworld",
    "final-fantasy-victory", "halo-theme", "skyrim-dragonborn", "doom-e1m1", "megalovania",
    "vine-boom", "bruh", "discord-notification", "fbi-open-up-sfx", "taco-bell-bong",
    "bonk-sound-effect-1", "mario-level-complete", "wasted-gta-sound", "skibidi-toilet",
    "fortnite-default-dance", "clash-royale-hog-rider", "minecraft-villager-sound",
    "john-cena-theme", "metal-pipe-falling-sound-effect", "nuclear-siren-long",
    "roblox-death", "hitmarker", "mlg-airhorn", "wow-anime-sound", "omae-wa-mou-shindeiru",
    "yamete-kudasai", "senpai-sound", "uwu-sound", "fart-sound-effect", "wet-fart",
    "augh-sound", "goofy-ahh-sound", "cartoon-slip", "boing-sound", "drum-roll",
    "le-coq", "vache-qui-rit", "cheval-qui-hennit", "lion-roar", "cat-meow", "dog-bark",
    "duck-quack", "pigeon-coo", "monkey-scream", "elephant-trumpet", "wolf-howl",
    "baby-laugh", "baby-cry", "crowd-laugh", "crowd-cheer", "crowd-boo", "applause",
    "cricket-sound", "eagle-screech", "hawk-call", "owl-hoot", "snake-hiss", "bee-buzz",
    "thunder-clap", "rain-ambient", "ocean-waves", "fire-crackling", "wind-howling",
    "explosion-big", "gunshot-m4", "sniper-shot", "sword-clash", "punch-sound",
    "glass-breaking", "door-creak", "footsteps-echo", "heartbeat-fast", "clock-ticking",
    "telephone-ring-old", "camera-shutter", "typewriter-clack", "car-horn", "tire-screech",
    "airplane-engine", "train-whistle", "ship-horn", "rocket-launch", "laser-beam",
    "robot-beeps", "alien-static", "ufo-hum", "magic-spell", "sparkle-sound",
    "game-over-arcade", "insert-coin", "pacman-death", "sonic-rings", "link-discovery",
    "pikachu-pika", "bulbasaur-cry", "charizard-roar", "mewtwo-theme", "groudon-roar",
    "angry-birds-launch", "flappy-bird-wing", "candy-crush-sweet", "clash-of-clans-attack",
    "Among-us-kill", "Among-us-report", "Among-us-emergency", "Among-us-vent",
    "minecraft-zombie", "minecraft-creeper", "minecraft-skeleton", "minecraft-enderman",
    "gta-san-andreas-intro", "gta-mission-passed", "red-dead-redemption-dead-eye",
    "overwatch-play-of-the-game", "league-of-legends-penta-kill", "csgo-bomb-planted",
    "cod-zombies-round-start", "cod-nuke-ready", "fortnite-bandage", "fortnite-chest",
    "windows-xp-startup", "windows-95-startup", "mac-startup", "playstation-1-startup",
    "gamecube-startup", "nintendo-switch-click", "xbox-startup", "sega-intro",
    "netflix-ta-dum", "hbo-intro", "thx-logo-sound", "universal-pictures-intro",
    "20th-century-fox-intro", "disney-intro", "pixar-lamp", "star-wars-saber",
    "darth-vader-breath", "r2d2-beeps", "chewbacca-roar", "yoda-laugh",
    "harry-potter-theme", "lord-of-the-rings-horn", "avengers-theme", "iron-man-ibeam",
    "spiderman-web", "batman-joker-laugh", "superman-fly-by", "wonder-woman-theme",
    "shrek-all-star", "donkey-ogres-are-like-onions", "minions-banana", "gru-despicable-me",
    "spongebob-laugh", "patrick-star-is-this-krusty-krab", "squidward-clarinet", "mr-krabs-money",
    "simpsons-doh", "homer-woohoo", "bart-eat-my-shorts", "south-park-eric-cartman",
    "family-guy-peter-griffin", "rick-and-morty-wubba-lubba", "bender-futurama",
    "dragon-ball-z-kamehameha", "naruto-rasengan", "one-piece-luffy-laugh", "death-note-ryuk-laugh",
    "attack-on-titan-roar", "demon-slayer-nezuko", "jojo-dio-za-warudo", "jojo-ora-ora",
    "clash-royale-hee-hee-hee-haw", "clash-royale-angry", "clash-royale-cry",
    "baby-shark", "rickroll", "darude-sandstorm", "coffin-dance", "keyboard-cat",
    "doge-meme", "grumpy-cat", "harambe-tribute", "pepe-the-frog-ree", "dat-boi",
    "big-chungus", "ugandan-knuckles", "shaggy-ultra-instinct", "thanos-snap",
    "john-wick-pencil", "joker-society", "elon-musk-laugh", "mark-zuckerberg-lizard",
    "steve-jobs-one-more-thing", "bill-gates-windows", "barack-obama-mic-drop",
    "donald-trump-wrong", "biden-wake-up", "macron-poudre-de-perlimpinpin",
    "jean-luc-melenchon-la-republique-cest-moi", "nicolas-sarkozy-casse-toi-pauvre-con",
    "chirac-mangez-des-pommes", "de-gaulle-vive-la-france", "napoleon-theme",
    "moliere-comedie", "victor-hugo-miserables", "louis-xiv-letat-cest-moi",
    "einstein-relativity", "newton-apple", "da-vinci-mona-lisa", "beethoven-5th",
    "mozart-lacrimosa", "bach-toccata", "vivaldi-4-seasons", "chopin-funeral-march",
    "queen-we-will-rock-you", "michael-jackson-hee-hee", "elvis-presley-jailhouse-rock",
    "the-beatles-yellow-submarine", "rolling-stones-satisfaction", "nirvana-smells-like-teen-spirit",
    "eminem-lose-yourself", "daft-punk-around-the-world", "david-guetta-titanium",
    "jul-tchikita", "aya-nakamura-djadja", "stromae-papaoutai", "angel-balance-ton-quoi",
    "orelsan-la-terre-est-ronde", "bigflo-et-oli-dommage", "soprano-en-feu", "maitre-gims-bella",
    "vaimalama-chaves", "miss-france-coronnement", "koh-lanta-generique", "top-chef-generique",
    "fort-boyard-generique", "intervilles-generique", "questions-pour-un-champion-generique",
    "le-juste-prix-generique", "une-famille-en-or-generique", "motus-boule-noire",
    "nagui-n-oubliez-pas-les-paroles", "cyril-hanouna-mes-petites-beautes", "tpmp-generique",
    "quotidien-yann-barthes", "tf1-jt-generique", "france-2-jt-generique", "m6-jt-generique"
];

let sonsDisponibles = [];
let chaosActive = false;
let isChallengeActive = false; 
let prochainSonTimeout = null;
let audioActuel = null;
let chronoGlobal = null; 

// --- GESTION DU SCORE ET DÉBLOCAGES ---
const scoreDisplay = document.getElementById('score-display');
let scoreActuel = localStorage.getItem('chaosScore') ? parseInt(localStorage.getItem('chaosScore')) : 0;
scoreDisplay.value = scoreActuel;

function verifierDeblocages() {
    let nouvelleListe = [...emojisBase];
    let nouvelleTaille = "2rem";
    if (scoreActuel >= 10) nouvelleListe = [...nouvelleListe, ...packDanger];
    if (scoreActuel >= 25) { nouvelleListe = [...nouvelleListe, ...packInternet]; nouvelleTaille = "4rem"; }
    if (scoreActuel >= 40) { nouvelleListe = [...nouvelleListe, ...packApocalypse]; nouvelleTaille = "6rem"; }
    emojisActuels = nouvelleListe;
    allEmojis.forEach(emojiObj => { emojiObj.el.style.fontSize = nouvelleTaille; });
    actualiserEmojisEcran();
}

function actualiserEmojisEcran() {
    allEmojis.forEach(emojiObj => {
        const nouvelEmoji = emojisActuels[Math.floor(Math.random() * emojisActuels.length)];
        emojiObj.el.innerText = nouvelEmoji;
    });
}

function createEmoji() {
    const el = document.createElement('div');
    el.className = 'emoji';
    el.innerText = emojisActuels[Math.floor(Math.random() * emojisActuels.length)];
    let tSize = (scoreActuel >= 40) ? "6rem" : (scoreActuel >= 25) ? "4rem" : "2rem";
    el.style.fontSize = tSize;
    document.body.appendChild(el);
    let angle = Math.random() * Math.PI * 2;
    return { el, x: 100 + Math.random() * (window.innerWidth - 200), y: 100 + Math.random() * (window.innerHeight - 200), vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed };
}

function update() {
    allEmojis.forEach((emoji, i) => {
        emoji.x += emoji.vx; emoji.y += emoji.vy;
        let diametre = (scoreActuel >= 40) ? 90 : (scoreActuel >= 25) ? 60 : 40;
        if (emoji.x <= 0) { emoji.vx = Math.abs(emoji.vx); emoji.x = 0; }
        if (emoji.x >= window.innerWidth - diametre) { emoji.vx = -Math.abs(emoji.vx); emoji.x = window.innerWidth - diametre; }
        if (emoji.y <= 0) { emoji.vy = Math.abs(emoji.vy); emoji.y = 0; }
        if (emoji.y >= window.innerHeight - diametre) { emoji.vy = -Math.abs(emoji.vy); emoji.y = window.innerHeight - diametre; }
        for (let j = i + 1; j < allEmojis.length; j++) {
            let other = allEmojis[j];
            let dx = other.x - emoji.x; let dy = other.y - emoji.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            let minDist = diametre;
            if (distance < minDist) {
                let overlap = minDist - distance; let nx = dx / distance; let ny = dy / distance;
                emoji.x -= nx * (overlap / 2); emoji.y -= ny * (overlap / 2);
                other.x += nx * (overlap / 2); other.y += ny * (overlap / 2);
                let tempVx = emoji.vx; let tempVy = emoji.vy;
                emoji.vx = other.vx; emoji.vy = other.vy;
                other.vx = tempVx; other.vy = tempVy;
            }
        }
        emoji.el.style.left = emoji.x + 'px'; emoji.el.style.top = emoji.y + 'px';
    });
    requestAnimationFrame(update);
}

function startChaos() { allEmojis = []; for (let i = 0; i < count; i++) { allEmojis.push(createEmoji()); } update(); }
startChaos(); verifierDeblocages();

// --- LOGIQUE SONORE ---
function melangerSons(liste) {
    let copie = [...liste];
    for (let i = copie.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [copie[i], copie[j]] = [copie[j], copie[i]]; }
    return copie;
}
sonsDisponibles = melangerSons(sonsChaosOriginal);

const intervalInput = document.getElementById('sound-interval');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('panic-btn');
const challenge30 = document.getElementById('challenge-30');
const challenge60 = document.getElementById('challenge-60');
const fakeSelect = document.getElementById('fake-screen-select');
const statusContainer = document.getElementById('status-container');
const statusLabel = document.getElementById('status-label');
const statusDisplay = document.getElementById('status-display');

function jouerProchainSon() {
    if (!chaosActive) return;
    if (sonsDisponibles.length === 0) sonsDisponibles = melangerSons(sonsChaosOriginal);
    let nomDuSon; let indexChoisi; let tentatives = 0;
    do { indexChoisi = Math.floor(Math.random() * sonsDisponibles.length); nomDuSon = sonsDisponibles[indexChoisi]; tentatives++; } while (derniersSonsJoues.includes(nomDuSon) && tentatives < 100);
    sonsDisponibles.splice(indexChoisi, 1); derniersSonsJoues.push(nomDuSon);
    if (derniersSonsJoues.length > 15) derniersSonsJoues.shift();
    const urlChoisie = `https://www.myinstants.com/media/sounds/${nomDuSon}.mp3`;
    audioActuel = new Audio(urlChoisie);
    audioActuel.onloadedmetadata = () => demarrerCompteurVisuel(audioActuel.duration, "Son en cours :", true);
    audioActuel.play().then(() => {
        audioActuel.onended = () => {
            if (!chaosActive) return;
            let delai = parseInt(intervalInput.value);
            demarrerCompteurVisuel(delai, "Prochain son :", false);
            prochainSonTimeout = setTimeout(jouerProchainSon, delai * 1000);
        };
    }).catch(() => jouerProchainSon());
}

function demarrerCompteurVisuel(secondes, texte, estSon) {
    if (chronoGlobal) clearInterval(chronoGlobal);
    let tempsRestant = Math.ceil(secondes);
    statusLabel.innerText = texte;
    statusDisplay.value = tempsRestant + "s";
    statusDisplay.className = estSon ? "status-playing" : "status-waiting";
    chronoGlobal = setInterval(() => { tempsRestant--; if (tempsRestant >= 0) statusDisplay.value = tempsRestant + "s"; else clearInterval(chronoGlobal); }, 1000);
}

// Bloquer les boutons
function setControlesDisabled(state) {
    intervalInput.disabled = state;
    startBtn.disabled = state;
    challenge30.disabled = state;
    challenge60.disabled = state;
    fakeSelect.disabled = state;
    // Si state est vrai, on bloque aussi le STOP (pendant un défi)
    if (isChallengeActive) {
        stopBtn.disabled = true;
        stopBtn.style.opacity = "0.5";
        stopBtn.style.cursor = "not-allowed";
    } else {
        stopBtn.disabled = false;
        stopBtn.style.opacity = "1";
        stopBtn.style.cursor = "pointer";
    }
}

startBtn.addEventListener('click', () => {
    if (chaosActive) return;
    chaosActive = true;
    setControlesDisabled(true);
    startBtn.innerText = "🔥 ACTIVÉ !";
    statusContainer.style.display = "flex";
    jouerProchainSon();
});

stopBtn.addEventListener('click', () => {
    if (isChallengeActive) return; // Impossible de cliquer si défi en cours
    reinitialiserTout();
});

function reinitialiserTout() {
    chaosActive = false;
    isChallengeActive = false;
    setControlesDisabled(false);
    if (prochainSonTimeout) clearTimeout(prochainSonTimeout);
    if (chronoGlobal) clearInterval(chronoGlobal);
    if (audioActuel) { audioActuel.pause(); audioActuel.currentTime = 0; }
    startBtn.innerText = "START";
    statusContainer.style.display = "none";
}

function lancerDefi(duree) {
    if (chaosActive) return;
    chaosActive = true;
    isChallengeActive = true; 
    intervalInput.value = 1;
    setControlesDisabled(true); // Bloque TOUT y compris STOP
    startBtn.innerText = "🔥 QUÊTE...";
    statusContainer.style.display = "flex";
    jouerProchainSon();
    
    setTimeout(() => {
        // Le score n'est ajouté que si la page n'a pas été fermée/rechargée
        scoreActuel += (duree === 60 ? 3 : 1);
        scoreDisplay.value = scoreActuel;
        localStorage.setItem('chaosScore', scoreActuel);
        verifierDeblocages();
        isChallengeActive = false; // Fin de la quête
        reinitialiserTout();
        alert("Quête terminée ! Tu as gagné tes points. 🏆");
    }, duree * 1000);
}

challenge30.addEventListener('click', () => lancerDefi(30));
challenge60.addEventListener('click', () => lancerDefi(60));

// --- SYSTÈME MODE DISCRET ---
const fakeOverlay = document.getElementById('fake-overlay');
fakeSelect.addEventListener('change', (e) => {
    const imageUrl = e.target.value;
    if (imageUrl) { fakeOverlay.style.backgroundImage = `url('${imageUrl}')`; fakeOverlay.style.display = "block"; }
    else { fakeOverlay.style.display = "none"; }
});
window.addEventListener('keydown', (e) => { if (e.key === "Escape") { fakeOverlay.style.display = "none"; fakeSelect.value = ""; } });

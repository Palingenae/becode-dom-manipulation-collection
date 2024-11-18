import user from '../data/user.json'
import charts from '../data/charts.json';

const root = document.getElementById("root");
const rootChild = document.createElement("main");
const headerEl = document.createElement("header");
const userNameDescContainer = document.createElement("div")
const usernameEl = document.createElement("h1");
const username = document.createTextNode(user.name)
const pageDescription = document.createElement("p");
const pageDescriptionText = document.createTextNode("Deezer Music charts")
const profilePhotoEl = document.createElement("img");
const profilePhotoSrc = document.createAttribute("src");
profilePhotoSrc.value = user.picture_medium;

root.appendChild(rootChild);
rootChild.appendChild(headerEl);
// rootChild.classList.add("section");
// rootChild.appendChild(headerEl);

headerEl.appendChild(userNameDescContainer);

userNameDescContainer.appendChild(usernameEl);
userNameDescContainer.appendChild(pageDescription);
headerEl.classList.add("header")
usernameEl.appendChild(username);
pageDescription.appendChild(pageDescriptionText);
pageDescription.classList.add("context")
pageDescription.classList.add("--subtitle");

headerEl.appendChild(profilePhotoEl);
profilePhotoEl.setAttributeNode(profilePhotoSrc);

const chartsSection = document.createElement("section");
const chartsContainer = document.createElement("div");
const chartsTitle = document.createElement("h2");
const chartsTitleText = document.createTextNode("Top listened");

const musics = charts.data;
rootChild.appendChild(chartsSection);
chartsSection.appendChild(chartsTitle);
chartsSection.appendChild(chartsContainer);
chartsTitle.appendChild(chartsTitleText);
chartsSection.classList.add("section");
chartsSection.classList.add("--column")
chartsContainer.classList.add("musicCharts");

musics.map((music) => {
    let card = document.createElement("div");
    let albumCover = document.createElement("img");
    let albumCoverSrc = document.createAttribute("src");
    let musicDetailsCont = document.createElement("div");
    let musicTitle = document.createElement("p");
    let musicTitleText = document.createTextNode(music.title)
    let musicArtist = document.createElement("p");
    let musicArtistText = document.createTextNode(music.artist.name);

    chartsContainer.appendChild(card);
    card.appendChild(albumCover);
    card.classList.add("musicCharts__music");
    albumCover.setAttributeNode(albumCoverSrc)
    albumCoverSrc.value = music.album.cover_big;
    albumCover.classList.add("musicCharts__music__cover");
    card.appendChild(musicDetailsCont);
    musicDetailsCont.appendChild(musicTitle);
    musicDetailsCont.classList.add("musicCharts__music__details");
    musicTitle.appendChild(musicTitleText);
    musicTitle.classList.add("musicCharts__music__title")
    musicDetailsCont.appendChild(musicArtist)
    musicArtist.appendChild(musicArtistText);
    musicArtist.classList.add("musicCharts__music__artist");
})

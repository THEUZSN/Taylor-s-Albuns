document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const albumId = params.get('id');

  const albums = {
    lover: {
      title: "Lover",
      year: 2019,
      genre: "Pop",
      cover: "assets/lover.png",
      tracks: [
        "I Forgot That You Existed",
        "Cruel Summer",
        "Lover",
        "The Man",
        "You Need To Calm Down"
      ],
      spotify: "https://open.spotify.com/embed/album/1NAmidJlEaVgA3MpcPFYGq"
    },

    taylorswift: {
      title: "Taylor Swift",
      year: 2006,
      genre: "Country",
      cover: "assets/taylorswift.jpg",
      tracks: [
        "Tim McGraw",
        "Teardrops On My Guitar",
        "Our Song",
        "Picture To Burn",
        "Should've Said No"
      ],
      spotify: "https://open.spotify.com/embed/album/7mzrIsaAjnXihW3InKjlC3"
    },

    ttod : {
      title: "The Tortured Poets Department",
      year: 2024,
      genre: "Pop",
      cover: "assets/ttod.jpg",
      tracks: [
        "Fortnight (feat. Post Malone)",
        "The Tortured Poets Department",
        "Down Bad",
        "So Long, London",
        "But Daddy I Love Him"
      ],
      spotify: "https://open.spotify.com/embed/album/1Mo4aZ8pdj6L1jx8zSwJnt"
    },

    evermore: {
      title: "Evermore",
      year: 2020,
      genre: "Indie Folk",
      cover: "assets/evermore.png",
      tracks: [
        "willow",
        "champagne problems",
        "gold rush",
        "tis the damn season",
        "no body, no crime"
      ],
      spotify: "https://open.spotify.com/embed/album/2Xoteh7uEpea4TohMxjtaq"
    },

    redtv: {
      title: "Red (Taylor's Version)",
      year: 2021,
      genre: "Pop",
      cover: "assets/redtv.png",
      tracks: [
        "State Of Grace",
        "Red",
        "Treacherous",
        "I Knew You Were Trouble",
        "All Too Well"
      ],
      spotify: "https://open.spotify.com/embed/album/6kZ42qRrzov54LcAk4onW9"
    },

    speaknow: {
      title: "Speak Now",
      year: 2010,
      genre: "Country",
      cover: "assets/speaknow.png",
      tracks: [
        "Mine",
        "Sparks Fly",
        "Back To December",
        "Mean",
        "The Story Of Us"
      ],
      spotify: "https://open.spotify.com/embed/album/5EpMjweRD573ASl7uNiHym"
    },
    
    reputation: {
      title: "Reputation",
      year: 2017,
      genre: "Pop",
      cover: "assets/reputation.png",
      tracks: [
        "...Ready For It?",
        "End Game",
        "I Did Something Bad",
        "Don't Blame Me",
        "Delicate"
      ],
      spotify: "https://open.spotify.com/embed/album/6DEjYFkNZh67HP7R9PSZvv"
    },

    fearless: {
      title: "Fearless (Taylor's Version)",
      year: 2021,
      genre: "Country",
      cover: "assets/fearless.png",
      tracks: [
        "Fearless",
        "The Way I Loved You",
        "Love Story",
        "You Belong With Me",
        "White Horse"
      ],
      spotify: "https://open.spotify.com/embed/album/4hDok0OAJd57SGIT8xuWJH"
    },

    "1989tv": {
      title: "1989 (Taylor's Version)",
      year: 2023,
      genre: "Pop",
      cover: "assets/1989.webp",
      tracks: [
        "Welcome To New York",
        "Blank Space",
        "Style",
        "Out Of The Woods",
        "All You Had To Do Was Stay"
      ],
      spotify: "https://open.spotify.com/embed/album/64LU4c1nfjz1t4VnGhagcg"
    },

    folklore: {
      title: "Folklore",
      year: 2020,
      genre: "Indie Folk",
      cover: "assets/folklore.webp",
      tracks: [
        "the 1",
        "cardigan",
        "exile",
        "my tears ricochet",
        "august"
      ],
      spotify: "https://open.spotify.com/embed/album/2fenSS68JI1h4Fo296JfGr"
    },

    midnights: {
      title: "Midnights",
      year: 2022,
      genre: "Synth-pop",
      cover: "assets/midnights.jpeg",
      tracks: [
        "Lavender Haze",
        "Maroon",
        "Anti-Hero",
        "Snow On The Beach",
        "You're On Your Own, Kid"
      ],
      spotify: "https://open.spotify.com/embed/album/3lS1y25WAhcqJDATJK70Mq"
    }
    
  };

  if (!albumId || !albums[albumId]) {
    document.body.innerHTML = "<h1>Álbum não encontrado</h1>";
    return;
  }

  const album = albums[albumId];

  document.getElementById("album-title").textContent = album.title;
  document.getElementById("album-cover").src = album.cover;
  document.getElementById("album-cover").alt = `Capa do álbum ${album.title}`;
  document.getElementById("album-year").textContent = album.year;
  document.getElementById("album-genre").textContent = album.genre;
  document.body.classList.add(`album-${albumId}`);


  const tracklist = document.getElementById("tracklist");
  album.tracks.forEach(track => {
    const li = document.createElement("li");
    li.textContent = track;
    tracklist.appendChild(li);
  });

  const spotifyEmbed = document.getElementById("spotify-embed");
  spotifyEmbed.innerHTML = `<iframe style="border-radius:12px" src="${album.spotify}" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
});

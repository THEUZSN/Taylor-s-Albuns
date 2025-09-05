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
    fearless: {
      title: "Fearless",
      year: 2021,
      genre: "Country",
      cover: "assets/Fearless.png",
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
  spotify: "https://open.spotify.com/embed/album/1o59UpKw81iHR0HPiSkJR0"
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
      spotify: "https://open.spotify.com/embed/album/151w1FgRZfnKZA9FEcg9Z3"
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

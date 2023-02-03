const fetchSingers = async () => {
  const response = await fetch(
    "https://klika-tech-server.onrender.com/api/singer"
  );
  return await response.json();
};
const fetchGenres = async () => {
  const responce = await fetch(
    "https://klika-tech-server.onrender.com/api/genre"
  );
  return await responce.json();
};
const fetchYears = async () => {
  const responce = await fetch(
    "https://klika-tech-server.onrender.com/api/song/years"
  );
  return await responce.json();
};

const fetchSongs = async (
  singerId,
  genreId,
  year,
  column,
  order,
  page,
  count
) => {
  console.log(count);
  console.log(column, order);
  const params = new URLSearchParams({
    singerId,
    genreId,
    year,
    sort: column + " " + order,
    page,
    count,
  });

  const response = await fetch(
    `https://klika-tech-server.onrender.com/api/song?${params}`
  );
  return await response.json();
};

export {fetchGenres, fetchYears, fetchSingers, fetchSongs};

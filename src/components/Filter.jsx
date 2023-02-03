import {useState} from "react";
import {Form} from "react-bootstrap";

function Filter({singers, genres, years, onFilterChange}) {
  const [selectedSinger, setSelectedSinger] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const handleSingerChange = (e) => {
    setSelectedSinger(e.target.value);
    onFilterChange(e.target.value, selectedGenre, selectedYear);
  };

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
    onFilterChange(selectedSinger, e.target.value, selectedYear);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    onFilterChange(selectedSinger, selectedGenre, e.target.value);
  };

  return (
    <Form className="Filter">
      <Form.Group>
        <Form.Label>Исполнитель</Form.Label>
        <Form.Select value={selectedSinger} onChange={handleSingerChange}>
          <option value="">Все</option>
          {singers.map((singer) => (
            <option key={singer.id} value={singer.id}>
              {singer.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group>
        <Form.Label>Жанр</Form.Label>
        <Form.Select value={selectedGenre} onChange={handleGenreChange}>
          <option value="">Все</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group>
        <Form.Label>Год</Form.Label>
        <Form.Select value={selectedYear} onChange={handleYearChange}>
          <option value="">Все</option>
          {years.map((year) => (
            <option key={year.year} value={year.year}>
              {year.year}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    </Form>
  );
}

export default Filter;

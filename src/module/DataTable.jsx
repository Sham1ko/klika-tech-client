import React, {useState, useEffect} from "react";
import BasePagination from "../components/BasePagination";
import Filter from "../components/Filter";
import PageSize from "../components/PageSize";
import SongTable from "../components/SongTable";
import {fetchGenres, fetchSongs, fetchSingers, fetchYears} from "./api";

function DataTable() {
  const [selectedSinger, setSelectedSinger] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const [sortOrder, setSortOrder] = useState({});
  const [column, setColumn] = useState("id");
  const [order, setOrder] = useState("ASC");

  //data
  const [singers, setSingers] = useState([]);
  const [genres, setGenres] = useState([]);
  const [years, setYears] = useState([]);
  const [songs, setSongs] = useState([]);
  const [metaData, setMetaData] = useState({});

  useEffect(() => {
    fetchGenres().then((data) => setGenres(data));
    fetchSingers().then((data) => setSingers(data));
    fetchYears().then((data) => setYears(data));

    fetchSongs(
      selectedSinger,
      selectedGenre,
      selectedYear,
      column,
      order,
      page,
      pageSize
    ).then((data) => {
      setSongs(data.songs);
      setMetaData(data.metadata);
    });
  }, [
    pageSize,
    page,
    column,
    order,
    selectedGenre,
    selectedSinger,
    selectedYear,
  ]);

  const handleFilterChange = (singer, genre, year) => {
    setSelectedSinger(singer);
    setSelectedGenre(genre);
    setSelectedYear(year);

    fetchSongs(
      selectedSinger,
      selectedGenre,
      selectedYear,

      column,
      order,
      page,
      pageSize
    ).then(async (data) => {
      setSongs(data.songs);
      setMetaData(data.metadata);
    });
  };

  const handlePageSizeChange = (newPageSize) => {
    setPageSize(newPageSize);
    fetchSongs(
      selectedSinger,
      selectedGenre,
      selectedYear,

      column,
      order,
      page,
      pageSize
    ).then(async (data) => {
      setSongs(data.songs);
      setMetaData(data.metadata);
    });
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    fetchSongs(
      selectedSinger,
      selectedGenre,
      selectedYear,
      column,
      order,
      page,
      pageSize
    ).then(async (data) => {
      setSongs(data.songs);
      setMetaData(data.metadata);
    });
  };

  const handleSortChange = (newColumn, newOrder) => {
    setColumn(newColumn);
    setOrder(newOrder);
    fetchSongs(
      selectedSinger,
      selectedGenre,
      selectedYear,
      column,
      order,
      page,
      pageSize
    ).then(async (data) => {
      await setSongs(data.songs);
      setMetaData(data.metadata);
    });
  };
  return (
    <div className="DataTable row">
      <div className="col-8 ">
        <SongTable songs={songs} onSortChange={handleSortChange}></SongTable>
        <BasePagination
          totalPages={4}
          currentPage={1}
          onPageChange={handlePageChange}
        />
        <PageSize onPageSizeChange={handlePageSizeChange} />
      </div>
      <div className="col-4">
        <Filter
          singers={singers}
          genres={genres}
          years={years}
          onFilterChange={handleFilterChange}
        />
      </div>
    </div>
  );
}

export default DataTable;

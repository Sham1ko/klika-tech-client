import React, {useState, useEffect} from "react";
import {Table} from "react-bootstrap";
import {
  TiArrowUnsorted,
  TiArrowSortedUp,
  TiArrowSortedDown,
} from "react-icons/ti";

const SongTable = ({songs, onSortChange}) => {
  const [columnCom, setColumnCom] = useState("id");
  const [orderCom, setOrderCom] = useState("ASC");

  const handleSort = (column) => {
    const newOrder = orderCom === "ASC" ? "DESC" : "ASC";

    setOrderCom(newOrder);
    setColumnCom(column);

    onSortChange(columnCom, orderCom);
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th onClick={() => handleSort("singerName")}>
            Исполнитель
            {columnCom === "singerName" &&
              (orderCom === "ASC" ? (
                <TiArrowSortedUp className="float-end" />
              ) : (
                <TiArrowSortedDown className="float-end" />
              ))}
            {columnCom !== "singerName" && (
              <TiArrowUnsorted className="float-end" />
            )}
          </th>
          <th onClick={() => handleSort("name")}>
            Песня
            {columnCom === "name" &&
              (orderCom === "ASC" ? (
                <TiArrowSortedUp className="float-end" />
              ) : (
                <TiArrowSortedDown className="float-end" />
              ))}
            {columnCom !== "name" && <TiArrowUnsorted className="float-end" />}
          </th>
          <th onClick={() => handleSort("genreName")}>
            Жанр
            {columnCom === "genreName" &&
              (orderCom === "ASC" ? (
                <TiArrowSortedUp className="float-end" />
              ) : (
                <TiArrowSortedDown className="float-end" />
              ))}
            {columnCom !== "genreName" && (
              <TiArrowUnsorted className="float-end" />
            )}
          </th>
          <th onClick={() => handleSort("year")}>
            Год
            {columnCom === "year" &&
              (orderCom === "ASC" ? (
                <TiArrowSortedUp className="float-end" />
              ) : (
                <TiArrowSortedDown className="float-end" />
              ))}
            {columnCom !== "year" && <TiArrowUnsorted className="float-end" />}
          </th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song, index) => (
          <tr key={index}>
            <td>{song.singer.name}</td>
            <td>{song.name}</td>
            <td>{song.genre.name}</td>
            <td>{song.year}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default SongTable;

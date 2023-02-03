import React from "react";
import {Pagination} from "react-bootstrap";

const BasePagination = ({totalPages, currentPage, onPageChange}) => {
  let pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  if (totalPages > 10) {
    const start = Math.max(1, currentPage - 4);
    const end = Math.min(totalPages, currentPage + 5);
    pageNumbers = pageNumbers.slice(start - 1, end);

    if (start > 2) {
      pageNumbers.unshift("...");
      pageNumbers.unshift(1);
    }
    if (end < totalPages - 1) {
      pageNumbers.push("...");
      pageNumbers.push(totalPages);
    }
  }

  return (
    <Pagination size="sm">
      {pageNumbers.map((number) =>
        number === "..." ? (
          <Pagination.Item key={number} disabled>
            {number}
          </Pagination.Item>
        ) : (
          <Pagination.Item
            key={number}
            active={number === currentPage}
            onClick={() => onPageChange(number)}>
            {number}
          </Pagination.Item>
        )
      )}
    </Pagination>
  );
};

export default BasePagination;

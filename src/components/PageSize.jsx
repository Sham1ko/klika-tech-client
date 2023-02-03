import React, {useState} from "react";
import {ButtonToolbar, Button, ButtonGroup} from "react-bootstrap";

function PageSize({onPageSizeChange}) {
  const [pageSizeCom, setPageSizeCom] = useState();

  const handlePageSizeChange = (newPageSize) => {
    setPageSizeCom(newPageSize);
    onPageSizeChange(newPageSize);
  };

  return (
    <ButtonToolbar className="justify-content-end">
      <ButtonGroup>
        <Button
          className="rounded-0"
          variant="outline-secondary"
          onClick={() => handlePageSizeChange(10)}
          active={pageSizeCom === 10}>
          10
        </Button>
        <Button
          className="rounded-0"
          variant="outline-secondary"
          onClick={() => handlePageSizeChange(25)}
          active={pageSizeCom === 25}>
          25
        </Button>
        <Button
          className="rounded-0"
          variant="outline-secondary"
          onClick={() => handlePageSizeChange(50)}
          active={pageSizeCom === 50}>
          50
        </Button>
        <Button
          className="rounded-0"
          variant="outline-secondary"
          onClick={() => handlePageSizeChange(100)}
          active={pageSizeCom === 100}>
          100
        </Button>
      </ButtonGroup>
    </ButtonToolbar>
  );
}

export default PageSize;

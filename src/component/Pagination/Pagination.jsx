import "./Pagination.css";

const Pagination = ({
  propertiesArray,
  currentPage,
  setCurrentPage,
  propertiesPerPage,
}) => {
  const totalPages = Math.ceil(propertiesArray.length / propertiesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginationButtons = [];

  for (let index = 0; index < totalPages; index++) {
    paginationButtons.push(
      <span
        key={index}
        onClick={() => handlePageChange(index + 1)}
        className={
          currentPage === index + 1
            ? "pagination-button active"
            : "pagination-button"
        }
      >
        {index + 1}
      </span>
    ); 
  }

  return <div className="pagination-container">{paginationButtons}</div>;
};

export default Pagination;

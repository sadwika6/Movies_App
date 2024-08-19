import React from 'react';

const Pagination = ({ currentPage, totalPages, paginate }) => {
  const pageNumbers = [];

  const getPaginationGroup = () => {
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, currentPage + 2);

    if (currentPage <= 3) {
      end = Math.min(totalPages, 5);
    } else if (currentPage + 2 >= totalPages) {
      start = Math.max(totalPages - 4, 1);
    }
    const length = end - start + 1;
    return [1, '...', ...Array.from({ length }, (_, idx) => idx + start + 1), '...', totalPages]
  }

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleClick = (page) => {
    if (page === "...") {
      return;
    }
    return paginate(page);
  }

  const paginationGroup = getPaginationGroup();

  return (
    <nav>
      <ul className="pagination">
        {currentPage > 1 && (
          <li className='page-item' role='page'>
            <a onClick={() => paginate(currentPage - 1)} href="#!" className="page-link">Previous</a>
          </li>
        )}


        {paginationGroup.map(number => (
          <li key={number} role='page' className={`page-item-${number === currentPage ? 'active' : ''}`}>
            <a onClick={() => handleClick(number)} href="#!" className="page-link" role={`page-item-${number === currentPage ? 'active' : ''}`}>
              {number}
            </a>
          </li>
        ))}
        {currentPage < totalPages && (
          <li className='page-item' role='page'>
            <a onClick={() => paginate(currentPage + 1)} href="#!" className="page-link">Next</a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
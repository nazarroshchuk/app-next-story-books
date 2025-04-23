import { getPaginationList } from '@/components/pagination/helper';

function PaginationFooter({ setSelectedPage, selectedPage, mumberOfpages }) {
  const pages = getPaginationList(selectedPage, mumberOfpages);
  return (
    <div className="pagination-footer">
      <button
        className="back"
        onClick={() => setSelectedPage((prevState) => prevState - 1)}
        disabled={selectedPage === 1}
      >
        {'<'}
      </button>
      {pages.map((page) => (
        <button
          disabled={typeof page === 'string'}
          className={`${page === selectedPage ? 'active' : ''} ${typeof page === 'string' ? 'gap' : ''}`}
          onClick={() => setSelectedPage(page)}
          key={Math.random(100)}
        >
          {page}
        </button>
      ))}
      <button
        className="forward"
        onClick={() => setSelectedPage((prevState) => prevState + 1)}
        disabled={selectedPage === mumberOfpages}
      >
        {'>'}
      </button>
    </div>
  );
}

export default PaginationFooter;

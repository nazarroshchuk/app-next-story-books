'use client';
import { Suspense, useEffect, useState } from 'react';
import PaginationList from './pagination-list';
import PaginationFooter from './pagination-footer';

import './pagination.css';

function Pagination({ rowsPerPage }) {
  const [selectedPage, setSelectedPage] = useState(1);
  const [posts, setPosts] = useState([]);

  const mumberOfpages = Math.ceil(posts.length / rowsPerPage);

  const startIndex = selectedPage * rowsPerPage - rowsPerPage;
  const endIndex = selectedPage * rowsPerPage;

  useEffect(() => {
    async function loadPages() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (e) {
        console.error(e);
      }
    }

    loadPages();
  }, []);

  return (
    <div className="pagination-section">
      <Suspense fallback={<div>Loading inside...</div>}>
        <PaginationList posts={posts.slice(startIndex, endIndex)} />
      </Suspense>
      <PaginationFooter
        setSelectedPage={setSelectedPage}
        selectedPage={selectedPage}
        mumberOfpages={mumberOfpages}
      />
    </div>
  );
}

export default Pagination;

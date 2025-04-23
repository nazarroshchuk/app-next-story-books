import React, { useState, useEffect, useRef } from 'react';

const InfiniteScroll = () => {
  const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`)); // Initial data
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef(null); // Reference to the loading div

  // Function to fetch more data
  const loadMoreItems = () => {
    setIsLoading(true);
    setTimeout(() => {
      setItems((prevItems) => [
        ...prevItems,
        ...Array.from({ length: 10 }, (_, i) => `Item ${prevItems.length + i + 1}`),
      ]);
      setIsLoading(false);
    }, 1500); // Simulating network delay
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          loadMoreItems();
        }
      },
      { root: null, rootMargin: '0px', threshold: 1.0 } // Triggers when fully visible
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [isLoading]);

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Infinite Scroll</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
            {item}
          </li>
        ))}
      </ul>
      <div ref={loaderRef} style={{ height: '40px', textAlign: 'center', marginTop: '10px' }}>
        {isLoading && <p>Loading more...</p>}
      </div>
    </div>
  );
};

export default InfiniteScroll;

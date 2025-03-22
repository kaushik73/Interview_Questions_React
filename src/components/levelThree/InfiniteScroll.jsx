import { useState, useRef } from "react";

const InfiniteScroll = () => {
  const [items, setItems] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const lastItemRef = (node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        loadMoreItems();
      }
    });
    if (node) observer.current.observe(node);
  };

  const loadMoreItems = () => {
    setTimeout(() => {
      setItems((prevItems) => [...prevItems, ...Array.from({ length: 20 })]);
      if (items.length >= 100) {
        setHasMore(false);
      }
    }, 1000);
  };

  return (
    <div>
      {items.map((_, index) => {
        if (index === items.length - 1) {
          return (
            <div ref={lastItemRef} key={index} className="item">
              Item {index + 1}
            </div>
          );
        }
        return (
          <div key={index} className="item">
            Item {index + 1}
          </div>
        );
      })}
    </div>
  );
};

export default InfiniteScroll;

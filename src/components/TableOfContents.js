import React, { useEffect, useState } from "react";

function getIds(items) {
  return items.reduce((acc, item) => {
    if (item.url) {
      // url has a # as first character, remove it to get the raw CSS-id
      acc.push(item.url.slice(1));
    }
    if (item.items) {
      acc.push(...getIds(item.items));
    }
    return acc;
  }, []);
}

function useActiveId(itemIds) {
  const [activeId, setActiveId] = useState(`test`);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }
    );
    itemIds.forEach((id) => {
      observer.observe(document.getElementById(id));
    });
    return () => {
      itemIds.forEach((id) => {
        observer.unobserve(document.getElementById(id));
      });
    };
  }, [itemIds]);
  return activeId;
}

function renderItems(items, activeId) {
  return (
    <ol>
      {items.map((item) => {
        return (
          <li key={item.url}>
            <a
              href={item.url}
              style={{
                color: activeId === item.url.slice(1) ? "#0c954b" : "inherit",
                fontWeight: activeId === item.url.slice(1) ? "400" : "200"
              }}
            >
              {item.title}
            </a>
            {item.items && renderItems(item.items, activeId)}
          </li>
        );
      })}
    </ol>
  );
}

function TableOfContents(props) {
  const idList = getIds(props.items);
  const activeId = useActiveId(idList);
  return (
    <div className="table-of-contents">
      <h3>On this page</h3>
      {renderItems(props.items, activeId)}
    </div>
  );
}

export default TableOfContents;
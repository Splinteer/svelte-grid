export function throttle(func, timeFrame) {
  let lastTime = 0;
  return function (...args) {
    let now = new Date();
    if (now - lastTime >= timeFrame) {
      func(...args);
      lastTime = now;
    }
  };
}

export function getRowsCount(items, cols, maxRows) {
  if (maxRows) {
    return maxRows;
  }
  const getItemsMaxHeight = items.map((val) => {
    const item = val[cols];

    return (item && item.y) + (item && item.h) || 0;
  });

  return Math.max(...getItemsMaxHeight, 1);
}

export const getColumn = (containerWidth, columns) => {
  const sortColumns = columns.slice().sort((a, b) => a[0] - b[0]);

  const breakpoint = sortColumns.find((value) => {
    const [width] = value;
    return containerWidth <= width;
  });

  if (breakpoint) {
    return breakpoint[1];
  } else {
    return sortColumns[sortColumns.length - 1][1];
  }
};


[
  [
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
  ],
  [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
  ],
  [
      null,
      null,
      true,
      true,
      true,
      true,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
  ],

]

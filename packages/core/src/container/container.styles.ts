const defaultStyles = (numCols) => {
  let styles = {
    "gap-4": true,
    flex: true,
    "flex-wrap": true,
    "justify-center": true,
  };

  //   styles[`grid-cols-${numCols}`] = true;

  return styles;
};

export { defaultStyles };

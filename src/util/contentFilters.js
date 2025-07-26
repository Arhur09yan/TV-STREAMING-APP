export const filterContentByCategory = (content, category) => {
  if (category === "Movies") {
    return content.filter((item) => item.Category === "Movie");
  } else if (category === "TV Shows") {
    return content.filter((item) => item.Category === "TV Show");
  }
  return content;
};

export const searchContent = (content, query) => {
  if (!query.trim()) return content;

  return content.filter(
    (item) =>
      item.Title.toLowerCase().includes(query.toLowerCase()) ||
      item.Category.toLowerCase().includes(query.toLowerCase())
  );
};

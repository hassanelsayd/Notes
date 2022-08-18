export const getFav = () => {
  const filterd = JSON.parse(localStorage.getItem("notes")).filter((note) => {
    if (note.isFavourite) return note;
  });
  return filterd;
};

export const getDone = () => {
  const filterd = JSON.parse(localStorage.getItem("notes")).filter((note) => {
    if (note.isDone) return note;
  });
  return filterd;
};

export const getNotes = () => {
  const filterd = JSON.parse(localStorage.getItem("notes"));
  return filterd;
};

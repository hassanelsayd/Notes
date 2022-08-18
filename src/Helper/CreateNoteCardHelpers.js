export const handleCardHeader = (from) => {
  if (!from) {
    return "You Dont Have Any Notes";
  } else if (from === "fav") {
    return "You Dont Have Any favourite Notes";
  } else {
    return "You Dont Have Any finished Notes";
  }
};

export const handleCardBtn = (from) => {
  if (!from) {
    return "Create Note";
  } else {
    return "Go Home";
  }
};

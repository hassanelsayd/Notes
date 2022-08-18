const random = [
  {
    bg: "#A66CFF",
    text: "#fff",
  },
  {
    bg: "#AFB4FF",
    text: "#fff",
  },
  {
    bg: "#FF8FB1",
    text: "#fff",
  },
  {
    bg: "#FCE2DB",
    text: "#333",
  },
  {
    bg: "#100720",
    text: "#fff",
  },
  {
    bg: "#FFC23C",
    text: "#fff",
  },
  {
    bg: "#377D71",
    text: "#fff",
  },
  {
    bg: "#FF7396",
    text: "#fff",
  },
  {
    bg: "#BDF2D5",
    text: "#333",
  },
  {
    bg: "#A66CFF",
    text: "#fff",
  },
  {
    bg: "#EAE3D2",
    text: "#333",
  },
  {
    bg: "#5800FF",
    text: "#fff",
  },
  {
    bg: "#0096FF",
    text: "#fff",
  },
  {
    bg: "#3CCF4E",
    text: "#fff",
  },
  {
    bg: "#3D3C42",
    text: "#fff",
  },
  {
    bg: "#ECB390",
    text: "#fff",
  },
  {
    bg: "#66BFBF",
    text: "#fff",
  },
];

const getRandom = () => {
  return random[Math.floor(Math.random() * (random.length - 1)) + 1];
};

export default getRandom;

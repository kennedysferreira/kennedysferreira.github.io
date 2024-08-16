const cursor = document.getElementById("cursor");
const linkDownload = document.getElementById("downloadLink");
const iFrame = document.getElementById("downloadFrame");

const handleCursorMove = (e) => {
  const cursorX = e.clientX;
  const cursorY = e.clientY;
  const transform = `translate(-50%, -50%) translate(${cursorX}px , ${cursorY}px)`;
  cursor.style.transform = transform;
};
const handleDownload = () => {
  iFrame.src =
    "https://github.com/kennedysferreira/uploadCV/raw/main/Cv%20-%20Kennedy%20Ferreira.pdf";
};

document.addEventListener("mousemove", handleCursorMove);
linkDownload.addEventListener("click", handleDownload);

const cursor = document.getElementById("cursor");

const handleCursorMove = (e) => {
  const cursorX = e.clientX;
  const cursorY = e.clientY;
  const transform = `translate(-50%, -50%) translate(${cursorX}px , ${cursorY}px)`;
  cursor.style.transform = transform;
};

document.addEventListener("mousemove", handleCursorMove);

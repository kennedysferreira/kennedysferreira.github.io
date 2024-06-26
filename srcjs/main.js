const handleMousemove = (e) => {
  const cursor = document.getElementById('cursor');
  
  
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  
  // Define as transformações necessárias
  const transform = `translate(-50%, -50%) translate(${mouseX}px , ${mouseY}px)`;
  
  // Aplica as transformações ao cursor
  cursor.style.transform = transform;
}

document.addEventListener('mousemove', handleMousemove);
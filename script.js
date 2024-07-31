document.addEventListener('DOMContentLoaded', () => {
  const heartContainer = document.createElement('div');
  heartContainer.className = 'heart-container';
  document.body.appendChild(heartContainer);

  // Função para criar a chuva de corações
  function createHeartRain() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
    heartContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }

  setInterval(createHeartRain, 300);

  // Função para criar o caminho de corações seguindo o cursor
  function createHeartTrail(e) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${e.pageX}px`;
    heart.style.top = `${e.pageY}px`;
    heart.style.width = '20px';
    heart.style.height = '20px';
    heart.style.animationDuration = '1s';
    heartContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1000);
  }

  document.addEventListener('mousemove', createHeartTrail);
});

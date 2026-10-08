const heart = document.querySelector('.heart');

if (heart) {
  heart.addEventListener('click', () => {
    heart.classList.remove('pulse');
    void heart.offsetWidth;
    heart.classList.add('pulse');
  });
}

for (let i = 0; i < 16; i += 1) {
  const tiny = document.createElement('span');
  tiny.className = 'floating-petal';
  tiny.style.left = `${Math.random() * 100}%`;
  tiny.style.top = `${Math.random() * 100}%`;
  tiny.style.width = `${10 + Math.random() * 10}px`;
  tiny.style.height = `${14 + Math.random() * 12}px`;
  tiny.style.animationDelay = `${Math.random() * 6}s`;
  tiny.style.opacity = String(0.45 + Math.random() * 0.45);
  document.querySelector('.page-shell')?.appendChild(tiny);
}

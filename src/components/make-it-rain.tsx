import { useEffect, useRef, useState } from 'react';

const FrogRainComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isFrogRainActive, setIsFrogRainActive] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frogImages: HTMLImageElement[] = [];
    let animationFrame: number;

    const createFrog = () => {
      const frog = new Image();
      frog.src = '/frog.svg';
      frog.width = 32;
      frog.height = 32;
      frog.style.position = 'absolute';
      frog.style.left = `${Math.random() * canvas.width}px`;
      frog.style.top = '-32px';
      canvas.appendChild(frog);
      frogImages.push(frog);
    };

    const animateFrogs = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frogImages.forEach((frog) => {
        frog.style.top = `${frog.offsetTop + 5}px`;
        if (frog.offsetTop > canvas.height) {
          frog.style.top = '-32px';
          frog.style.left = `${Math.random() * canvas.width}px`;
        }
      });
      animationFrame = requestAnimationFrame(animateFrogs);
    };

    const startFrogRain = () => {
      for (let i = 0; i < 50; i++) {
        createFrog();
      }
      animateFrogs();
      setTimeout(() => {
        frogImages.forEach((frog) => canvas.removeChild(frog));
        frogImages = [];
        cancelAnimationFrame(animationFrame);
        setIsFrogRainActive(false);
      }, 10000);
    };

    if (isFrogRainActive) {
      startFrogRain();
    }

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isFrogRainActive]);

  const handleButtonClick = () => {
    setIsFrogRainActive(true);
  };

  return (
    <div>
      <button
        className="font-bold py-2 px-4 rounded"
        onClick={handleButtonClick}
      >
        Start Frog Rain
      </button>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      />
    </div>
  );
};

export default FrogRainComponent;
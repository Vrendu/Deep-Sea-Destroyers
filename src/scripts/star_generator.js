export function generateStars(){
    const canvas = document.getElementById('star-canvas');
    const ctx = canvas.getContext('2d');
    const starCount = 100;
    const minSize = 1;
    const maxSize = 3;
    const speed = 5; 
    const stars = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < starCount; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * (maxSize - minSize) + minSize,
            speed: Math.random() * speed + 0.1
        });
    }

    function drawStars() {
        ctx.fillStyle = '#ffffff';
        for (let i = 0; i < stars.length; i++) {
            const star = stars[i];
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fill();

            star.x -= star.speed;
            if (star.x < -star.size) {
                star.x = canvas.width + star.size;
            }
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawStars();
    }

    window.addEventListener('resize', function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    animate();
}


const container = document.getElementById('cat-container');
const numCats = 10;
const cats = [];
const gravity = 0.2;
const bounce = 0.8;

function createCat() {
    const cat = document.createElement('div');
    cat.className = 'cat';
    cat.style.backgroundImage = 'url("https://placekitten.com/50/50")'; // Replace with your cat image URL
    cat.style.left = `${Math.random() * (window.innerWidth - 50)}px`;
    cat.style.top = `${Math.random() * (window.innerHeight - 50)}px`;

    container.appendChild(cat);
    cats.push({
        element: cat,
        x: parseFloat(cat.style.left),
        y: parseFloat(cat.style.top),
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1
    });
}

for (let i = 0; i < numCats; i++) {
    createCat();
}

function update() {
    cats.forEach(cat => {
        // Update position
        cat.x += cat.vx;
        cat.y += cat.vy;
        cat.vy += gravity;

        // Bounce off walls
        if (cat.x < 0 || cat.x > window.innerWidth - 50) {
            cat.vx *= -bounce;
            cat.x = Math.max(0, Math.min(cat.x, window.innerWidth - 50));
        }

        // Bounce off floor and ceiling
        if (cat.y < 0 || cat.y > window.innerHeight - 50) {
            cat.vy *= -bounce;
            cat.y = Math.max(0, Math.min(cat.y, window.innerHeight - 50));
        }

        // Update element position
        cat.element.style.left = `${cat.x}px`;
        cat.element.style.top = `${cat.y}px`;
    });

    requestAnimationFrame(update);
}

update();

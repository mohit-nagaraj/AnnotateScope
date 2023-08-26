const imageContainer = document.getElementById('image-container');
const zoomableImage = document.getElementById('zoomable-image');

let currentScale = 1;

function zoomIn() {
    currentScale += 0.1;
    applyScale();
}

function zoomOut() {
    currentScale -= 0.1;
    applyScale();
}

function resetZoom() {
    currentScale = 1;
    applyScale();
}

function applyScale() {
    zoomableImage.style.transform = `scale(${currentScale})`;
}

document.getElementById('zoom-in').addEventListener('click', zoomIn);
document.getElementById('zoom-out').addEventListener('click', zoomOut);
document.getElementById('reset-zoom').addEventListener('click', resetZoom);

// Adjust initial scaling as needed
applyScale();

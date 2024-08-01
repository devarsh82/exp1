function revealSurprise() {
    const hiddenMessage = document.getElementById('hiddenMessage');
    const surpriseButton = document.getElementById('surpriseButton');
    const surpriseVideo = document.getElementById('surpriseVideo');
    
    hiddenMessage.style.display = 'block';
    surpriseButton.style.display = 'none';

    

    // Set the video to autoplay
    surpriseVideo.src += "?autoplay=1";

    // Trigger confetti
    startConfetti();
}

function startConfetti() {
    const confettiContainer = document.querySelector('.confetti');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confettiContainer.appendChild(confetti);
    }
}


const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
.confetti-piece {
    position: absolute;
    top: -10px;
    width: 10px;
    height: 10px;
    background: #ff4081;
    opacity: 0.8;
    transform: rotate(45deg);
    animation: fall linear infinite;
}

@keyframes fall {
    to {
        transform: translateY(100vh) rotate(720deg);
        opacity: 0;
    }
}
`;
document.head.appendChild(styleSheet);

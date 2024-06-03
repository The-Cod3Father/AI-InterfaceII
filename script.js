document.addEventListener("DOMContentLoaded", () => {
    // Define paths for each dot (customize these paths)
    const dot1Path = [
        { x: "30vw", y: "20vh" },
        { x: "60vw", y: "50vh" },
        { x: "30vw", y: "20vh" }
    ];

    const dot2Path = [
        { x: "50vw", y: "40vh" },
        { x: "80vw", y: "70vh" },
        { x: "50vw", y: "40vh" }
    ];

    // Create the animations with GSAP
    gsap.to("#dot1", {
        motionPath: {
            path: dot1Path,
            curviness: 1.25,
            autoRotate: true
        },
        duration: 5,  // Duration of the animation for dot1 in seconds
        repeat: -1,
        ease: "linear"
    });

    gsap.to("#dot2", {
        motionPath: {
            path: dot2Path,
            curviness: 1.25,
            autoRotate: true
        },
        duration: 7,  // Duration of the animation for dot2 in seconds
        repeat: -1,
        ease: "linear"
    });

    // Add more random moving dots
    const createRandomDot = () => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        document.querySelector('.animation-container').appendChild(dot);

        gsap.to(dot, {
            x: () => `${Math.random() * 100}vw`,
            y: () => `${Math.random() * 100}vh`,
            duration: 3 + Math.random() * 7,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    };

    for (let i = 0; i < 10; i++) {
        createRandomDot();
    }

    // Pulse center animation
    const pulseCenter = () => {
        gsap.fromTo("#pulse-center", { scale: 1 }, { scale: 1.5, duration: 0.3, yoyo: true, repeat: 1, ease: "power1.inOut" });
    };

    // Use Web Speech API for speech recognition
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.interimResults = true;
    recognition.continuous = true;

    recognition.addEventListener('result', (event) => {
        for (let i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
                const transcript = event.results[i][0].transcript;
                const syllables = transcript.split(/\s+/).length;
                for (let j = 0; j < syllables; j++) {
                    setTimeout(pulseCenter, j * 300); // Adjust the interval timing as needed
                }
            }
        }
    });

    recognition.start();
});
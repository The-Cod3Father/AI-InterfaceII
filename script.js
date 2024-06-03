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
    const dot1Anim = gsap.to("#dot1", {
        motionPath: {
            path: dot1Path,
            curviness: 1.25,
            autoRotate: true
        },
        duration: 5,
        repeat: -1,
        ease: "linear"
    });

    const dot2Anim = gsap.to("#dot2", {
        motionPath: {
            path: dot2Path,
            curviness: 1.25,
            autoRotate: true
        },
        duration: 7,
        repeat: -1,
        ease: "linear"
    });

    // Function to update animation speed
    const updateSpeed = (animation, duration) => {
        animation.duration(duration);
    };

    // Add event listeners to the input elements
    document.getElementById("speed1").addEventListener("input", (event) => {
        const newDuration = 10 - event.target.value;
        updateSpeed(dot1Anim, newDuration);
    });

    document.getElementById("speed2").addEventListener("input", (event) => {
        const newDuration = 10 - event.target.value;
        updateSpeed(dot2Anim, newDuration);
    });
});
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
        duration: 5,  // Duration of the animation for dot1 in seconds
        repeat: -1,
        ease: "linear"
    });

    const dot2Anim = gsap.to("#dot2", {
        motionPath: {
            path: dot2Path,
            curviness: 1.25,
            autoRotate: true
        },
        duration: 7,  // Duration of the animation for dot2 in seconds
        repeat: -1,
        ease: "linear"
    });
});
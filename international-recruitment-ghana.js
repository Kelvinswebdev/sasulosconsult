document.addEventListener("DOMContentLoaded", () => {
    const videoElement = document.getElementById("heroVideo");
    const sources = [
        "pics/longhaul.mp4",
        "pics/10810476-hd_1920_1080_30fps.mp4",
        "pics/forklift.mp4"
    ];

    let currentVid = 0;

    // Function to handle the swap
    const swapVideo = () => {
        // 1. Start Fade Out
        videoElement.classList.add("fade-out");
        videoElement.classList.remove("fade-in");

        // 2. Wait for the CSS transition (1s) to finish before changing src
        setTimeout(() => {
            currentVid = (currentVid + 1) % sources.length;
            videoElement.src = sources[currentVid];
            
            // Play the new video
            videoElement.play();

            // 3. Start Fade In
            videoElement.classList.remove("fade-out");
            videoElement.classList.add("fade-in");
        }, 1000); // This matches your CSS 1s transition
    };

    if (videoElement && sources.length > 1) {
        // Run the swap every 5 seconds
        setInterval(swapVideo, 9000);
    }
});
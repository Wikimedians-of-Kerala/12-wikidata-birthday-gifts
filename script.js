const svgs = document.querySelectorAll('.svg');

        svgs.forEach(svg => {
            // Randomize the starting horizontal position
            const randomLeft = Math.random() * 90; // Random percentage for left position
            svg.style.left = `${randomLeft}%`;

            // Randomize the starting vertical position (bottom)
            const randomBottom = Math.random() * 130; // Random percentage for bottom position (up to 50%)
            svg.style.bottom = `${randomBottom}%`;

            // Randomize the animation duration
            const randomDuration = Math.random() * 5 + 2; // Random duration between 3s and 8s
            svg.style.animationDuration = `${randomDuration}s`;

            // Set a random animation delay
            const randomDelay = Math.random() * 4; // Random delay between 0s and 2s
            svg.style.animationDelay = `${randomDelay}s`;
        });

        // Optional fullscreen functionality
        document.documentElement.requestFullscreen();

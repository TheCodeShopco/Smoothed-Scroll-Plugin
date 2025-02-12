// Importing Lenis smooth scroll library //

function importLenis() {
    let script = document.createElement('script');
    script.src = "https://unpkg.com/lenis@1.1.20/dist/lenis.min.js";
    document.head.appendChild(script);
}

// Main function to initialise smooth scroll //

function initialiseSmoothScroll() {

    // Function to fix scroll issues with Squarespace menus //

    function fixSquarespaceMenuScroll() {
        // Add classes here to target any broken elements //
        const targetClasses = ['.sqs-layout-insert-block-menu-content','.catalog-1f79ad4','.catalog-5pzt00'];
        targetClasses.forEach(targetClass => {
            const elements = document.querySelectorAll(targetClass);
            elements.forEach(element => {
                if (!element.hasAttribute('data-lenis-prevent')) {
                    element.setAttribute('data-lenis-prevent', "");
                }
            });
        });
    }

    // Calling the fixing function every 100ms to ensure it catches all new elements //
    
    setInterval(fixSquarespaceMenuScroll, 100);

    // Finding the attribute element and sourcing the sensitivity and animation speed //

    let smoothScrollAttributes = document.getElementById('smooth-scroll-attributes');
    let sensitivity = smoothScrollAttributes.getAttribute('data-sensitivity');
    let animationSpeed = smoothScrollAttributes.getAttribute('data-animation-speed');

    // Creating the smooth scroll function with Lenis using the sourced sensitivity and animation speed //

    const lenis = new Lenis({
        wheelMultiplier: sensitivity,
        lerp: animationSpeed,
        autoRaf: true,
        anchors: true,
        overscroll: true,
    });

}

// Running the functions //

importLenis();
document.addEventListener('DOMContentLoaded', initialiseSmoothScroll);


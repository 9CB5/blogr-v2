// ================================================================================================
function toggleMenu() {
    const hamburger = document.querySelector(".navigation__hamburger");
    const menu = document.querySelector(".navigation__links");

    // Show image
    // --------------------------------------------------------------------------------------------
    menu.classList.toggle("show");

    // Toggle nav icon
    // --------------------------------------------------------------------------------------------
    const src = hamburger.src;
    let newSrc = "";

    newSrc = src.includes("hamburger") ? src.replace("hamburger", "close") : newSrc = src.replace("close", "hamburger");
    hamburger.src = newSrc;
}

// ================================================================================================
function togglePanel(panelNumber) {
    const panel = document.getElementById(`panel-${panelNumber}`);
    const arrow = document.getElementById(`arrow-${panelNumber}`);

    // Close any open panels before opening one
    // --------------------------------------------------------------------------------------------
    for (let i = 0; i < 3; i++) {
        const panelToClose = document.getElementById(`panel-${i}`);
        const arrowToRotate = document.getElementById(`arrow-${i}`);

        if (i !== panelNumber && panelToClose.classList.contains("show") && arrowToRotate.classList.contains("rotate")) {

            panelToClose.classList.remove("show");
            arrowToRotate.classList.remove("rotate");
        }
    }

    // Open the panel and rotate arrow
    // --------------------------------------------------------------------------------------------
    panel.classList.toggle("show");
    arrow.classList.toggle("rotate");
}

// ================================================================================================
function animationSetup() {
    const observedElements = [
        { id: "first-observe", animation: "animate__fadeInLeft" },
        { id: "second-observe", animation: "animate__fadeInRight" },
        { id: "third-observe", animation: "animate__fadeIn" },
    ];

    // Checks to see if certain elements are in viewport and if so, trigger animation
    // --------------------------------------------------------------------------------------------
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const intersecting = entry.isIntersecting;
            const index = observedElements.findIndex(x => x.id === entry.target.id);

            if (intersecting && index > -1) {
                entry.target.classList.add("animate__animated", observedElements[index].animation);
            }
        },
        {
            threshold: 0.5
        })
    })

    // Setup observed elements
    // --------------------------------------------------------------------------------------------
    observedElements.forEach(i => {
        observer.observe(document.getElementById(i.id));
    });
}

// ================================================================================================
function main() {
   animationSetup();
}

main();
window.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript has executed!");

    // Show the dynamic content after 1 second
    setTimeout(() => {
        const dynamicContent = document.getElementById("dynamicContent");
        dynamicContent.style.display = "block";
    }, 1000);

    // Add an event listener to the button
    const button = document.getElementById("alertButton");
    button.addEventListener("click", () => {
        alert("Button clicked! JavaScript is working.");
    });
});

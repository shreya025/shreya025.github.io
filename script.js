// Get the modal and its content elements
var modal = document.getElementById("myModal");
var modalTitle = document.getElementById("modal-title");
var modalDescription = document.getElementById("modal-description");

// Function to open the modal
function openModal(titleText, descriptionText, url) { 
    
    // CHECK 1: If a valid URL is provided (i.e., not null, undefined, or empty)
    if (url) {
        // Construct the title as a link
        modalTitle.innerHTML = `
            <a href="${url}" target="_blank">
                ${titleText}
            </a>
        `;
    } else {
        // CHECK 2: If no URL is provided, just set the title as plain text
        modalTitle.textContent = titleText;
    }

    // Set the description content
    modalDescription.textContent = descriptionText;
    
    // Display the modal
    modal.style.display = "flex";
}

// Function to close the modal (rest of the code is unchanged)
function closeModal() {
    modal.style.display = "none";
}

// Attach a click event listener to the close button
var closeBtn = document.querySelector(".close");
if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
}

// Close the modal when the user clicks outside of the modal content
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeModal();
    }
});
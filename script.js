// Get the modal and its content elements
var modal = document.getElementById("myModal");
var modalImage = document.getElementById("modal-image");
var modalTitle = document.getElementById("modal-title");
var modalDescription = document.getElementById("modal-description");

// Function to open the modal
function openModal(imageSrc, titleText, descriptionText) {
    // Set the content of the modal
    modalImage.src = imageSrc;
    modalTitle.textContent = titleText;
    modalDescription.textContent = descriptionText;
    
    // Display the modal
    modal.style.display = "flex";
}

// Function to close the modal
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
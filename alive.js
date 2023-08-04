const section = document.querySelector("section"),
    // overlay = document.querySelector(".overlay"),
    showBtn = document.querySelector(".show-modal"),
    closeBtn = document.querySelector(".close-btn");
    showBtn.addEventListener("click", () => section.classList.add("active"));
    overlay.addEventListener("click", () =>
    section.classList.remove("active")
    );
    closeBtn.addEventListener("click", () =>
    section.classList.remove("active")
    );

// CONTACT MODAL

// Function to open the modal
function openModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Event listener to open the modal when the button is clicked
document.getElementById("openModalBtn").addEventListener("click", openModal);

// Event listener to close the modal when the close button or overlay is clicked
document.getElementById("closeModal").addEventListener("click", closeModal);
// document.getElementById("overlays").addEventListener("click", closeModal);

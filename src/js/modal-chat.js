// Function to open the modal
const modalContent = document.getElementById('modal-content');
const tableModal = document.getElementById('tableModal');

export function openModal({ text }) {
  tableModal.style.visibility = 'visible';
  modalContent.innerHTML = ''; // Clear previous content
  modalContent.insertAdjacentHTML('beforeend', `<p>${text}</p>`);
}

// Function to close the modal
export function closeModal() {
  tableModal.style.visibility = 'hidden';
  modalContent.innerHTML = ''; // Clear content on modal close
}
window.closeModal = closeModal;

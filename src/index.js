import "./style.scss";

document.addEventListener("DOMContentLoaded", () => {
  const openModalBtn = document.querySelector("#open");
  const closeModal = document.querySelector("#close-modal");
  const modalWindow = document.querySelector("[data-modal]");

  openModalBtn.addEventListener("click", () => {
    modalWindow.showModal();
  });

  closeModal.addEventListener("click", () => {
    modalWindow.close();
  });
});

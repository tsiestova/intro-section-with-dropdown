import "./style.scss";

document.addEventListener("DOMContentLoaded", () => {
  const openModalBtn = document.querySelector("#open");
  const closeModal = document.querySelector("#close-modal");
  const modalWindow = document.querySelector("[data-modal]");
  const modalInner = modalWindow.querySelector("[data-modal-inner]");

  modalWindow.addEventListener("click", (e) => {
    if (modalInner.contains(e.target)) {
      return;
    }
    modalWindow.classList.add("close");
  });

  modalWindow.addEventListener("animationend", () => {
    if (modalWindow.classList.contains("close")) {
      modalWindow.close();
      modalWindow.classList.remove("close");
    }
  });

  openModalBtn.addEventListener("click", () => {
    modalWindow.showModal();
  });

  closeModal.addEventListener("click", () => {
    modalWindow.classList.add("close");
  });

  document.addEventListener("click", (e) => {
    let currentDropDownContainer;
    const isDropDownLink = e.target.matches("[data-dropdown-btn]");
    let isModal = e.target.closest("[data-modal]");

    if (!isDropDownLink && e.target.closest("[data-dropdown]") !== null) return;

    if (isDropDownLink) {
      currentDropDownContainer = e.target.closest("[data-dropdown]");
      currentDropDownContainer.classList.toggle("active");
    }

    document.querySelectorAll("[data-dropdown].active").forEach((el) => {
      if (el !== currentDropDownContainer && isModal === null) {
        el.classList.remove("active");
      }
    });
  });
});

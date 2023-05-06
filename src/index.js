import "./style.scss";

document.addEventListener("DOMContentLoaded", () => {
  const openModalBtn = document.querySelector("#open");
  const closeModal = document.querySelector("#close-modal");
  const modalWindow = document.querySelector("[data-modal]");

  modalWindow.addEventListener("click", (e) => {
    const dialogDimentions = modalWindow.getBoundingClientRect();

    if (
      e.clientX < dialogDimentions.left ||
      e.clientX > dialogDimentions.right ||
      e.clientY < dialogDimentions.top ||
      e.clientY > dialogDimentions.bottom
    ) {
      modalWindow.classList.add("close");
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
    //
    // if (
    //   !e.target.matches("#open") &&
    //   modalWindow.hasAttributes("open") &&
    //   e.target.closest("[modal-inner]") === null
    // ) {
    //   modalWindow.classList.add("close");
    // }

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

    modalWindow.addEventListener("animationend", () => {
      if (modalWindow.classList.contains("close")) {
        modalWindow.close();
        modalWindow.classList.remove("close");
      }
    });
  });
});

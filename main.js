function modalOpen() {
  let modalBtn = document.querySelector(".music_button");
  let modal = document.querySelector(".overlay");
  let closeModal = document.querySelector(".modal_close");
  let modalSearchBtn = document.querySelector(".modal_searchBtn");
  let modalMain = document.querySelector(".modal_main");

  modalBtn.addEventListener("click", () => {
    modal.classList.add("modalopen");
  });

  closeModal.addEventListener("click", () => {
    modal.classList.remove("modalopen");
  });

  modalSearchBtn.addEventListener("click", () => {
    modal.classList.remove("modalopen");
  });

  modal.addEventListener("click", () => {
    modal.classList.remove("modalopen");
  });

  modalMain.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}
modalOpen();

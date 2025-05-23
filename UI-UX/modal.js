// Basic modal script
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("myModal");
    const openBtn = document.getElementById("openModal");
    const closeBtn = document.getElementsByClassName("close")[0];
  
    openBtn.onclick = () => {
      modal.style.display = "block";
    };
  
    closeBtn.onclick = () => {
      modal.style.display = "none";
    };
  
    window.onclick = (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  });
  
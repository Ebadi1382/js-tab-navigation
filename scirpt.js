let lists = document.querySelectorAll(".cd-tabs-navigation li a");
lists.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".cd-tabs-navigation li a.selected").classList.remove("selected");
    this.classList.add("selected");

    let dataBox = this.getAttribute("data-content");

    document.querySelector(".cd-tabs-content li.selected").classList.remove("selected");
    document.querySelector(`.cd-tabs-content li[data-content="${dataBox}"]`).classList.add("selected");
  });
});

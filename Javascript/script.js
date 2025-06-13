document.addEventListener("DOMContentLoaded", function () {
  const gridContainer = document.getElementById("card-grid");
  const gridItems = gridContainer.children;

  for (let i = 0; i < gridItems.length; i++) {
    if (i === 0) {
      gridItems[i].classList.add("md:col-span-2", "lg:col-span-3");
      continue;
    }

    if (i % 3 === 0) {
      gridItems[i].classList.add("md:col-span-2", "lg:col-span-1");
    }

    if (i % 4 === 0) {
      gridItems[i].classList.add("lg:col-span-3");
    }
  }
});

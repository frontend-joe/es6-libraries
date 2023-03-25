const rows = ["Adidas Superstar", "Nike Air Force", "Reebok Classic"];

const table = document.querySelector("#table");

let rowCount = rows.length;

const rerun = () => {
  table.classList.remove("empty");
  buildRows();
};

const removeRow = (index) => {
  const row = document.querySelector(`#row-${index}`);
  row.classList.add("removed");
  rowCount -= 1;

  if (rowCount === 0) {
    table.classList.add("empty");
  }

  Toastify({
    text: "Product Deleted",
    duration: 1500,
    gravity: "bottom",
    position: "center",
    stopOnFocus: true,
  }).showToast();
};

const buildRows = () => {
  let content = ``;

  rows.forEach((row, index) => {
    content += `
      <div class="row" id="row-${index}">
        <p>${row}</p>
        <button onclick="removeRow(${index})">
            <span class="material-symbols-outlined"> close </span>
        </button>
      </div>`;
  });

  console.log("content", content);

  table.innerHTML = content;
};

window.addEventListener("load", () => buildRows());

const ul = document.querySelector("#todo-list");
const add = document.querySelector(".add");
const inp = document.querySelector("#todo-input");

add.addEventListener("click", () => {
  if (inp.value.trim() !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox" id="checkbox" />
      <label ">${inp.value}</label>
      <i class="fa-solid fa-trash"></i>
    `;
    ul.appendChild(li);
    inp.value = "";
  } else {
    alert("Please enter a task before adding it.");
  }
});

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.remove();
  }
});

ul.addEventListener("click", (e) => {
  if (e.target.tagName === "LABEL") {
    if (e.target.innerText != "rashad" && e.target.innerText != "sunal") {
      e.target.classList.toggle("done");
    }
  }
});

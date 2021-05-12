var expenseName = document.getElementById("expenseName");
var date = document.getElementById("date");
var amount = document.getElementById("amount");
var tr = document.getElementsByTagName("tr");
var table = document.getElementsByTagName("table");
table[0].setAttribute("class", "table table-striped my-4");

if (table[0].rows.length === 1) {
  var row = table[0].insertRow(1);
  var cell = row.insertCell(0);
  cell.setAttribute("colspan", "4");
  cell.innerHTML = "No expenses added yet!";
}

function add() {
  // Validation

  if (expenseName.value === "") {
    expenseName.classList.add("is-invalid");
  } else {
    expenseName.classList.remove("is-invalid");
    expenseName.classList.add("is-valid");
  }
  if (date.value === "") {
    date.classList.add("is-invalid");
  } else {
    date.classList.remove("is-invalid");
    date.classList.add("is-valid");
  }
  if (amount.value === "") {
    amount.classList.add("is-invalid");
  } else {
    amount.classList.remove("is-invalid");
    amount.classList.add("is-valid");
  }

  if (amount.classList[1] === "is-valid") {
    if (table[0].rows[1].innerText === "No expenses added yet!") {
      table[0].deleteRow(1);
    }
    var deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "btn btn-danger active btn-sm");
    deleteBtn.innerText = "Delete";
    let th1 = document.createElement("th");
    th1.setAttribute("scope", "row");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let tr1 = document.createElement("tr");
    tr1.setAttribute("height", "40.8px");

    th1.appendChild(document.createTextNode(expenseName.value));
    td1.appendChild(document.createTextNode(date.value));
    td2.appendChild(document.createTextNode(`₹ ${amount.value}`));
    td3.appendChild(deleteBtn);
    tr1.appendChild(th1);
    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr1.appendChild(td3);
    table[0].appendChild(tr1);
    deleteBtn.onclick = (e) => {
      e.preventDefault();

      table[0].removeChild(tr1);
      if (table[0].rows.length === 1) {
        var row = table[0].insertRow(1);
        var cell = row.insertCell(0);
        cell.setAttribute("colspan", "4");
        cell.innerHTML = "No expenses added yet!";
      }
    };
    expenseName.value = "";
    date.value = "";
    amount.value = "";
    expenseName.classList.remove('is-valid')
    date.classList.remove('is-valid')
    amount.classList.remove('is-valid')
  }
}

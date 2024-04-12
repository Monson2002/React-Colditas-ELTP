import { userForm, saveBtn, resetBtn, tBody, nameInputField, ageInputField, contactInputField, cityInputField } from "./references.ts";
import { TData, UserData, getFormData, createElement, createEditBtn, createDeleteBtn, createDOMObj, makeRow, addBtn } from "./utils.ts";

let noRows = 0;

saveBtn?.addEventListener('click', (e) => {
  e.preventDefault();

  const parsedData = getFormData(userForm);

  const tdName = createDOMObj('td', "name", parsedData);
  const tdAge = createDOMObj('td', "age", parsedData);
  const tdContact = createDOMObj('td', "contact", parsedData);
  const tdCity = createDOMObj('td', "city", parsedData);

  const row = makeRow(noRows, { name: tdName, age: tdAge, contact: tdContact, city: tdCity });
  row.classList.add(`row-${noRows}`);

  const editBtn = createEditBtn(noRows, tdName, tdAge, tdContact, tdCity);
  const deleteBtn = createDeleteBtn(noRows);

  addBtn(editBtn, row);
  addBtn(deleteBtn, row);

  tBody.appendChild(row);
  console.log(row);

  noRows++;
  userForm.reset();
})
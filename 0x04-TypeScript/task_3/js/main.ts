/// <reference path="./js/crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './js/crud';

// Create an object with RowElement type
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

// Insert the row and store the newRowID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updatedRow object with age added
const updatedRow: RowElement = { 
  firstName: 'Guillaume', 
  lastName: 'Salva', 
  age: 23 
};

// Update the row
CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID);

import { startPage } from "./startPage.js";
import { doSelect } from "./doSelect.js";
import { showInsertPage } from "./showInsertPage.js";
import { showDeleteList, showUpdateList } from "./showList.js";
/*import { showUpdateList } from "./showUpdateList.js";
import { showDeleteList } from "./showDeleteList.js"; */

$(document).ready(function () {
  $("#root").html(startPage);
  $("#insert").click(function () {
    showInsertPage();
  });
  $("#update").click(function () {
    showUpdateList();
  });
  $("#delete").click(function () {
    showDeleteList();
  });
  $("#select").click(function () {
    doSelect();
  });
});

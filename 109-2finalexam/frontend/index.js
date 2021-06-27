//import all page
import { startPage } from "./startPage.js";
import { homePage } from "./homePage.js";
import { showInsertPage } from "./insertpage.js";
import { doTableSelect } from "./tableSelect.js";
import { showDeleteList, showUpdateList } from "./showList.js";
//import jsfunction
import { doSelect } from "./doSelect.js";

$(document).ready(function () {
  $("#root").html(startPage);
  $("#content").html(homePage);
  doSelect();
  $("#backtoindex").click(function () {
    console.log("資料總覽");
    $("#content").html(homePage);
    doSelect();
    console.log("成功跳轉");
  });
  $("#insert").click(function () {
    console.log("新增資料");
    showInsertPage();
    console.log("成功跳轉");
  });
  $("#update").click(function () {
    console.log("更新資料");
    showUpdateList();
    console.log("成功跳轉");
  });
  $("#delete").click(function () {
    console.log("刪除資料");
    showDeleteList();
    console.log("成功跳轉");
  });
  $("#nowadays").click(function () {
    console.log("近期趨勢查詢");
    doTableSelect();
    console.log("成功跳轉");
  });
});

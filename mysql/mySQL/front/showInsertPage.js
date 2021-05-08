import { doInsert } from "./doInsert.js";
function showInsertPage() {
  console.log("showInsertPage function");
  let str = `學號:<input type="text" id="id"><br>`;
  str += `姓名:<input type="text" id="name"><br>`;
  str += `生日:<input type="text" id="birth"><br>`;
  str += `住址:<input type="text" id="addr"><br>`;
  str += `<button id="doinsert">確認新增</button>`;
  $("#content").html(str);
  $("#doinsert").click(function () {
    doInsert();
  });
}
export { showInsertPage };

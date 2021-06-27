import { showUpdatePage } from "./UpdatePage.js";
import { doDelete } from "./doDelete.js";

function showDeleteList() {
  console.log("showDeleteList function");
  showList("delete");
}
function showUpdateList() {
  console.log("showUpdateList function");
  showList("update");
}
function showList(type) {
  axios
    .get("http://localhost/finalexam/backend/Index.php?action=DoSelect")
    .then((res) => {
      let response = res["data"];
      switch (response["status"]) {
        case 200:
          let rows = response["result"];
          let str = `<header>
          <h2><a>請選擇水庫</a></h2>
        </header><blockquote><p><table>`;
          rows.forEach((element) => {
            str += "<tr>";
            str +=
              "<td>" +
              `<input type="radio" id="RN" name="RN" value="` +
              element["RN"] +
              `">` +
              "</td>";
            str += "<td>" + element["RN"] + "</td>";
            str += "<td>" + element["ESC"] + "</td>";
            str += "<td>" + element["CWL"] + "</td>";
            str += "<td>" + element["CSC"] + "</td>";
            str += "<td>" + element["RT"] + "</td>";
            str += "</tr>";
          });
          str += `</table>`;
          if (type == "delete") {
            str += `</p><footer><button id="doDelete">確認刪除</button></footer></blockquote>`;
            $("#content").html(str);
            $("#doDelete").click(function () {
              doDelete();
            });
          } else {
            str += `</p><footer><button id="showUpdatePage">開始更新</button></footer></blockquote>`;
            $("#content").html(str);
            $("#showUpdatePage").click(function () {
              showUpdatePage();
            });
          }
        default:
          $("content").html(response["message"]);
          break;
      }
    })
    .catch((err) => {
      console.error(err);
    });
}
export { showUpdateList, showDeleteList };

import { showUpdatePage } from "./showUpdatePage.js";
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
    .get("http://localhost/mySQL/backend/DoSelect.php")
    .then((res) => {
      let response = res["data"];
      switch (response["status"]) {
        case 200:
          let rows = response["result"];
          let str = `<table>`;
          rows.forEach((element) => {
            str += "<tr>";
            str +=
              "<td>" +
              `<input type="radio" id="id" name="id" value="` +
              element["id"] +
              `">` +
              "</td>";
            str += "<td>" + element["name"] + "</td>";
            str += "<td>" + element["birth"] + "</td>";
            str += "<td>" + element["addr"] + "</td>";
            str += "</tr>";
          });
          str += `</table>`;
          if (type == "delete") {
            str += `<button id="doDelete">刪除</button>`;
            $("#content").html(str);
            $("#doDelete").click(function () {
              doDelete();
            });
          } else {
            str += `<button id="showUpdatePage">修改</button>`;
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

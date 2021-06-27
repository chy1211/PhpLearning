import { nowadays } from "./donowadays.js";
function doTableSelect() {
  axios
    .get("http://localhost/finalexam/backend/Index.php?action=DoTableSelect")
    .then((res) => {
      let response = res["data"];
      switch (response["status"]) {
        case 200:
          let rows = response["result"];
          let str = `<header>
          <h2><a>請選擇日期及水庫</a></h2>
        </header><blockquote><p><select id="date1">`;
          rows.forEach((element) => {
            str += "<option value=" + element["Tables_in_reservoir"] + ">";
            str += element["Tables_in_reservoir"];
            str += "</option>";
          });
          str += `</select><br>至<br><select id="date2">`;
          rows.forEach((element) => {
            str += "<option value=" + element["Tables_in_reservoir"] + ">";
            str += element["Tables_in_reservoir"];
            str += "</option>";
          });
          str += `</select><br>請選擇水庫<br>`;
          axios
            .get("http://localhost/finalexam/backend/Index.php?action=DoSelect")
            .then((res) => {
              let response = res["data"];
              switch (response["status"]) {
                case 200:
                  let rows = response["result"];
                  str += `<select id="dam">`;
                  rows.forEach((element) => {
                    str += `<option value=` + element["RN"] + `>`;
                    str += element["RN"];
                    str += "</option>";
                  });
                  str += `</select><p>`;
                  str += `<footer><button id="tableselect">送出查詢</button></footer></blockquote>`;
                  $("#content").html(str);
                  $("#tableselect").click(function () {
                    nowadays();
                  });
                  break;
                case 400:
                  $("#content").html(response["message"]);
                  break;
                default:
                  $("#content").html(response["message"]);
                  break;
              }
            })
            .catch((err) => {
              console.error(err);
              $("#content").html(err);
            });
          break;
        case 400:
          $("#content").html(response["message"]);
          break;
        default:
          $("#content").html(response["message"]);
          break;
      }
    })
    .catch((err) => {
      console.error(err);
      $("#content").html(err);
    });
}
export { doTableSelect };

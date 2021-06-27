import { doUpdate, DoDateUpdate } from "./doUpdate.js";
import { getTime } from "./getTime.js";
function showUpdatePage() {
  let data = {
    RN: $("input[id=RN]:checked").val(),
  };
  axios
    .post(
      "http://localhost/finalexam/backend/Index.php?action=DoSelect",
      Qs.stringify(data)
    )
    .then((res) => {
      console.log(res);
      let response = res["data"];
      switch (response["status"]) {
        case 200:
          let rows = response["result"];
          let row = rows[0];
          let str = `<article id="main">
		  <header>
			  <h2><a>更新資料</a></h2>
		  </header>
		  <blockquote>
			  <p>`;
          str += `<input type="hidden" id="rn" value="` + row["RN"] + `">`;
          str +=
            `有效蓄水量: <input type="text"id="esc"value="` +
            row["ESC"] +
            `">(萬立方公尺)`;
          str += `<br>`;
          str +=
            `目前水位: <input type="text"id="cwl"value="` +
            row["CWL"] +
            `">(公尺)`;
          str += `<br>`;
          str +=
            `目前蓄水容量: <input type="text"id="csc"value="` +
            row["CSC"] +
            `">(%)`;
          str += `<br>`;
          str +=
            `紀錄時間: <input type="text"id="rt"value="` +
            getTime +
            `">年月日時分`;
          str += `</p><footer>`;
          str += `<button id="doUpdate">更新</button>`;
          str += `</footer></blockquote>								
		  </article>`;
          $("#content").html(str);
          $("#doUpdate").click(function () {
            doUpdate();
            DoDateUpdate();
          });
          console.log("Showing successful and complete!");
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
export { showUpdatePage };

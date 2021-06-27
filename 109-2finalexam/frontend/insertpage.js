import { doInsert, DoDateInsert } from "./doInsert.js";
import { doUpdate, DoDateUpdate } from "./doUpdate.js";
import { getDate, getTime } from "./getTime.js";
function showInsertPage() {
  const insertPage =
    `
	<article id="main">
		<header>
			<h2><a>新增資料</a></h2>
		</header>
		<blockquote>
			<p>
				<input type="text" id="rn" placeholder="水庫名稱"><br>
				<input type="text" id="esc" placeholder="有效蓄水量(萬立方公尺)"><br>
				<input type="text" id="cwl" placeholder="目前水位(公尺)"><br>
				<input type="text" id="csc" placeholder="目前蓄水容量(%)"><br>
				<input type="text" id="rt" value="` +
    getTime +
    `">
			</p>
			<footer>
				<button id="doinsert" class="button">送出資料</button>
			</footer>
		</blockquote>								
	</article>						
	`;
  $("#content").html(insertPage);
  $("#doinsert").click(function () {
    let data = {
      RN: $("input[id=rn]").val(),
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
            if (row == undefined) {
              console.log("沒搜尋到");
              doInsert();
            } else {
              console.log("有搜尋到");
              //查詢當日資料表
              let ddata = {
                RN: $("input[id=rn]").val(),
                gd: getDate,
              };
              console.log(ddata);
              axios
                .post(
                  "http://localhost/finalexam/backend/Index.php?action=DoDateSelect",
                  Qs.stringify(ddata)
                )
                .then((res) => {
                  console.log(res);
                  let response = res["data"];
                  switch (response["status"]) {
                    case 200:
                      let drows = response["result"];
                      let drow = drows[0];
                      if (drow == undefined) {
                        console.log("日期沒搜尋到");
                        doUpdate();
                        DoDateInsert();
                      } else {
                        console.log("日期有搜尋到");
                        doUpdate();
                        DoDateUpdate();
                      }
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
                });
            }
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
      });
  });
}
export { showInsertPage };

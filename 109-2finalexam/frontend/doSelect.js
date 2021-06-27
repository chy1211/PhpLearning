function doSelect() {
  axios
    .get("http://localhost/finalexam/backend/Index.php?action=DoSelect")
    .then((res) => {
      let response = res["data"];
      switch (response["status"]) {
        case 200:
          let rows = response["result"];
          let leng =
            `目前共有 <strong>` + rows.length + `</strong>個水庫在資料庫內!`;
          $("#leng").html(leng);
          let str = ``;
          rows.forEach((element) => {
            str += "<article>";
            str += "<header>";
            str += "<h3>" + element["RN"] + "</h3>";
            str += "</header>";
            str += "<blockquote>";
            str += "有效蓄水量:";
            str += element["ESC"];
            str += "萬立方公尺" + "<br>";
            str += "目前水位:";
            str += element["CWL"];
            str += "公尺" + "<br>";
            str += "目前蓄水量:";
            str += element["CSC"] + "<br>";
            str += "最後紀錄時間:";
            str += element["RT"] + "<br>";
            str += "</article>";
            str += "</blockquote>";
          });
          $("#selectall").html(str);
          break;
        case 400:
          $("#selectall").html(response["message"]);
          break;
        default:
          $("#selectall").html(response["message"]);
          break;
      }
    })
    .catch((err) => {
      console.error(err);
      $("#selectall").html(err);
    });
}
export { doSelect };

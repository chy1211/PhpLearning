import { getDate } from "./getTime.js";
function doInsert() {
  let data = {
    rn: $("#rn").val(),
    esc: $("#esc").val(),
    cwl: $("#cwl").val(),
    csc: $("#csc").val(),
    rt: $("#rt").val(),
    gd: getDate,
  };
  console.log(data);
  axios
    .post(
      "http://localhost/finalexam/backend/Index.php?action=DoInsert",
      Qs.stringify(data)
    )
    .then((res) => {
      console.log(res);
      let response = res["data"];
      let msg = response["status"] + ":" + response["message"];
      $("#content").html(msg);
    })
    .catch((err) => {
      console.error(err);
      $("#content").html(err);
    });
}
function DoDateInsert() {
  let ddata = {
    rn: $("#rn").val(),
    esc: $("#esc").val(),
    csc: $("#csc").val(),
    gd: getDate,
  };
  console.log(ddata);
  axios
    .post(
      "http://localhost/finalexam/backend/Index.php?action=DoDateInsert",
      Qs.stringify(ddata)
    )
    .then((res) => {
      console.log(res);
      let response = res["data"];
      let msg = response["status"] + ":" + response["message"];
      $("#content").html(msg);
    })
    .catch((err) => {
      console.error(err);
      $("#content").html(err);
    });
}
export { doInsert, DoDateInsert };

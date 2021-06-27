import { getDate } from "./getTime.js";
function doDelete() {
  let data = {
    rn: $("input[id=RN]:checked").val(),
    gd: getDate,
  };
  axios
    .post(
      "http://localhost/finalexam/backend/Index.php?action=DoDelete",
      Qs.stringify(data)
    )
    .then((res) => {
      let response = res["data"];
      let msg = response["status"] + ":" + response["message"];
      $("#content").html(msg);
    })
    .catch((err) => {
      console.error(err);
      $("#content").html(err);
    });
}
export { doDelete };

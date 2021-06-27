function nowadays() {
  if ($("#date1").val() == $("#date2").val()) {
    $("#content").html(`<header><h2><a>請勿選擇相同日期</a></h2></header>`);
  } else {
    let data = {
      gd: $("#date1").val(),
      RN: $("#dam").val(),
    };
    let data1 = "";
    let data2 = "";
    console.log(data);
    axios
      .post(
        "http://localhost/finalexam/backend/Index.php?action=DoDateSelect",
        Qs.stringify(data)
      )
      .then((res) => {
        let response = res["data"];
        let rows = response["result"];
        let rd = rows["0"];
        data1 += rd["CSC"];
        let ddata = {
          gd: $("#date2").val(),
          RN: $("#dam").val(),
        };
        axios
          .post(
            "http://localhost/finalexam/backend/Index.php?action=DoDateSelect",
            Qs.stringify(ddata)
          )
          .then((res) => {
            let response = res["data"];
            let rows = response["result"];
            let rd = rows["0"];
            data2 += rd["CSC"];
            console.log(data2);
            let value1 = parseFloat(data1.replace("%", ""));
            let value2 = parseFloat(data2.replace("%", ""));
            console.log(value1);
            console.log(value2);
            let total = value1 - value2;
            console.log(total);
            if (total > 0) {
              $("#content").html(
                "<header><h2><a>趨勢為:下降</a></h2></header>" +
                  "<br>" +
                  "共下降" +
                  total +
                  "%"
              );
            } else {
              total = total.toString();
              total = total.replace("-", "");
              $("#content").html(
                "<header><h2><a>趨勢為:上升</a></h2></header>" +
                  "<br>" +
                  "共上升" +
                  total +
                  "%"
              );
            }
          })
          .catch((err) => {
            console.error(err);
            $("#content").html(err);
          });
      })
      .catch((err) => {
        console.error(err);
        $("#content").html(err);
      });
  }
}
export { nowadays };

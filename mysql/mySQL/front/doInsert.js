function doInsert() {
  $.ajax({
    type: "POST",
    url: "http://localhost/mySQL/backend/DoInsertAction.php",
    data: {
      id: $("#id").val(),
      name: $("#name").val(),
      addr: $("#addr").val(),
      birth: $("#birth").val(),
    },
    success: function (jsonString) {
      let response = JSON.parse(jsonString);
      let msg = response["status"] + ":" + response["message"];
      $("#content").html(msg);
    },
    error: function (err) {
      console.log(err);
    },
  });
}
export { doInsert };

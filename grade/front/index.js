$(document).ready(function () {
    const startPage=`
    國文<input type="text" id="chi"><br>
    英文<input type="text" id="eng"><br>
    數學<input type="text" id="math"><br>
    平均 <div id="avg"></div><br>
    <input type="button" value="計算" id="cal">
    `;
    $("#root").html(startPage);
    $("#cal").click(function (e) { 
        let data = {
            "chi":$("#chi").val(),
            "eng":$("#eng").val(),
            "math":$("#math").val()
        };
        axios.post('http://localhost/grade/backend/gradecal.php',Qs.stringify(data))
        .then(res => {
            console.log(res)
            let response = res['data'];
            if (response>=60){
                $("#avg").css("color", "blue");
            }
            else{
                $("#avg").css("color", "red");
            }
            $("#avg").html(response);
        })
        .catch(err => {
            console.error(err); 
        })
    });
});
$(document).ready(function () {
    const startPage=`
    A<input type="text" id="a"><br>
    B<input type="text" id="b"><br>
    <input type="button" value="計算" id="cal"><br>
    <div id="ans"></div>
    `;
    $("#root").html(startPage);
    $("#cal").click(function (e) { 
        let data = {
            "a":$("#a").val(),
            "b":$("#b").val(),
        };
        axios.post('http://localhost/a+...+b/backend/cal.php',Qs.stringify(data))
        .then(res => {
            console.log(res);
            let response = res['data'];
            $("#ans").html(response);
        })
        .catch(err => {
            console.error(err); 
        })
    });
});
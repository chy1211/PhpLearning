$(document).ready(function () {
    const startPage=`
    <input type="text" id="op1">
    <select id="op">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">x</option>
        <option value="/">÷</option>
    </select>
    <input type="text" id="op2">=<div id="ans"></div><br>
    <input type="button" value="計算" id="cal">
    `;
    $("#root").html(startPage);
    $("#cal").click(function (e) { 
        let data = {
            "a":$("#op1").val(),
            "b":$("#op2").val(),
            "op":$("#op").val(),
        };
        axios.post('http://localhost/calculatorphp/backend/cal.php',Qs.stringify(data))
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
$(document).ready(function () {
    const startPage=`
    A<input type="text" id="a"><br>
    B<input type="text" id="b"><br>
    <input type="button" value="取公因數" id="cal"><br>
    最大公因數為:<div id="ans"></div>
    `;
    $("#root").html(startPage);
    $("#cal").click(function (e) { 
        let data = {
            "a":$("#a").val(),
            "b":$("#b").val(),
        };
        axios.post('http://localhost/commonfactor/backend/cal.php',Qs.stringify(data))
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
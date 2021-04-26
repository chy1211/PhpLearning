$(document).ready(function () {
    const startPage=`
    <button id="insert">新增</button>
    <button id="update">修改</button>
    <button id="delete">刪除</button>
    <button id="select">查詢</button>
    <br>
    <div id="content"></div>
    `;
    $("#root").html(startPage);
    $("#insert").click(function () { 
        let str = `學號:<input type="text" id="id"><br>`;
        str += `姓名:<input type="text" id="name"><br>`;
        str += `生日:<input type="text" id="birth"><br>`;
        str += `住址:<input type="text" id="addr"><br>`;
        str += `<button id="doinsert">確認新增</button>`;
        $("#content").html(str);
        console.log("開始新增1/2");
        $("#doinsert").click(function () {
            console.log("開始新增2/2");
            let data={
                "id":$("#id").val(),
                "name":$("#name").val(),
                "birth":$("#birth").val(),
                "addr":$("#addr").val()
            };
            axios.post("http://localhost/0413/backend/DoInsertClick.php",Qs.stringify(data))
            .then(res => {
                let response = res['data'];
                $("#content").html(response['message']);
            })
            .catch(err => {
                console.error(err); 
            })
        });
    });
    
    $("#update").click(function () { 
        //修改
    });
    $("#delete").click(function () { 
        //刪除
    });
    $("#select").click(function () { 
        console.log("開始查詢")
        axios.get("http://localhost/0413/backend/DoSelect.php")
        .then(res => {
            let response = res['data'];
            switch(response['status']){
                case 200:
                    let rows = response['result'];
                    let str = `<table>`;
                    rows.forEach(element => {
                        str += "<tr>";
                        str += "<td>" + element['id'] + "</td>";
                        str += "<td>" + element['name'] + "</td>";
                        str += "<td>" + element['birth'] + "</td>";
                        str += "<td>" + element['addr'] + "</td>";
                        str += "</tr>";
                    });
                    str += `</table>`;
                    $("#content").html(str);
                    break;
                default:
                    $("#content").html(response['message']);
            }
        })
        .catch(err => {
            console.error(err); 
        })
    });
});
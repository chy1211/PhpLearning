$(document).ready(function () {
    const startPage=`<a href="file.txt">傳統檔案顯示</a>
    <button id="loadfile">載入檔案內容</button>
    <div id="content"></div>
    `;
    $("#root").html(startPage);
    $("#loadfile").click(function (e) { 
        $("#content").load("file.txt")           
    });
});
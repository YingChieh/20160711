// JavaScript source code
$(document).ready(function () {

    obj = new Object();
    arrayList = [];
    i = 0;
    var prdate = "";
    count = 0;

    ////closestatus = 1，編輯內容變瀏覽
    //$("tr").find("td:eq(9) a").each(function () {
    //    count++;
    //    if ($(this).attr('closestatus') == 1) {
    //        viewId = "#ShowSurvey_" + count;
    //        editId = "#EditSurvey_" + count;
    //        //alert($(viewId).parent().html());
    //        $(editId).parent().html($(viewId).parent().html());
    //    }
    //});

    //$("tr").find("td:eq(9) a").each(function () {
    //    if ($(this).attr('closestatus') == 1) {
    //        //alert($(this).parent().parent().html());
    //        //alert($(this).parent().parent().find("td:eq(10)").html());

    //        $(this).parent().parent().find("td:eq(11)").html($(this).parent().parent().find("td:eq(10)").html());
    //    }
    //});

    $("tr").find("td:eq(9) a").each(function () {
        if ($(this).attr('closestatus') == 1) {
            //alert($(this).parent().parent().find("td:eq(10) a").attr("id"));
            tempId = "#" + $(this).parent().parent().find("td:eq(10) a").attr("id");
            tempId2 = "#" + $(this).parent().parent().find("td:eq(11) a").attr("id");
            $(tempId2).html($(tempId).html());
        }
    });

    //更改closestatus = 1 的儲存格
    $("tr").find("td:eq(9) a").each(function () {
        if($(this).attr("closestatus") == "1")
        {
            $(this).parent().attr("BGColor", "red");
            $(this).parent().html("已開放<br>填寫問卷無法設定");
        }
    });

    //輸出最後一欄的guid
    $("[id^=GetRAW_]").each(function () {
        //alert($(this).attr("guid"));
        temp = $(this).attr("guid");
        obj = {"index" : i, "Guid:": temp };
        arrayList.push(obj);
        //document.write($(this).attr("guid") + "<br>");
        i++;
    });
    var jsonText = JSON.stringify(arrayList);
    $("#print_guid").text(jsonText);

    //列出結束時間
    $("tr").find("td:eq(6)").each(function () {
        prdate += $(this).text() + "<br>";
    });
    $("#date").html(prdate);

});

//點 [匯出RAW] 跳出警告視窗顯示guid
function GetRAW(id) {
    //alert(id);
    thisid = "#" + id;
    alert($(thisid).attr("guid"));
}
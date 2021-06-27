<?php
    require_once './mysql.inc.php';
    function DoInsert(){
        $rn = $_POST['rn'];
        $esc=$_POST['esc'];
        $cwl=$_POST['cwl'];
        $csc=$_POST['csc'];
        $rt=$_POST['rt'];
        $response = openDB();
        if($response['status']==200){
            $conn = $response['result'];
            $sql = "INSERT INTO`dam-data`(`RN`,`ESC`,`CWL`,`CSC`,`RT`)VALUES(?,?,?,?,?)";
            $stmt = $conn->prepare($sql);
            $result = $stmt->execute(array($rn,$esc,$cwl,$csc,$rt));
            if ($result) {
                $count = $stmt->rowCount();
                if ($count<1) {
                    $response['status'] = 204;//No Content
                    $response['message'] = "新增失敗";
                }
                else{
                    $response['status'] = 200;//OK
                    $response['message'] = "新增成功";
                }
            }
            else{
                $response['status'] = 400;//Bad Request
                $response['message'] = "SQL錯誤";
            }
        }
        return($response); 
    }
    function DoDateInsert(){
        $rn = $_POST['rn'];
        $csc=$_POST['csc'];
        $gd = $_POST['gd'];
        $response = openDB();
        if($response['status']==200){
            $conn = $response['result'];
            $sql = "INSERT INTO`".$gd."`(`RN`,`CSC`)VALUES(?,?)";
            $stmt = $conn->prepare($sql);
            $result = $stmt->execute(array($rn,$csc));
            if ($result) {
                $count = $stmt->rowCount();
                if ($count<1) {
                    $response['status'] = 204;//No Content
                    $response['message'] = "新增失敗";
                }
                else{
                    $response['status'] = 200;//OK
                    $response['message'] = "新增成功";
                }
            }
            else{
                $response['status'] = 400;//Bad Request
                $response['message'] = "SQL錯誤";
            }
        }
        return($response); 
    }
?>
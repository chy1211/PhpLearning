<?php
    $id = $_POST['id'];
    require_once './mysql.inc.php';
    $response = openDB();
    if($response['status']==200){
        $conn = $response['result'];
        $sql = "DELETE FROM `student` WHERE id=?";
        $stmt = $conn->prepare($sql);
        $result=$stmt->execute(array($id)); 
        if($result){
            $count = $stmt->rowCount();
            if($count<1){
                $response['status']=204;
                $response['message']="刪除失敗";
            }
            else{
                $response['status']=200;
                $response['message']="刪除成功";
            }
        }
        else{
            $response['status']=400;
            $response['message']="SQL錯誤";
        }
    }
    echo json_encode($response);
?>
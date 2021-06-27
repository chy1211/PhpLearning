<?php
    require_once './mysql.inc.php';
    function DoDelete(){
        $rn = $_POST['rn'];
        $response = openDB();
        if($response['status']==200){
            $conn = $response['result'];
            $sql = "DELETE FROM `dam-data` WHERE rn=?";
            $stmt = $conn->prepare($sql);
            $result=$stmt->execute(array($rn)); 
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
        return($response); 
    }
    function DoDateDelete(){
        $rn = $_POST['rn'];
        $gd = $_POST['gd'];
        $response = openDB();
        if($response['status']==200){
            $conn = $response['result'];
            $sql = "DELETE FROM `".$gd."` WHERE rn=?";
            $stmt = $conn->prepare($sql);
            $result=$stmt->execute(array($rn)); 
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
        return($response); 
    }
?>
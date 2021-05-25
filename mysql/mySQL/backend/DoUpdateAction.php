<?php
    $id = $_POST['id'];
    $name=$_POST['name'];
    $addr=$_POST['addr'];
    $birth=$_POST['birth'];
    require_once './mysql.inc.php';
    $response = openDB();
    if($response['status']==200){
        $conn = $response['result'];
        $sql = "UPDATE`student`SET`name`=?,`birth`=?,`addr`=? WHERE id=?";
        $stmt = $conn->prepare($sql);
        $result=$stmt->execute(array($name,$birth,$addr,$id)); 
        if($result){
            $count = $stmt->rowCount();
            if($count<1){
                $response['status']=204;
                $response['message']="更新失敗";
            }
            else{
                $response['status']=200;
                $response['message']="更新成功";
            }
        }
        else{
            $response['status']=400;
            $response['message']="SQL錯誤";
        }
    }
    echo json_encode($response);
?>
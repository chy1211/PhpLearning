<?php
    $id = $_POST['id'];$name=$_POST['name'];$addr=$_POST['addr'];$birth=$_POST['birth'];
    $db_host = 'localhost';
    $db_name = 'school';
    $db_user = 'root';
    $db_password = '1211';
    $dsn="mysql:host=$db_host;dbname=$db_name;charset=utf8";
    try {
        $conn = new PDO($dsn,$db_user,$db_password);
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
    } catch (PDOException $e) {
        $response['status']=$e->getCode();
        $response['message']=$e->getMessage();
    }
    echo json_encode($response);
?>
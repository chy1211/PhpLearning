<?php
    $db_host = 'localhost';
    $db_name = 'school';
    $db_user = 'root';
    $db_password = '1211';
    $dsn = "mysql:host=$db_host;dbname=$db_name;charset=utf8";
    try {
        $conn = new PDO($dsn,$db_user,$db_password);
        $sql = "SELECT * FROM `student`";
        $stmt = $conn->prepare($sql);
        $result = $stmt->execute();
        if($result){
            $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $response['status'] = 200;
            $response['message']="查詢成功";
            $response['result']=$rows;
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
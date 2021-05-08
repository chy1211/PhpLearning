<?php
    $id = $_POST['id'];
    $name = $_POST['name'];
    $birth = $_POST['birth'];
    $addr = $_POST['addr'];
    $db_host = 'localhost';
    $db_name = 'school';
    $db_user = 'root';
    $db_password = '1211';
    $dsn = "mysql:host=$db_host;dbname=$db_name;charset=utf8";
    try {
        $conn = new PDO($dsn,$db_user,$db_password);
        $sql = "INSERT INTO`student`(`id`,`name`,`birth`,`addr`)VALUES(?,?,?,?)";
        $stmt = $conn->prepare($sql);
        $result = $stmt->execute(array($id,$name,$birth,$addr));
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
    } catch (PDOException $e) {
        $response['status']=$e->getCode();
        $response['message']=$e->getMessage();
    }
    echo json_encode($response);
?>
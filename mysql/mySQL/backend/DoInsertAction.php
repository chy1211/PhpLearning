<?php
    $id = $_POST['id'];
    $name = $_POST['name'];
    $birth = $_POST['birth'];
    $addr = $_POST['addr'];
    require_once './mysql.inc.php';
    $response = openDB();
    if($response['status']==200){
        $conn = $response['result'];
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
    }
    echo json_encode($response);
?>
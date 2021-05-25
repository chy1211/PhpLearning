<?php
    function openDB(){
        $db_host = 'localhost';
        $db_name = 'school';
        $db_user = 'root';
        $db_password = '1211';
        $dsn = "mysql:host=$db_host;dbname=$db_name;charset=utf8";
        try {
            $conn = new PDO($dsn,$db_user,$db_password);
            $response['status'] = 200;
            $response['result'] = $conn;
        } catch (PDOException $e) {
            $response['status'] = $e->getCode();
            $response['message'] = $e->getMessage();
        }
        return($response);
    }
?>

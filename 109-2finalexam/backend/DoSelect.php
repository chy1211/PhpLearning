<?php
    require_once './mysql.inc.php';
    function DoSelect(){
        $response = openDB();
        if($response['status']==200){
            $conn = $response['result'];
            if(isset($_POST['RN'])){
                $rn = $_POST['RN'];
                $sql = "SELECT * FROM `dam-data`WHERE RN=?";
                $stmt = $conn->prepare($sql);
                $result = $stmt->execute(array($rn));
            }else{
                $sql = "SELECT * FROM `dam-data`";
                $stmt = $conn->prepare($sql);
                $result = $stmt->execute();
            }
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
        }   
        return($response);
    }
    function DoDateSelect(){
        $response = openDB();
        if($response['status']==200){
            $conn = $response['result'];
            $rn = $_POST['RN'];
            $gd = $_POST['gd'];
            $sql = "SELECT * FROM `".$gd."` WHERE RN=?";//php字串相加方式為 .
            $stmt = $conn->prepare($sql);
            $result = $stmt->execute(array($rn));
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
        }   
        return($response);
    }
    function DoTableSelect(){
        $response = openDB();
        if($response['status']==200){
            $conn = $response['result'];
            $table = "dam-data";
            $sql = "SHOW TABLES WHERE Tables_in_reservoir !=?";
            $stmt = $conn->prepare($sql);
            $result = $stmt->execute(array($table));
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
        }   
        return($response);
    }
    
?>
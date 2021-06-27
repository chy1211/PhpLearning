<?php
    require_once './mysql.inc.php';
    function DoUpdate(){
        $rn = $_POST['rn'];
        $esc=$_POST['esc'];
        $cwl=$_POST['cwl'];
        $csc=$_POST['csc'];
        $rt=$_POST['rt'];
        $gd=$_POST['gd'];
        $response = openDB();
        if($response['status']==200){
            $conn = $response['result'];
            $sql = "UPDATE`dam-data`SET`ESC`=?,`CWL`=?,`CSC`=?,`RT`=?  WHERE RN=?";
            $stmt = $conn->prepare($sql);
            $result=$stmt->execute(array($esc,$cwl,$csc,$rt,$rn)); 
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
        return($response);
    }
    function DoDateUpdate(){
        $rn = $_POST['rn'];
        $csc=$_POST['csc'];
        $gd=$_POST['gd'];
        $response = openDB();
        if($response['status']==200){
            $conn = $response['result'];
            $sql = "UPDATE`".$gd."`SET`CSC`=?  WHERE RN=?";
            $stmt = $conn->prepare($sql);
            $result=$stmt->execute(array($csc,$rn)); 
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
        return($response);
    }
?>
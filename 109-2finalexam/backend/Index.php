<?php
    if(isset($_GET['action'])){
        $action =  $_GET['action'];
    }
    else{
        $action = 'no_action';
    }
    switch ($action) {
        case 'DoSelect':
            require_once './DoSelect.php';
            $response = DoSelect();
            break;
        case 'DoInsert':
            require_once './DoInsert.php';
            DoInsert();
            $response = DoDateInsert();
            break;
        case 'DoUpdate':
            require_once './DoUpdate.php';
            $response = DoUpdate();
            break;
        case 'DoDelete':
            require_once './DoDelete.php';
            DoDelete();
            $response = DoDateDelete();
            break;
        case 'DoDateSelect':
            require_once './DoSelect.php';
            $response = DoDateSelect();
            break;
        case 'DoDateInsert':
            require_once './DoInsert.php';
            $response = DoDateInsert();
            break;
        case 'DoDateUpdate':
            require_once './DoUpdate.php';
            $response = DoDateUpdate();
            break;
        case 'DoTableSelect':
            require_once './DoSelect.php';
            $response = DoTableSelect();
            break;
        default:
            $response['status'] = 404;
            $response['message'] = "action not found!";
            break;
    }
    echo json_encode($response);
?>
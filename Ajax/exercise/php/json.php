<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/1/7
 * Time: 16:36
 */
header('Content-Type:text/json');
$json=<<<A
[{"title":"标题","url":"http://baidu","name":"大侠","sex":"girl","age":"18"}]
A;
echo $json;
?>
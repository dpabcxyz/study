<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/12/12
 * Time: 22:49
 */
$json=<<<A
[{"title":"标题","url":"http://baidu","name":"大侠","sex":"girl","age":"18"}]
A;
echo "{$_GET['callback']}({$json})";
//echo "chenxuan({$json})";
?>
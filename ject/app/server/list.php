<?php
  mysql_connect("127.0.0.1","root","");
  mysql_select_db("user");
  $sql="SELECT * FROM cake";
  mysql_query("set names 'utf8'");
  $result=mysql_query($sql);
  $topArr= array();
  while ($arr = mysql_fetch_assoc($result)){
  	array_push($topArr,$arr);
  }
  
  $json=array("data"=>$topArr);
  echo json_encode($json);
?>
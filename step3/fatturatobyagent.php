<?php
  header('Content-Type: application/json');
  include_once 'database.php';
  $data= $graphs["fatturato_by_agent"];
  $nomi =[];
  $valori =[];
  foreach ($data["data"] as $key => $value) {
    $nomi[]=$key;
    $valori[]=$value;
  }
  $newdata =[
    "type" =>$data["type"],
    "names" =>$nomi,
    "data" =>$valori];
  echo json_encode($newdata);
 ?>

<?php
  header('Content-Type: application/json');
  include_once 'database.php';


  function fatturatoByAgent($graphs)
  {
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
      return $newdata;
  }

  $level = $_GET ["level"] ?? "guest";

  $res = [
    "fatturato" => $graphs["fatturato"]

  ];

  if ($level === "employee" || $level === "clevel") {
    $res["fatturato_by_agent"] = fatturatoByAgent($graphs);
  }
  if ($level === "clevel") {
    $res["team_efficiency"] = $graphs["team_efficiency"];
  }
  echo json_encode($res);
 ?>

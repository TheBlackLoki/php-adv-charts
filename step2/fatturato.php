<?php
  header('Content-Type: application/json');
  include_once 'database.php';
  $data = $graphs["fatturato"];
  echo json_encode($data);
 ?>

<?php
  require 'config.php';
  $connection = mysqli_connect($hostPath, $dbUserName, $dbPassword, $dbName);

  $_POST = json_decode(file_get_contents('php://input'), true);

  $breakPoint = mysqli_real_escape_string($connection, $_POST["breakPoint"]);
  $lastDate = mysqli_real_escape_string($connection, $_POST["lastDate"]);

  $queryUpdate = "UPDATE visits SET count = count + 1, lastDate = '$lastDate' WHERE breakPoint = '$breakPoint'";

  $result = mysqli_query($connection, $queryUpdate);

  if($result) {
    echo json_encode(['status' => 'ok']);
  } else {
    echo json_encode(['status' => 'error']);
  }

  mysqli_close($connection);
?>
<?php
  require 'config.php';
  $connection = mysqli_connect($hostPath, $dbUserName, $dbPassword, $dbName);

  $_POST = json_decode(file_get_contents('php://input'), true);

  $nameApp = mysqli_real_escape_string($connection, $_POST["nameApp"]);
  $likesCount = mysqli_real_escape_string($connection, $_POST["likesCount"]);

  $queryUpdate = "UPDATE portfolio_likes SET likesCount = '$likesCount' WHERE nameApp = '$nameApp'";

  $result = mysqli_query($connection, $queryUpdate);

  if($result) {
    echo json_encode(['status' => 'ok']);
  } else {
    echo json_encode(['status' => 'error']);
  }

  mysqli_close($connection);
?>
<?php
  require 'config.php';
  $connection = mysqli_connect($hostPath, $dbUserName, $dbPassword, $dbName);

  $querySelectAll = "SELECT * FROM `portfolio_likes`";
  $result = mysqli_query($connection, $querySelectAll);

  if($result) {
    $data = array();
    $i = 0;

    while($row = mysqli_fetch_assoc($result)) {
      $data[$i] = $row;
      $i++;
    }

    echo json_encode([
      'status' => 'ok',
      'data' => $data
    ]);
  } else {
    echo json_encode(['status' => 'Ошибка запроса, лайки из БД не загружены.']);
  }

  mysqli_close($connection);
?>
<?php

$pdo = new PDO('mysql:host=localhost:3306;dbname=archi_si', 'root', '');

$sql = "SELECT * FROM data";

$stmt = $pdo->prepare($sql);

$stmt->execute();

?>
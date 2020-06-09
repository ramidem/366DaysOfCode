<?php $document_title = "Arrays"; ?>
<?php include "../includes/head.php"; ?>

<?php
$friends = array("peppa pig", "doraemon", "goku");
$friends[0] = "luffy";
$friends[1] = "erin";
$friends[3] = "saitama";

echo $friends[0];
echo "<br>";
echo $friends[1];
echo "<br>";
echo $friends[2];
echo "<br>";
echo $friends[3];
echo "<br>";
echo count($friends);
?>

<?php include "../includes/footer.php"; ?>
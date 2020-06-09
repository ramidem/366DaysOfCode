<?php $document_title = "Mad Libs"; ?>
<?php include "../includes/head.php"; ?>

<form action="index.php" method="get">
  Color: <input type="text" name="color"><br>
  Plural Noun: <input type="text" name="pluralNoun"><br>
  Celebrity: <input type="text" name="celebrity"><br>
  <br>
  <input type="submit" value="Submit">
</form>
<br><br>
<?php
$color = $_GET["color"];
$pluralNoun = $_GET["pluralNoun"];
$celebrity = $_GET["celebrity"];

echo "Roses are $color <br>";
echo "$pluralNoun are blue <br>";
echo "I love $celebrity";
?>

<?php include "../includes/footer.php"; ?>
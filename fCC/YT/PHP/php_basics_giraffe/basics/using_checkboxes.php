<?php $document_title = "Using Checkboxes"; ?>
<?php include "../includes/head.php"; ?>

<form action="/basics/using_checkboxes.php" method="post">
    Apples: <input type="checkbox" name="fruits[]" value="apples"><br>
    Oranges: <input type="checkbox" name="fruits[]" value="oranges"><br>
    Pears: <input type="checkbox" name="fruits[]" value="pears"><br>
    <input type="submit" value="Sumit">
</form>

<br>

<?php
$fruits = $_POST["fruits"];

echo $fruits[0];
echo "<br>";
echo $fruits[1];
echo "<br>";
echo $fruits[2];
?>

<?php include "../includes/footer.php"; ?>
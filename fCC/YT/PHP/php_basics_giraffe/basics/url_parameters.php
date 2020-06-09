<?php $document_title = "URL Parameters"; ?>
<?php include "../includes/head.php"; ?>

<form action="/basics/url_parameters.php" method="get">
    Name: <input type="text" name="name"><br><br>
    <input type="submit" value="Submit">
</form>
<br>

<?php
echo $_GET["name"];
echo $_GET["age"];
?>

<?php include "../includes/footer.php"; ?>
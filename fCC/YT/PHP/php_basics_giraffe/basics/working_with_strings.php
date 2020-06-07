<?php $document_title = "Working with Strings"; ?>
<?php include "../includes/head.php"; ?>

<?php
$phrase = "To be or not to be.";
echo strtoupper($phrase);
echo "<br />";
echo strlen($phrase);
echo "<br />";
echo $phrase[rand(0, strlen($phrase))];
echo "<br />";
echo str_replace("not to be", "be to be to", $phrase);
echo "<br />";
echo substr($phrase, 0, 5);
?>

<?php include "../includes/footer.php"; ?>
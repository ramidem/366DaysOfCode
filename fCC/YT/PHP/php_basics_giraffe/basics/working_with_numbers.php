<?php $document_title = "Working with Numbers"; ?>
<?php include "../includes/head.php"; ?>

<?php
echo rand();
echo 10 + 5;
echo "<br />";
echo 10 - 5;
echo "<br />";
echo 10 * 5;
echo "<br />";
echo 10 / 5;
echo "<br />";
echo 10 % 5;
echo "<br />";

$num = 10;
$num += 20;
$num++;
echo $num;
echo "<br />";
echo abs(-100);
echo "<br />";
echo pow(2, 4);
echo "<br />";
echo sqrt(100);
echo "<br />";
echo max(2, 10);
echo "<br />";
echo min(2, 10);
echo "<br />";
echo round(3.14);
echo "<br />";
echo ceil(3.5);
echo "<br />";
echo floor(3.5);

?>

<?php include "../includes/footer.php"; ?>
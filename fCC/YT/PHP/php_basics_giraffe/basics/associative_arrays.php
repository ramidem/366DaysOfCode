<?php $document_title = "Associative Arrays"; ?>
<?php include "../includes/head.php"; ?>

<form action="/basics/associative_arrays.php" method="post">
    <input type="text" name="student">
    <input type="submit" value="Submit">
</form>
<br>

<?php
// Store Key-Value Pairs
$grades = array("Jim" => "A+", "Pam" => "B-", "Oscar" => "C+");

$grades["Jim"] = "C-";
// echo $grades["Jim"];

echo $grades[$_POST["student"]];
?>



<?php include "../includes/footer.php"; ?>
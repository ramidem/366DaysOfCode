<?php $document_title = "If Statements"; ?>
<?php include "../includes/head.php"; ?>

<?php
$isMale = true;
$isTall = true;

// Operators
// && and both sides are either true or false
// || either side is true

if ($isMale && $isTall) {
    echo "you are a tall male.";
} elseif (!$isMale && $isTall) {
    echo "you are tall.";
} elseif ($isMale && !$isTall) {
    echo "you are short";
} else {
    echo "you are not male nor tall.";
}
?>

<?php include "../includes/footer.php"; ?>
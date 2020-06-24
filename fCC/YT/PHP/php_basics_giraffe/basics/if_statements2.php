<?php $document_title = "If Statements"; ?>
<?php include "../includes/head.php"; ?>

<?php
function getMax($num_a, $num_b)
{
    if ($num_a > $num_a) {
        return $num_a;
    } else {
        return $num_b;
    }
}
?>

<p><?php echo getMax(100, 20); ?></p>

<?php include "../includes/footer.php"; ?>
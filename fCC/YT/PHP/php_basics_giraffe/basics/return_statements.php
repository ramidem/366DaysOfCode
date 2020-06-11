<?php $document_title = "Return Statements"; ?>
<?php include "../includes/head.php"; ?>

<?php
function cube($num)
{
    return $num * $num * $num;
}
?>

<p><?php echo cube(4); ?></p>

<?php include "../includes/footer.php"; ?>
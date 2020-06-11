<?php $document_title = "Functions"; ?>
<?php include "../includes/head.php"; ?>

<?php
function sayHi($name, $moons)
{
    echo "hello, $name!. You have $moons moon/s!";
}
?>

<p><?php sayHi("world", 1); ?></p>
<p><?php sayHi("mars", 2); ?></p>
<p><?php sayHi("venus", 0); ?></p>


<?php include "../includes/footer.php"; ?>
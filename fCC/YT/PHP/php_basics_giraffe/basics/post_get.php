<?php $document_title = "Post & Get"; ?>
<?php include "../includes/head.php"; ?>

<form action="/basics/post_get.php" method="post">
    <!-- Password will not show on the navigation bar -->
    Password: <input type="password" name="password"><br><br>
    <input type="submit" value="Submit">
</form>
<br>

<?php
// GET will not print out the password
echo $_POST["password"];
?>

<?php include "../includes/footer.php"; ?>
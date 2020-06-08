<?php $document_title = "Getting User Input"; ?>
<?php include "../includes/head.php"; ?>

<form action="/basics/getting_user_input.php" method="get">
  Name:
  <br>
  <input type="text" name="name">
  <br>
  Age:
  <br>
  <input type="number" name="age" min="18" max="100">
  <br>
  <input type="submit" value="Submit">
</form>
<br />
<p>
  Your Name: <?php echo $_GET["name"]; ?>
</p>
<p>
  Your Age: <?php echo $_GET["age"]; ?>
</p>

<?php include "../includes/footer.php"; ?>
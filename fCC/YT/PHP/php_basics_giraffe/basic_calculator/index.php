<?php $document_title = "Basic Calculator"; ?>
<?php include "../includes/head.php"; ?>

<form action="/basic_calculator/index.php" method="get">
  <input type="number" name="num1">
  <br>
  <input type="number" name="num2">
  <br>
  <input type="submit" value="Add">
</form>

<p>Answer:
  <?php echo $_GET["num1"] + $_GET["num2"]; ?>
</p>

<?php include "../includes/footer.php"; ?>
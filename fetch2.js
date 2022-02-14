<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
<script>
  let url = "https://reqres.in/api/users?page=2";
  async function getproducts() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    appendProducts(data);
  }

  function appendProducts(products) {}

  getproducts();
</script>

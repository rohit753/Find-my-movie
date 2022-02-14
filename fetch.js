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
  fetch(url)
    .then(function (response) {
      return response.json(); //returning a promise
    })
    .then(function (res) {
      console.log(res);
      const data = res;
      appendProducts(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  function appendProducts(array) {
    array.forEach((el) => {});
  }
</script>

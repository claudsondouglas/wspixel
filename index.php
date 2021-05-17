<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teste do wspixel</title>
    <script src="./wspixel.js"></script>
</head>
<body>
    <pre style="background-color: #eee; margin-bottom: 1rem; padding: 1rem;"><?php 
        echo '<b style="color: #c22;font-size:18px;margin-bottom:10px;display:block">cookie já salvo</b>';
        if (isset($_COOKIE['wspixel'])) var_dump(json_decode($_COOKIE['wspixel'])); 
        else echo 'o cookie foi setado, mas como o servidor vem antes do front, carregue novamente a página';
    ?></pre>
</body>
</html>
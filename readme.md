# wsPixel 1.0.0
A ideia principal foi criar um módulo javascript que seja fácilmente integrado nos sites e que guardem as informações de campanhas de marketing em cookies por 365 dias.


### Insira na tag `<head>`
```html
<head>
  <script src="wspixel.js"></script>
  <script>
      wspixel.init('site');
  </script>
</head>
```

### se você usa algum bundler como `webpack` etc

```javascript
const wspixel = require ('../../../wspixel/wspixel.module')
wspixel.init('site/blog')
```

### Na pagina de `processar a cotação` e salvar o lead
```php
/*
caso não tenha o cookie quer dizer que não passou pela página principal, redirecione pra ela.
*/
if (!isset($_COOKIE['wspixel'])) {
    header('location: /');
}

$utm_tags = $_COOKIE['wspixel'];

var_dump($utm_tags);
/*
object(stdClass)#1 (5) {
  ["utm_source"]=>
  string(10) "websocorro"
  ["utm_medium"]=>
  string(12) "landing_page"
  ["utm_campaign"]=>
  string(9) "teste_dev"
  ["utm_term"]=>
  string(2) "uu"
  ["utm_content"]=>
  string(4) "test"
}
*/
```
<?php $v = "1.0.0"; ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aventus Store</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/default.css?v=<?= $v ?>">
    <link rel="shortcut icon" href="/img/logo_fox.png?v=<?= $v ?>" type="image/png">
    <script src="/js/store.js?v=<?= $v ?>"></script>
    <script>
        var indexResource = Aventus.Converter.transform(JSON.parse(`<?= json_encode($indexResource) ?>`));
    </script>
</head>

<body>
    <as-main></as-main>
</body>

</html>
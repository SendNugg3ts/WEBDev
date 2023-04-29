<?php
     if(isset($_POST["download"])){
        $imgUrl = $_POST["download"];
        $ch = curl_init($imgUrl);
        curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
        $download= curl_exec($ch);
        curl_close($ch);
        header("Content-type: image/jpg");
        header('Content-Disposition: attachment; filename="thumbnail.jpg"');
        echo $download;

     }   
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Youtube Thumbnail Downloader</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
</head>
<body>
    <form action="<?php echo $_SERVER["PHP_SELF"]; ?>" method="post">
        <header>Download Thumbnail</header>
        <div class="url-input">
            <span class="title">Video Url:</span>
            <div class="field">
                <input type="text" placeholder="youtube.com" required>
                <input type="hidden" class="hidden-input">
            </div class="bottom-line"></div>
        <div class="preview-area">
            <img class="thumbnail"src="" alt="thumbnail">
            <i class="icon fas fa-cloud-download-alt"></i>
            <span>Preview</span>
        </div>
        <button class="download-btn" type="submit" name="download">Download</button>
    </form>
    <script src="script.js"></script>
</body>
</html>





function AddHeader() {
    var headerText = document.getElementById("header").value;
    var c = document.getElementById("image-box");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "black";
    ctx.font = "bold 15px Yrsa SemiBold";
    ctx.fillText(headerText, 150, 15);

    $('input').keyup(function() {
      context.clearRect(0, 0,  canvas.width,canvas.height);
      context.fillText($(this).val(), 150, 15);
   
    });
  }

  document.addEventListener("DOMContentLoaded", function()   {
    document.getElementById("header").addEventListener('keyup',function() {
      const value = document.getElementById("header").value
      document.getElementById('header-remove').innerHTML = value
    })

    document.getElementById("footer").addEventListener('keyup',function() {
      const value = document.getElementById("footer").value
      document.getElementById('footer-remove').innerHTML = value
    })

    document.getElementById("inputimage").addEventListener('change', function() {
        var img = new Image();
        img.onload = draw;
        img.onerror=failed;
        img.src = URL.createObjectURL(this.files[0]);
      });
    
      function draw() {
        var canvas = document.getElementById('image-box');
        canvas.width = this.width;
        canvas.height = this.height;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(this, 0,0);
      }  
      function failed(){
        console.error("the provided file couldn't beloaded as an image media");
      }
    });
     let fileInput = document.getElementById("file");
    var canvas = document.getElementById("image-box");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    console.log(document.getElementById("inputimage"))
    document.getElementById("file").addEventListener("change", function (event) {
      console.log("------ i ma in ")
      if (event.target.files) {
        let file = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function (e) {
          var image = new Image();
          image.src = e.target.result;
          image.onload = function (event) {
            var canvas = document.getElementById("image-box");
            var ctx = canvas.getContext("2d");
            ctx.fillStyle = "#FFFFFF";
            ctx.beginPath();
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;
            ctx.strokeRect(0, 20, canvas.width, 115);
            ctx.drawImage(image, 0, 20, canvas.width, 115);
          };
        };
      }
    });
    function Downloadimage() {
      var canvas = document.getElementById("image-box");
      console.log(canvas)
      var image = canvas.toDataURL().replace("image/png", "image/octet-stream");
      var DownloadLink = document.createElement("a");
      DownloadLink.download = "image-box.png";
      DownloadLink.href = image;
      DownloadLink.click();
    } 
    function AddFooter() {
        var footerText = document.getElementById("footer").value;
        var c = document.getElementById("image-box");
        var ctx = c.getContext("2d");
        ctx.fillStyle = "black";
        ctx.font = "bold 15px Yrsa SemiBold";
        ctx.fillText(footerText, 90,160);

        $('input').keyup(function() {
          context.clearRect(0, 0,  canvas.width,canvas.height);
          context.fillText($(this).val(), 40, 60);
       
        });
    }
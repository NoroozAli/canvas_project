function AddHeader() {
  var headerText = document.getElementById("header").value;
  var c = document.getElementById("image-box");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "Black";
  ctx.font = "bold 15px Yrsa SemiBold";
  const xh = document.getElementById ("hx-axis").value
  ctx.fillText(headerText, xh , 20);

  $('input').keyup(function() {
    context.clearRect(0, 0,  canvas.width,canvas.height);
    context.fillText($(this).val(), xh, 20);

  });
}

document.addEventListener("DOMContentLoaded", function()   {
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

      // $('input').keyup(function() {
      //   context.clearRect(0, 0,  canvas.width,canvas.height);
      //   context.fillText($(this).val(), xf);

      // });
    }
    function failed(){
      console.error("the provided file couldn't beloaded as an image media");
    }
  });
   let fileInput = document.getElementById("file");
  var canvas = document.getElementById("image-box");
  console.log(canvas)
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  console.log(document.getElementById("inputimage"))
  document.getElementById("file").addEventListener("change", function (event) {
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
      ctx.fillStyle = "pink";
      ctx.font = "bold 15px Yrsa SemiBold";
      const xf = document.getElementById ("fx-axis").value
      ctx.fillText(footerText, xf , 270);

      $('input').keyup(function() {
        context.clearRect(0, 0,  canvas.width,canvas.height);
        context.fillText($(this).val(), xf, 270);

      });
  }
  function Addcenter() {
    var footerText = document.getElementById("middle").value;
    var c = document.getElementById("image-box");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "green";
    ctx.font = "bold 15px Yrsa SemiBold";
    const mx = document.getElementById ("mx-axis").value
    ctx.fillText(footerText, mx , 130);

    $('input').keyup(function() {
      context.clearRect(0, 0,  canvas.width,canvas.height);
      context.fillText($(this).val(), mx, 130);

    });
  }


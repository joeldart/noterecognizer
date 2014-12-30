(function () {
    var svg = document.querySelectorAll(".drawing-surface svg")[0];
    var surface = new DrawingSurface(svg);
    surface.ondraw = function (e) {
      console.dir(e.rawPts);  
    };
}());
function DrawingSurface(svgNode){
    this.ondraw = function () { };
    var surface = this;
    
    var SVGNS = "http://www.w3.org/2000/svg";
    svgNode.addEventListener("mousedown", down);
    document.addEventListener("mousemove", move, true);
    document.addEventListener("mouseup", up, true);
    svgNode.addEventListener("touchstart", function (e) { down(e.touches[0]); });
    document.addEventListener("touchmove", function (e) { move(e.touches[0]); });
    document.addEventListener("touchend", function (e) { up(e.changedTouches[0]); });
    var isDrawing = false;
    var lastPt;
    var tempSegments = [];
    var pts = [];
    
    function down(e) {
        lastPt = eToPt(e);
        isDrawing = true;
        pts = [lastPt];
    }
    
    function move(e) {
        if (isDrawing) {
            var currPt = eToPt(e);
            var seg = createSegment([lastPt, currPt]);
            svgNode.appendChild(seg);
            tempSegments.push(seg);
            pts.push(currPt);
            lastPt = currPt;
        }
    }
    
    function up(e) {
        if (isDrawing) {
            //clear list
            tempSegments.forEach(function (seg) { svgNode.removeChild(seg); });
            tempSegments = [];
            //create segment from pts
            pts.push(eToPt(e));
            var finalSeg = createSegment(pts);
            //add segment to svg
            svgNode.appendChild(finalSeg);
            surface.ondraw && surface.ondraw({
                newElem: finalSeg, 
                rawPts: pts
            });
        }
        //reset state machine
        isDrawing = false;
        lastPt = null;
    }
    
    function createSegment(pts) {
        var node = document.createElementNS(SVGNS, "path");
        //stroke-width: 3, stroke-opacity: 1 stroke-linecap="round" 
        //stroke-linejoin="round" fill="none" stroke="black" fill-opacity="1"
        node.setAttributeNS(null, "stroke-width", 3);
        node.setAttributeNS(null, "stroke-opacity", 1);
        node.setAttributeNS(null, "stroke-linecap", "round");
        node.setAttributeNS(null, "stroke-linejoin", "round");
        node.setAttributeNS(null, "fill", "none");
        node.setAttributeNS(null, "stroke", "black");
        node.setAttributeNS(null, "fill-opacity", 1);
        
        node.setAttributeNS(null, "d", "M " + pts.map(function (pt) {
            return pt.x + "," + pt.y;
        }).join(" L"));
        return node;
    }
    
    function eToPt(e) {
        return {
            x: e.pageX,
            y: e.pageY
        };
    }
}
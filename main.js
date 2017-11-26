var img = document.createElement("img");
img.src = 'img/sk.png';

window.onload = function() {
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var tracker = new tracking.ObjectTracker('face');
    tracker.setInitialScale(4.7);
    tracker.setStepSize(0.5);
    tracker.setEdgesDensity(0.1);
    tracking.track('#video', tracker, { camera: true });
    tracker.on('track', function(event) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        event.data.forEach(function(rect) {
      	// set scale and postion
       	context.drawImage(img, rect.x +1, rect.y -28, rect.width * 1.1, rect.height * 1.5)

        });
      });
      var gui = new dat.GUI();
      gui.add(tracker, 'edgesDensity', 0.1, 0.5).step(0.01);
      gui.add(tracker, 'initialScale', 1.0, 10.0).step(0.1);
      gui.add(tracker, 'stepSize', 1, 5).step(0.1);
    };


var scene = document.querySelector('a-scene');
    var triangle = document.createElement('a-triangle');
    triangle.setAttribute('color', '#FF9500');
    triangle.setAttribute('height', '27');
    triangle.setAttribute('radius', '12.75');
    triangle.setAttribute('position', '3 1 0');
    scene.appendChild(triangle);
    var t = 0;
    function render() {
      t += 0.01;
      requestAnimationFrame(render);
      triangle.setAttribute('position', '3 '+(Math.sin(t*2)+1)+' 0');
    }
    render();

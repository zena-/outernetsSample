var img = document.createElement("img");
img.src = 'img/sk.png';

// var imgg = document.createElement("imgg");
// imgg.src = 'img/birds.png';

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
        	// context.drawImage(img, rect.x -70, rect.y +50, rect.width * 2.2, rect.height * 1)
        	context.drawImage(img, rect.x +1, rect.y -28, rect.width * 1.1, rect.height * 1.5)
        	

          // context.strokeStyle = '#a64ceb';
          // context.strokeRect(rect.x, rect.y, rect.width, rect.height);
          // context.font = '11px Helvetica';
          // context.fillStyle = "#fff";
          // context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
          // context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
        });
      });
      var gui = new dat.GUI();
      gui.add(tracker, 'edgesDensity', 0.1, 0.5).step(0.01);
      gui.add(tracker, 'initialScale', 1.0, 10.0).step(0.1);
      gui.add(tracker, 'stepSize', 1, 5).step(0.1);
    };

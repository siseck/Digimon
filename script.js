// Generated by CoffeeScript 1.3.3
(function() {
  var Digitama, Zurumon, baseX, baseY, canvas, ctx, monster,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  canvas = document.getElementById('sample');

  ctx = canvas.getContext('2d');

  baseX = 0;

  baseY = 0;

  Digitama = (function() {
    var drawing, hungry, vitality;

    function Digitama() {
      this.name = "digitama";
      this.waitingDots = [[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0], [0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0], [0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0], [0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0], [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0], [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0], [0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0], [0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0], [0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0], [0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0], [0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0], [0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]]];
      /*
      		@drawing = (dots) ->
      			ctx.clearRect baseX, baseY, 175, 175
      			x = baseX
      			y = baseY
      			i = 0
      			while i < 16
      				j = 0
      				while j < 16
      					ctx.fillRect x, y, 10, 10  if dots[i][j] is 1
      					x += 11
      					j++
      				x = baseX
      				y += 11
      				i++
      */

    }

    hungry = 4;

    vitality = 4;

    /*
    	wait: -> 
    		console.log "#{@name} moving!"
    	eat: ->
    		hungry -= 1
    		console.log "#{hungry}"
    	ドットをcanvas要素に描く
    */


    drawing = function(dots) {
      var i, j, x, y, _i, _j, _results;
      ctx.clearRect(baseX, baseY, 175, 175);
      x = baseX;
      y = baseY;
      _results = [];
      for (i = _i = 0; _i < 16; i = ++_i) {
        for (j = _j = 0; _j < 16; j = ++_j) {
          if (dots[i][j] === 1) {
            ctx.fillRect(x, y, 10, 10);
          }
          x += 11;
        }
        x = baseX;
        _results.push(y += 11);
      }
      return _results;
    };

    Digitama.prototype.wait = function() {
      var frame;
      frame = 1;
      console.log(this.waitingDots);
      /*
      		setInterval (->
      			frame++
      		), 1000
      */

      return setInterval((function(waitingDots) {
        this.waitingDots = waitingDots;
        return function() {
          drawing(this.waitingDots[frame % 2]);
          return frame++;
        };
      })(this.waitingDots), 1000);
    };

    return Digitama;

  })();

  Zurumon = (function(_super) {

    __extends(Zurumon, _super);

    function Zurumon() {
      this.name = "zurumon";
    }

    return Zurumon;

  })(Digitama);

  monster = new Digitama;

  monster.wait();

  /*
  # 1秒ごとに待機状態を入れ替える
  frame = 1
  setInterval (->
  		console.log monster.waitingDots[frame%2]
  		monster.drawing monster.waitingDots[frame%2]
  		frame++
  ), 1000
  */


}).call(this);

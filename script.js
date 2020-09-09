x = 50;
y = 50;

xspeed = 2;
yspeed = 3;

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1260, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('black');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  
    if (x < 105 && x >= 0) {
        fill(255, 0, 0);
    }

    if (x < 210 && x >= 105) {
        fill(255, 128, 0);
    }
    if (x < 315 && x >= 210) {
        fill(255, 255, 0);
    }
    if (x < 420 && x >= 315) {
        fill(128, 255, 0);
    }
    if (x < 525 && x >= 420) {
        fill(0, 255, 0);
    }
    if (x < 630 && x >= 525) {
        fill(0, 255, 128);
    }
    if (x < 735 && x >= 630) {
        fill(0, 255, 255);
    }
    if (x < 840 && x >= 735) {
        fill(0, 128, 255);
    }
    if (x < 945 && x >= 840) {
        fill(0, 0, 255);
    }
    if (x < 1050 && x >= 945) {
        fill(127, 0, 255);
    }
    if (x < 1155 && x >= 1050) {
        fill(255, 0, 255);
    }
    if (x < 1260 && x >= 1155) {
        fill(255, 0, 127);
    }
    if (x >= 1260) {
        fill(0, 0, 0);
    }
  // teken een cirkel
  ellipse(x,y,80,80);

  if (y <= 0 || y >= 720) {
      yspeed = -yspeed;
  }

  if (x <= 0 || x >= 1280) {
      xspeed = -xspeed
  }

  x = x + xspeed;
  y = y + yspeed;
  
  
}
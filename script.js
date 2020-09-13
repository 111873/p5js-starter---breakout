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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  
    /* if (x < 105 && x >= 0) {
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
    } */

    fill(255, 0 ,0);
    background(0,0,0);

    for(i = 0; i < 5; i++) {
        ellipse(xi, yxi, 80, 80);

        if (yi <= 0 || yi >= 720) {
            yspeed = -yspeed;
         }

        if (xi <= 0 || xi >= 1280) {
            xspeed = -xspeed;
        }

        xi = xi+ xspeed;
        yi = yi + yspeed;
    }

  
  
  
}
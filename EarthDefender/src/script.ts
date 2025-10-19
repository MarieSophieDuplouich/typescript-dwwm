// // let gameName : string = "EarthDefender!";
// // console.log(gameName);

// // const CANVAS_WIDTH = 900;
// // const CANVAS_HEIGHT = 500;

// // const canvas = document.querySelector("canvas");
// // const context = canvas.getContext("2d");

// // canvas.width = CANVAS_WIDTH;
// // canvas.height = CANVAS_HEIGHT;

// // context.fillStyle = "#141414";  // HexaDecimal Gris foncé
// // context.fillRect(
// //     0,0,            // [x,y] supérieur gauche
// //     CANVAS_WIDTH,CANVAS_HEIGHT // [x,y] inférieur droit
// // );

// // context.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);

// window.onload = main;

// // function main(){
// //     const CANVAS_WIDTH = 900;
// //     const CANVAS_HEIGHT = 500;

// //     const canvas = document.querySelector("canvas");
// //     const context = canvas.getContext("2d");

// //     canvas.width = CANVAS_WIDTH;
// //     canvas.height = CANVAS_HEIGHT;

// //     context.fillStyle = "#141414";  // HexaDecimal Gris foncé
// //     context.fillRect(
// //         0,0,            // [x,y] supérieur gauche
// //         CANVAS_WIDTH,CANVAS_HEIGHT // [x,y] inférieur droit
// //     );

// //     const image : HTMLImageElement = document.querySelector("img.alien");
// //     let position = {
// //         x : 0,
// //         y : 0
// //     };
// //     context.drawImage(
// //         image,
// //         position.x,  
// //         position.y,
// //         image.width,
// //         image.height
// //     );
// // }


// window.onload = main;

// function main(){
//     const CANVAS_WIDTH = 900;
// const CANVAS_HEIGHT = 500;

// const canvas = document.querySelector("canvas");
// const context = canvas.getContext("2d");

// canvas.width = CANVAS_WIDTH;
// canvas.height = CANVAS_HEIGHT;

// const alienImg : HTMLImageElement = document.querySelector("img.alien");

// let alienPos = {
//     x : 0,
//     y : 0
// };

// const playerImg : HTMLImageElement = document.querySelector("img.player");

//     const playerPos = {
//     x : CANVAS_WIDTH/2,
//     y : CANVAS_HEIGHT - 100
// };
//   let direction = 0;
// setInterval(()=>{
//     // Clear context
//     context.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
//     // Draw back background color
//     context.fillStyle = "#141414";
//     context.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);

//     // Draw alien
//     context.drawImage(
//         alienImg,
//         alienPos.x,  
//         alienPos.y,
//         alienImg.width,
//         alienImg.height
//     );

//     context.drawImage(
//         playerImg,
//         playerPos.x,  
//         playerPos.y,
//         playerImg.width,
//         playerImg.height
//     );
//      // Move the alien for the next loop
//     alienPos.y+=1;
// playerPos.x+=10*direction;   

//    // Immobile
// },10); 
// }

// function main() {
//     const CANVAS_WIDTH = 900;
//     const CANVAS_HEIGHT = 500;
//     const canvas = document.querySelector("canvas");
//     canvas.width = CANVAS_WIDTH;
//     canvas.height = CANVAS_HEIGHT;
//     const alienImg: HTMLImageElement = document.querySelector("img.alien");



//     let alienPos = {
//         x: 0,
//         y: 0
//     };
//     // Typescript permet de créer des types à partir des types primitif du langage JavaScript.
//     type Direction = 0 | 1 | -1;
//     let direction: Direction = 0;
//     // Le type Direction ne peut avoir comme valeurs exlusivement 0, 1 ou -1.
//     const context = canvas.getContext("2d");

//     const playerImg: HTMLImageElement = document.querySelector("img.player");
//     const playerPos = {
//         x: CANVAS_WIDTH / 2,
//         y: CANVAS_HEIGHT - 100
//     };

//     const nbAliens: number = 10;
//     const alienImage: HTMLImageElement = document.querySelector("img.alien");

//     const aliens: GameObject[] = [];

//     const starImage: HTMLImageElement = document.querySelector("img.star");

//     const groundImg: HTMLImageElement = document.querySelector("img.sol");

//     const ground = new GameObject(
//         groundImg,
//         { x: 0, y: CANVAS_HEIGHT - groundImg.height }
//     );

//     const missileImg: HTMLImageElement = document.querySelector("img.missile");
//     const missiles: GameObject[] = [];

//     // Game event loop -------------------------//
//     setInterval(() => {
//         // Clear context
//         context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
//         // Draw back background color
//         context.fillStyle = "#141414";
//         context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);


//         // Dessiner le sol
//         context.drawImage(
//             ground.image,
//             ground.position.x,
//             ground.position.y,
//             ground.image.width,
//             ground.image.height
//         );
//         /* Draw and move alien
//         * ...
//         */

//         // Draw and move Player
//         context.drawImage(
//             playerImg,
//             playerPos.x,
//             playerPos.y,
//             playerImg.width,
//             playerImg.height
//         );

//         // Move the player depending on the direction pressed by 
//         // the player
//         // Draw alien
//         context.drawImage(
//             alienImg,
//             alienPos.x,
//             alienPos.y,
//             alienImg.width,
//             alienImg.height
//         );

//         const alienPosition1 = {
//             x: Math.random() * 500,
//             y: 0
//         };

//         context.drawImage(
//             alienImg,
//             alienPosition1.x,
//             alienPosition1.y,
//             alienImg.width,
//             alienImg.height
//         );

//         const alienPosition2 = {
//             x: Math.random() * 500,
//             y: 0
//         };

//         context.drawImage(
//             alienImg,
//             alienPosition2.x,
//             alienPosition2.y,
//             alienImg.width,
//             alienImg.height
//         );

//         const alienPosition3 = {
//             x: Math.random() * 500,
//             y: 0
//         };

//         context.drawImage(
//             alienImg,
//             alienPosition3.x,
//             alienPosition3.y,
//             alienImg.width,
//             alienImg.height
//         );

//         const alienPosition4 = {
//             x: Math.random() * 500,
//             y: 0
//         };
//         context.drawImage(
//             alienImg,
//             alienPosition4.x,
//             alienPosition4.y,
//             alienImg.width,
//             alienImg.height
//         );

//         for (let i = 0; i < 50; i++) {
//             context.drawImage(
//                 starImage,
//                 Math.random() * CANVAS_WIDTH,
//                 Math.random() * CANVAS_HEIGHT,
//                 starImage.width,
//                 starImage.height
//             );
//         }
//         for (const alien of aliens) {
//             context.drawImage(
//                 alien.image,
//                 alien.position.x,
//                 alien.position.y,
//                 alien.image.width,
//                 alien.image.height
//             );
//         }
//         alienPos.y += 1;
//         playerPos.x += 10 * direction;
//     }, 10);

//     // Input Handling--------------------------------//
//     // Key Down
//     document.addEventListener("keydown", (event) => {
//         switch (event.key) {
//             // Go right
//             case "d":
//             case "D":
//                 direction = 1;
//                 break;
//             // Go left
//             case "q":
//             case "Q":
//                 direction = -1;
//                 break;
//             default:
//                 break;
//         }
//     });

//     // Key Released
//     document.addEventListener("keyup", (event) => {
//         switch (event.key) {
//             // Player Stops
//             case "d":
//             case "D":
//             case "q":
//             case "Q":
//                 direction = 0;
//                 break;

//             default:
//                 break;
//         }
//     });
// // Dessiner et déplacer les missiles
// for (const missile of missiles) {
//     missile.position.y -= 5; // Monte vers le haut
//     context.drawImage(
//         missile.image,
//         missile.position.x,
//         missile.position.y,
//         missile.image.width,
//         missile.image.height
//     );
// }

// //le missile qui se déplace avec le joueur
// document.addEventListener("keydown", (event) => {
//     switch (event.key) {
//         case " ":
//             // Crée un missile à la position du joueur
//             missiles.push(
//                 new GameObject(
//                     missileImg,
//                     {
//                         x: playerPos.x + playerImg.width / 2 - missileImg.width / 2,
//                         y: playerPos.y - missileImg.height
//                     }
//                 )
//             );
//             break;

//         case "d":
//         case "D":
//             direction = 1;
//             break;

//         case "q":
//         case "Q":
//             direction = -1;
//             break;
//     }
// });

// // --- CLASS GAMEOBJECT --- //
// class GameObject {
//     image: HTMLImageElement;
//     position: Position;
//     constructor(image: HTMLImageElement, position: Position) {
//         this.image = image;
//         this.position = position;
//     }
//     move() {
//         this.position.y += 1; // Par défaut, descend d’un pixel par frame
//     }
// }

// interface Position {
//     x: number;
//     y: number;
// }
// }
// --- CLASS GAMEOBJECT --- //
class GameObject {
    image: HTMLImageElement;
    position: Position;
    width: number;
    height: number;

    constructor(image: HTMLImageElement, position: Position) {
        this.image = image;
        this.position = position;
        this.width = image.width;
        this.height = image.height;
    }

    move(speed: number = 1) {
        this.position.y += speed; // Mouvement vertical par défaut
    }
}

interface Position {
    x: number;
    y: number;
}

// ---------------------------------------------------- //

window.onload = main;

function main() {
    const CANVAS_WIDTH = 900;
    const CANVAS_HEIGHT = 500;

    const canvas = document.querySelector("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d")!;
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    // --- Chargement des images --- //
    const alienImg: HTMLImageElement = document.querySelector("img.alien")!;
    const playerImg: HTMLImageElement = document.querySelector("img.player")!;
    const starImage: HTMLImageElement = document.querySelector("img.star")!;
    const groundImg: HTMLImageElement = document.querySelector("img.sol")!;
    const missileImg: HTMLImageElement = document.querySelector("img.missile")!;

    // --- Variables de jeu --- //
    type Direction = -1 | 0 | 1;
    let direction: Direction = 0;
    let gameOver = false;

    const playerPos = {
        x: CANVAS_WIDTH / 2 - playerImg.width / 2,
        y: CANVAS_HEIGHT - playerImg.height - 20
    };

    const ground = new GameObject(
        groundImg,
        { x: 0, y: CANVAS_HEIGHT - groundImg.height + 90 }

        // Je ne peux déplacer comme en css il fau faire ici le -50 pour déplacer le sol
    );

    const aliens: GameObject[] = [];
    const missiles: GameObject[] = [];

    // Génération initiale d’aliens
    const nbAliens = 8;
    for (let i = 0; i < nbAliens; i++) {
        aliens.push(new GameObject(alienImg, {
            x: Math.random() * (CANVAS_WIDTH - alienImg.width),
            y: Math.random() * -200
        }));
    }

    // Vies de la Terre
    let earthLives = 10;

    // --- Boucle de jeu --- //
    setInterval(() => {
        // Nettoyer le canvas
        context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        context.fillStyle = "#141414";
        context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        // Fond étoilé
        for (let i = 0; i < 30; i++) {
            context.drawImage(
                starImage,
                Math.random() * CANVAS_WIDTH,
                Math.random() * CANVAS_HEIGHT,
                starImage.width,
                starImage.height
            );
        }

        // Sol
        context.drawImage(
            ground.image,
            ground.position.x,
            ground.position.y,
            ground.image.width,
            ground.image.height
        );

        // Si plus de vies → afficher Game Over
        if (earthLives <= 0) {
            gameOver = true;
            context.fillStyle = "white";
            context.font = "bold 50px Arial";
            context.textAlign = "center";
            context.fillText("💀 GAME OVER 💀", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
            context.font = "24px Arial";
            context.fillText("Appuie sur F5 pour rejouer", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 50);
            return; // stoppe l’affichage
        }

        // Aliens
        for (let i = aliens.length - 1; i >= 0; i--) {
            const alien = aliens[i];
            alien.move(1); // Descente des aliens
            context.drawImage(
                alien.image,
                alien.position.x,
                alien.position.y,
                alien.image.width,
                alien.image.height
            );

            // Collision alien ↔ sol
            if (alien.position.y + alien.image.height >= ground.position.y) {
                earthLives = Math.max(0, earthLives - 1);
                alien.position.y = -alien.image.height;
                alien.position.x = Math.random() * (CANVAS_WIDTH - alien.image.width);
            }

            // Collision missile ↔ alien
            for (let j = missiles.length - 1; j >= 0; j--) {
                const missile = missiles[j];
                if (isColliding(missile, alien)) {
                    // Supprimer le missile et l’alien touché
                    missiles.splice(j, 1);
                    aliens.splice(i, 1);
                    // Recréer un nouvel alien
                    aliens.push(new GameObject(alienImg, {
                        x: Math.random() * (CANVAS_WIDTH - alienImg.width),
                        y: -alienImg.height
                    }));
                    break;
                }
            }
        }

        // Missiles
        for (let i = missiles.length - 1; i >= 0; i--) {
            const missile = missiles[i];
            missile.position.y -= 8;
            context.drawImage(
                missile.image,
                missile.position.x,
                missile.position.y,
                missile.image.width,
                missile.image.height
            );

            // Supprimer les missiles sortis du haut
            if (missile.position.y + missile.image.height < 0) {
                missiles.splice(i, 1);
            }
        }

        // Affichage des vies ("10 ❤️")
        context.fillStyle = "white";
        context.font = "24px Arial";
        context.textAlign = "center";
        context.fillText(`${earthLives} ❤️`, CANVAS_WIDTH / 2, ground.position.y - 20);

        // Joueur
        playerPos.x += 10 * direction;
        playerPos.x = Math.max(0, Math.min(playerPos.x, CANVAS_WIDTH - playerImg.width));

        context.drawImage(
            playerImg,
            playerPos.x,
            playerPos.y,
            playerImg.width,
            playerImg.height
        );

    }, 30);

    // --- Gestion des touches --- //
    document.addEventListener("keydown", (event) => {
        if (gameOver) return; // Bloque le contrôle après game over

        switch (event.key) {
            case "d":
            case "D":
                direction = 1;
                break;
            case "q":
            case "Q":
                direction = -1;
                break;
            case " ":
                // Tirer un missile
                missiles.push(new GameObject(
                    missileImg,
                    {
                        x: playerPos.x + playerImg.width / 2 - missileImg.width / 2,
                        y: playerPos.y - missileImg.height
                    }
                ));
                break;
        }
    });

    document.addEventListener("keyup", (event) => {
        if (["d", "D", "q", "Q"].includes(event.key)) {
            direction = 0;
        }
    });
}

// --- Détection de collision rectangle --- //
function isColliding(a: GameObject, b: GameObject): boolean {
    return (
        a.position.x < b.position.x + b.width &&
        a.position.x + a.width > b.position.x &&
        a.position.y < b.position.y + b.height &&
        a.position.y + a.height > b.position.y
    );
}

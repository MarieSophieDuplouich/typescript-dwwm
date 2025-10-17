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
window.onload = main;
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
function main() {
    var CANVAS_WIDTH = 900;
    var CANVAS_HEIGHT = 500;
    var canvas = document.querySelector("canvas");
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    var alienImg = document.querySelector("img.alien");
    var alienPos = {
        x: 0,
        y: 0
    };
    // Le type Direction ne peut avoir comme valeurs exlusivement 0, 1 ou -1.
    var context = canvas.getContext("2d");
    var playerImg = document.querySelector("img.player");
    var playerPos = {
        x: CANVAS_WIDTH / 2,
        y: CANVAS_HEIGHT - 100
    };
    var direction = 0;
    var starImage = document.querySelector("img.star");
    // Game event loop -------------------------//
    setInterval(function () {
        // Clear context
        context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        // Draw back background color
        context.fillStyle = "#141414";
        context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        /* Draw and move alien
        * ...
        */
        // Draw and move Player
        context.drawImage(playerImg, playerPos.x, playerPos.y, playerImg.width, playerImg.height);
        // Move the player depending on the direction pressed by 
        // the player
        // Draw alien
        context.drawImage(alienImg, alienPos.x, alienPos.y, alienImg.width, alienImg.height);
        var alienPosition1 = {
            x: Math.random() * 500,
            y: 0
        };
        context.drawImage(alienImg, alienPosition1.x, alienPosition1.y, alienImg.width, alienImg.height);
        var alienPosition2 = {
            x: Math.random() * 500,
            y: 0
        };
        context.drawImage(alienImg, alienPosition2.x, alienPosition2.y, alienImg.width, alienImg.height);
        var alienPosition3 = {
            x: Math.random() * 500,
            y: 0
        };
        context.drawImage(alienImg, alienPosition3.x, alienPosition3.y, alienImg.width, alienImg.height);
        var alienPosition4 = {
            x: Math.random() * 500,
            y: 0
        };
        context.drawImage(alienImg, alienPosition4.x, alienPosition4.y, alienImg.width, alienImg.height);
        for (var i = 0; i < 50; i++) {
            context.drawImage(starImage, Math.random() * CANVAS_WIDTH, Math.random() * CANVAS_HEIGHT, starImage.width, starImage.height);
        }
        alienPos.y += 1;
        playerPos.x += 10 * direction;
    }, 10);
    // Input Handling--------------------------------//
    // Key Down
    document.addEventListener("keydown", function (event) {
        switch (event.key) {
            // Go right
            case "d":
            case "D":
                direction = 1;
                break;
            // Go left
            case "q":
            case "Q":
                direction = -1;
                break;
            default:
                break;
        }
    });
    // Key Released
    document.addEventListener("keyup", function (event) {
        switch (event.key) {
            // Player Stops
            case "d":
            case "D":
            case "q":
            case "Q":
                direction = 0;
                break;
            default:
                break;
        }
    });
}

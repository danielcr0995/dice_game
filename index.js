var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;



var imagedice1=document.querySelector(".img1");
var imagedice2=document.querySelector(".img2");

var title=document.querySelector("h1")

if(randomNumber1>randomNumber2){
    title.innerText="Player 1 Wins!";
}else if(randomNumber1<randomNumber2){
    title.innerText="Player 2 Wins!";
}else{
    title.innerText="Draw!";
}

var imageName1=newimgName(randomNumber1);
var imageName2=newimgName(randomNumber2);
// if (randomNumber1===1){
//     imageName="dice1.png";
// }else if (randomNumber1===2){
//     imageName="dice2.png";
// }else if (randomNumber1===3){
//     imageName="dice3.png";
// }else if (randomNumber1===4){
//     imageName="dice4.png";
// }else if (randomNumber1===5){
//     imageName="dice5.png";
// }else{
//     imageName="dice6.png";
// }

var newimg1="./images/"+imageName1;
var newimg2="./images/"+imageName2;

var newDice1=imagedice1.setAttribute("src", newimg1);
var newDice1=imagedice2.setAttribute("src", newimg2);

if(randomNumber1>randomNumber2){
    newTitle="Player 1 Wins!";
}else if(randomNumber1<randomNumber2){
    newTitle="Player 2 Wins!";
}else{
    newTitle="Draw!";
}



function newimgName(randomNumber){
    if (randomNumber===1){
        imageName="dice1.png";
    }else if (randomNumber===2){
        imageName="dice2.png";
    }else if (randomNumber===3){
        imageName="dice3.png";
    }else if (randomNumber===4){
        imageName="dice4.png";
    }else if (randomNumber===5){
        imageName="dice5.png";
    }else{
        imageName="dice6.png";
    }
    return imageName;
}
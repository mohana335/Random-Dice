var btnClick = document.querySelector("button");

btnClick.addEventListener("click", function(){

    //random image select for player 1
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var imgSource1 = "images/dice" +randomNumber1+ ".png";
    document.querySelector(".img1").setAttribute("src" , imgSource1);
    
    //random image select for player 1
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var imgSource2 = "images/dice" +randomNumber2+ ".png";
    document.querySelector(".img2").setAttribute("src", imgSource2);

    var heading = document.querySelector("h1");

    if(randomNumber1 > randomNumber2)
    {
        heading.innerHTML = "Player 1 wins!";
    }
    else if(randomNumber1 < randomNumber2)
    {
        heading.innerHTML = "Player 2 wins!";
    }
    else
    {
        heading.innerHTML = "Match draw!";
    }
})




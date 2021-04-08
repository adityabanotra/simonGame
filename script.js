// $('.button').click(function(){
   
//     this.style.transform="scale(1.1)";
//     console.log(this.id);
//     setTimeout(function(){ $(".button").css("transform","scale(1)"); } , 150);
    
// })
var f=0;
var level =0;
var seq=[];

function nextSequence(){
    
    level++;
    var board = "Level "+level;
    $('#board').text(board);
    
    // console.log(board);
    var randomNumber= Math.floor(Math.random()*4);

    var color=["red", "blue" ,"green", "yellow"];

    seq.push(color[randomNumber]);

    // console.log(seq);

    var box="#"+color[randomNumber];
    var au="a"+color[randomNumber];
    // console.log(au);
    var aud= document.getElementById(au);
    // console.log(aud);
    aud.currentTime=0;
    aud.play();
    $(box).css("transform","scale(1.1)"); 
    setTimeout(function(){ $(box).css("transform","scale(1)"); } , 150);

 
 }
 var i=0;

     i=0;
        $('.button').click(function (){
   
         if(this.id!=seq[i])
         {
            level=0;
            i=0;
            f=0;
            seq = [];
            var audio = new Audio("sounds/wrong.mp3");
            audio.play();
            $('#board').text("Game Over");
            setTimeout(function(){ $('#board').text("Press 'A' to start"); } , 2000);
            return;
        }
        var auu="a"+this.id;
        var audd= document.getElementById(auu);
   
        audd.currentTime=0;
        audd.play();
        i++; 
        console.log("i", i);
        console.log("lev",level);

        if(i==level)
        {
            i=0;
            setTimeout(function(){nextSequence() } , 1000);
        
        }
        });

        if(i>=level&&f)
        {
            i=0;
            setTimeout(function(){nextSequence() } , 1000);
        }


        if(!f)
        {
            window.addEventListener('keydown', function(key){
            if(key.keyCode==65)
            {
                nextSequence();
                f=1;
            }
            });

            $('#board').click(function(){
                nextSequence();
                f=1; 
            })
        }

  
 


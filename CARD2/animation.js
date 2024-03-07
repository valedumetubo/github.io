.container{
    background-color: #ffff;
}


header{
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 50px;
    text-align: center;
    font-family: "Zen Maru Gothic", serif;
    font-weight: 700;
    font-style: normal;
    letter-spacing: 5px;
    color: #322f2f;
}    

footer{
    margin: 0 auto;
    padding-top: 60px;
    padding-bottom: 50px;
    text-align: center;
    font-family: "Zen Maru Gothic", serif;
    font-weight: 300;
    font-size: small;
    font-style: normal;
    letter-spacing: 3px;
    color: #322f2f;
}

.card{
    margin: 0 auto;
    box-shadow: #efebe0 0 0 5px 5px; 
    width: 300px;
    height: 100px;
    text-align: center;
    border-left: #efebe0 solid 10px;
    border:#efebe0 solid 1px;
    padding: 40px;
    background-color: #efebe0;
    font-family: "Zen Maru Gothic", serif;
    font-weight: 500;
    font-style: normal;  
    letter-spacing: 1px;
}



a {
    text-decoration: none;
    color:#322f2f;
  }
  
a:active{
    color: #f7c3bf;
}
.card + .card{
    margin-top: 3rem;
}


/* Animation
/*------------------------------------------------------------------*/

.fadeInTrigger{
    opacity: 0;
}

.fadeIn{
    animation-name: fadeInAnime;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    opacity: 0;
}

@keyframes fadeInAnime{
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}

// reset
document.getElementById("reset").onclick = function(e) {
    document.getElementById("input").value = "";
    document.getElementById("triangle").style.transform = "scale(1)";
    document.getElementById("imgQuestion").style.display = "flex";
    document.getElementById("messageOut").style.display = "none";

}

// ask
// let buttonOff = document.getElementById("btn");
// let resetOff = document.getElementById("reset");
// let inputOff = document.getElementById("input");

// let modalWindow = document.getElementById("modal"); // modal window

document.getElementById("btn").onclick = function (e) {

    // buttonOff.style.display = "none";
    // resetOff.style.display = "none";
    // inputOff.style.display = "none";

    // modalWindow.style.display = "flex"; // modal window

    document.getElementById("triangle").style.transform = "scale(2) rotate(360deg)";
      document.getElementById("imgQuestion").style.display = "none";
    document.getElementById("messageOut").style.display = "flex";

    let mediaTriangle = window.matchMedia("(max-width:420px)");
        if (mediaTriangle.matches) {
            document.getElementById("triangle").style.transform = "scale(1.5) rotate(360deg)";
        };
    
    let mediaTriangleTablet = window.matchMedia("(max-width:720px)");
        if (mediaTriangleTablet.matches) {
            document.getElementById("triangle").style.transform = "scale(1.4) rotate(360deg)";
        }

  
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let message;
  
    switch (true) {
        case (randomNumber < 5):
        message = "It is certain (Безперечно)";
        break;
        case (randomNumber < 10):
        message = "It is decidedly so (Вирішено)";
        break;
        case (randomNumber < 15):
        message = "Without a doubt (Ніяких сумнівів)";
        break;
        case (randomNumber < 20):
        message = "Yes — definitely (Безумовно так)";
        break;
        case (randomNumber < 25):
        message = "You may rely on it (Можеш бути впевнений у цьому)";
        break;
        case (randomNumber < 30):
        message = "As I see it, yes (Мені здається так)";
        break;
        case (randomNumber < 35):
        message = "Most likely (Ймовірніше за все)";
        break;
        case (randomNumber < 40):
        message = "Outlook good (Хороші перспективи)";
        break;
        case (randomNumber < 45):
        message = "Signs point to yes (Знаки кажуть - так)";
        break;
        case (randomNumber < 50):
        message = "Yes (Так)";
        break;
        case (randomNumber < 55):
        message = "Reply hazy, try again (Поки не ясно, спробуй знову)";
        break;
        case (randomNumber < 60):
        message = "Ask again later (Запитай пізніше)";
        break;
        case (randomNumber < 65):
        message = "Better not tell you now (Краще не розповідати)";
        break;
        case (randomNumber < 70):
        message = "Cannot predict now (Зараз не можна передбачити)";
        break;
        case (randomNumber < 75):
        message = "Concentrate and ask again (Сконцентруйся і спитай знову)";
        break;
        case (randomNumber < 80):
        message = "Don’t count on it (Навіть не думай)";
        break;
        case (randomNumber < 85):
        message = "My reply is no (Моя відповідь ні)";
        break;
        case (randomNumber < 90):
        message = "My sources say no (За моїми даними – «ні»)";
        break;
        case (randomNumber < 95):
        message = "Outlook not so good (Перспективи не дуже добрі)";
        break;
        case (randomNumber < 100):
        message = "Very doubtful (Дуже сумнівно)";
        break;
    }
  
    document.getElementById("messageOut").innerHTML = message;  
    // alert(message);
};



//modal
    // document.getElementById("again-button").onclick = function(e) {
    //     modalWindow.style.display = "none";
    //     buttonOff.style.display = "flex";
    //     resetOff.style.display = "flex";
    //     inputOff.style.display = "flex";
    // }


// scale 








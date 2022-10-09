window.addEventListener("DOMContentLoaded", function () {
    let answer = document.getElementById("answer");
    let price = document.getElementById("price");
    let count = document.getElementById("count");
    let b = document.getElementById("calculate");
    let k = 0;
    b.addEventListener("click", function () {
        let r = new RegExp(/^\d+$/);
        if (r.test(price.value) && r.test(count.value)) {
            answer.innerHTML = "Стоимость: " + price.value * count.value;
            k = 0;
        } else {
            answer.innerHTML = "<div class='bg-danger'> Проверьте свой ввод &#129300;</div>";
            if (k > 149) {
                answer.innerHTML += "<p> Ок, ты выиграл. Держи <a href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\">ссылку<a>.</p>";
            }
            else if (k > 99) {
                answer.innerHTML += "<p>" +  k + " тыканий. Весело хоть?</p>";
            }
            else if (k > 49) {
                answer.innerHTML += "<p>" +  k + " тыканий. Эм..... ну ладно</p>";
            }
            else if (k > 4) {
                answer.innerHTML += "<p>" +  k + " тыканий. Так держать! Уверен, что они помогут?</p>";
            }
            k++;
        }
    });
});
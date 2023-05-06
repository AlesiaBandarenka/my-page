window.addEventListener('load', function(){
alert("Привет! Меня зовут Олеся и вы на моей страничке)");
});

function startQuiz() {
let question = prompt('Сколько тебе лет?', 100);
if (question <= 5) {
    alert("Малыш, не сиди за компьютером!")
} else if (question <= 15) {
    alert("Ты так молод!")
}  else if (question > 18) {
    alert("У тебя замечательный возраст!")
} else if (question > 30) {
    alert("Ты в самом расцвете сил!")
} else if (question > 75) {
    alert("Ну ты древний!")
}
}

let randomArray = ["Позаниматься йогой", 
                    "Помедитировать",   
                    "Сходить на массаж", 
                    "Повышивать", 
                    "Почитать"]; 

function randomPhrase() {
    let randomAction = Math.floor(Math.random() * randomArray.length);
    alert(randomArray[randomAction]);
};
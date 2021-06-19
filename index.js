function refresh(){
    window.location.reload();
}


function getName(){


    var questionBank = [
        {
            question: "Q.1 World's largest desert is ?",
            a: "Thar",
            b: "Sahara",
            c: "Kalahari",
            d: "Sonoran",
            ans: "opt2"
        
        },
        {
            question: "Q.2 Mount Everest is located in ?",
            a: "India",
            b: "China",
            c: "France",
            d: "Nepal",
            ans: "opt4"
        
        },
        {
            question: "Q.3 Who is the only Indian batsmen to get no.1 ICC ranking in all formats ?",
            a: "MS Dhoni",
            b: "Rohit Sharma",
            c: "Virat Kohli",
            d: "Sachin tendulkar",
            ans: "opt3"
        
        },
        {
            question: "Q.4 Which country is known as the land of rising sun ?",
            a: "Finland",
            b: "Sweden",
            c: "Norway",
            d: "Japan",
            ans: "opt4"
        
        },
        {
            question: "Q.5 Where is the capital of Turkey ?",
            a: "Istanbul",
            b: "Ankara",
            c: "Baku",
            d: "Cairo",
            ans: "opt2"
        
        },
        {
            question: "Q.6 The most common name in world is ?",
            a: "James",
            b: "Charlie",
            c: "Mohammad",
            d: "Toms",
            ans: "opt3"
        
        },
        {
            question: "Q.7 Which is the largest freshwater lake ?",
            a: "Lake Baikal",
            b: "Lake Superior",
            c: "Dal Lake",
            d: "Lake Kattegat",
            ans: "opt2"
        
        },
        {
            question: "Q.8 Who wrote the Tamil version of Ramayan  ?",
            a: "Venkat Pillai",
            b: "Kaamraja",
            c: "Kamban",
            d: "Chinnaswamy Iyengar",
            ans: "opt3"
        
        },
        {
            question: "Q.9 The first Muslim president of Indian national Congress ?",
            a: "Mohammad Ali Jinnah",
            b: "Rahimullah Sayani",
            c: "Maulana Abdul Kalam Azad",
            d: "Sheikh Syed Ur Rahamani",
            ans: "opt2"
        
        },
        {
            question: "Q.10 Who is the current president of Syria?",
            a: "Bashar Al Assad",
            b: "Naftali Bennet",
            c: "Yasser Arafat",
            d: "Mohammad Bin Rashid Al Makhtoum",
            ans: "opt1"
        
        }
        
        ];
        




























    let profile = document.getElementById('profile').value;
    const body = document.body;
    body.style.overflowY="scroll";

const submit = document.querySelector('.submit');
const question = document.querySelector('.question');
const option1 = document.querySelector("#option-1");
const option2 = document.querySelector("#option-2");
const option3 = document.querySelector("#option-3");
const option4 = document.querySelector("#option-4");

const showscore = document.querySelector("#score");

const options = document.querySelectorAll('.option');

let questionNo = 0;
let score = 0;

 function loader() {
  const index = questionBank[questionNo];
  question.innerHTML = index.question;
  option1.innerText = index.a;
  option2.innerText = index.b;
  option3.innerText = index.c;
  option4.innerText = index.d;
}

loader();


function getchoice(){
 let option;
 
 options.forEach((itemChecked) => {
     if(itemChecked.checked){
         option = itemChecked.id;
     }

 });
 
    return option;
};


function deselectAll(){
    options.forEach((itemChecked) => itemChecked.checked = false);
}



submit.addEventListener('click', ()=> {
    const choice = getchoice();

    console.log(choice);
  if(choice ===  questionBank[questionNo].ans ){
      score++;
  }
    questionNo++;

    deselectAll();

   if(questionNo < questionBank.length){
        loader();
   }else{
       showscore.innerHTML = `<h3>${profile} you scored ${score}/${questionBank.length} 🥳🥳</h3>`;

       showscore.classList.remove('scoreArea');
   }


});


}




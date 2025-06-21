const questions=[
  {
    question:"What is the name of the prison guard by Dementors?(Harry Potter)",
    answers:[
        { text:"Nurmengard  ",correct:false},
        { text:" Gringotts ",correct:false},
        { text:" Azkaban ",correct:true},
        { text:" Gordric's Hollow ",correct:false},    
      ],
      background:"harrypotterdementor.jpg"
  },
  {
    question:"What was the codename for the first successful nuclear test?(Oppenheimer)",
    answers:[
        { text:"Manhattan  ",correct:false},
        { text:" Trinity ",correct:true},
        { text:" Hiroshima ",correct:false},
        { text:" Enola",correct:false},    
      ],
      background:"openheimer.jpeg"

  },
  {
    question:"What is the name of Thor's hammer?(MARVAl MCU)",
    answers:[
        { text:"Mjolnir  ",correct:true},
        { text:" Strombreaker ",correct:false},
        { text:" Thunderstrike",correct:false},
        { text:" Asgard ",correct:false},    
      ]
  },
  {
    question:"Which is not an OSCAR awarded movie?",
    answers:[
        { text:"Life of Pi",correct:false},
        { text:" Titanic",correct:false},
        { text:"The Core",correct:true},
        { text:" Parasite",correct:false},    
      ]
  },
  {
    question:"Who is the director of AVTAR?",
    answers:[
        { text:"James Cameron",correct:true},
        { text:" Joss Whedon",correct:false},
        { text:"Anthony Russo ",correct:false},
        { text:" Christopher Nolan",correct:false},    
      ]
  },
  {
    question:"Who killed Bruce Waynes's parents in most versions of his origin ?(DC universe)",
    answers:[
        { text:"Lex Luthor ",correct:false},
        { text:" The Joker",correct:false},
        { text:" Joe Chill",correct:true},
        { text:" Harvey Dent",correct:false},    
      ]
  },
  {
    question:"What is the name of Jack Sparrow's ship ?(Pirates of Carbbean)",
    answers:[
        { text:"Queen Anne's Revenge ",correct:false},
        { text:" The black Pearl ",correct:true},
        { text:" The Flying Dutchman ",correct:false},
        { text:" The Karaken ",correct:false},    
      ]
  },
  {
    question:"What is the name of the metal found only in Wakanda?(Black Panther)",
    answers:[
        { text:"Adamantium ",correct:false},
        { text:" Palladium ",correct:false},
        { text:" Vibranium ",correct:true},
        { text:" Uru ",correct:false},    
      ]
  },
  {
    question:"Why did the Avengers split in Civil War ?(Captain America ❤️: Civil War)",
    answers:[
        { text:"Sokovia Accords  ",correct:true},
        { text:" Thanos' arrival",correct:false},
        { text:" Hydra infiltration ",correct:false},
        { text:" Disagreement over SHIELD ",correct:false},    
      ]
  },
  {
    question:"What song plays during the end credits of TITANIC ?(Titanic)",
    answers:[
        { text:"Some Where Over The Rainbow  ",correct:false},
        { text:" Endless Love ",correct:false},
        { text:" My Heart Will Go On",correct:true},
        { text:" I Will Always Love You",correct:false},    
      ]
  },{
    question:"What was the AI assasian in The creator?(  The creator [2023])",
    answers:[
        { text:"Alpha-0 ",correct:true},
        { text:" Ava ",correct:false},
        { text:" Maya ",correct:false},
        { text:" Alpha-7 ",correct:false},    
      ]
  },
  {
    question:"Who is the main villain?(Guardians of the Galaxy vol.3 [2023])",
    answers:[
        { text:"Ego",correct:false},
        { text:" The high evolutionary",correct:true},
        { text:" Ronan the Accuser ",correct:false},
        { text:" Thanos ",correct:false},    
      ]
  },
  {
    question:"How many players start the Squid Game in Season 1?(Squid game)",
    answers:[
        { text:"300  ",correct:false},
        { text:" 400",correct:false},
        { text:" 566 ",correct:false},
        { text:" 456 ",correct:true},    
      ]
  },
  {
    question:"What virus causes the Zombie outbreak in Resident Evil?(Resident Evil)",
    answers:[
        { text:"T-virus ",correct:true},
        { text:" X-virus",correct:false},
        { text:"Z-virus ",correct:false},
        { text:" Omega strain",correct:false},    
      ]
  },
  {
    question:"Which is NOT a book of William Shakesphere?",
    answers:[
        { text:"Hamlet ",correct:false},
        { text:"Macbeth ",correct:false},
        { text:"Romeo and Juliet ",correct:false},
        { text:" The Prelude",correct:true},
        ]
  },
  {
    question:"Who is he?",
    answers:[
        { text:"P.B. Selly ",correct:false},
        { text:" William Wordsworth",correct:true},
        { text:"John Keats ",correct:false},
        { text:" Robert Frost",correct:false},    
      ]
  },
  {
    question:" The important thing id not to stop questioning,curiocity has its own reason for existing.~ who told this?",
    
    answers:[
        { text:"Nicola Tesla ",correct:false},
        { text:" A.Einstein",correct:true},
        { text:"Gallelio Galilei ",correct:false},
        { text:" Charls Darwin",correct:false},    
      ]
  },
  {
    question:"What does 'Hawking-radiation' describes?",
    answers:[
        { text:"blackholes are not entirely black",correct:true},
        { text:" space and time are relative",correct:false},
        { text:"existance of multiuniverse ",correct:false},
        { text:" universe began from a point",correct:false},    
      ]
  },
  {
    question:"what is a higly magnetised ,rotating neutron star called?",
    answers:[
        { text:"Andromeda",correct:false},
        { text:" Orion",correct:false},
        { text:"Iota Aquilae",correct:false},
        { text:" Pulsar",correct:true},    
      ]
  },
  {
    question:"What is the darker center of the sun is called?",
    answers:[
        { text:"The Umbra",correct:true},
        { text:" The core",correct:false},
        { text:"Penumbra",correct:false},
        { text:"Epicenter ",correct:false},    
      ]
  },
  
];

//create an array of background images like the questions array//

const backgroundImages=[
  "url('harrypotterdementor.jpg')",
  "url('openheimer24.jpg')",
  "url('thorhammer2.jpg')",
  "url('hawking.jpg')",
  "url('avtar.jpg')",
  "url('dcuniverse.jpg')",
  "url('piratejksparrow.jpg')",
  "url('blackpanther.jpg')",
  "url('captainamerica.jpg')",
  "url('titanic.jpg')",
  "url('guardianofgalaxy.jpg')",
  "url('guardianofgalaxy.jpg')",
  "url('squidgame.jpg')",
  "url('residentyevil.jpg')",
  "url('shakesphere.jpg')",
  "url('wordsworth.jpg')",
  "url('einstein.jpg')",
  "url('hawking.jpg')",
  "url('star.jpg')",
  "url('the sun.jpg')",


];
const questionElement=document.getElementById("question");//a single mistake took alot of time to find out!! ID"question>>>questions//
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");
const previousButton=document.getElementById("previous-btn");
const skipButton=document.getElementById("skip-btn");

//hamburger toggle>>>>>>>>//
const hamburger=document.getElementById('hamburger');
const navMenu=document.getElementById('nav-menu');
const backdrop=document.getElementById('menu-backdrop');
hamburger.addEventListener('click',()=>{
  navMenu.classList.toggle('active');
  backdrop.classList.toggle('active');
});
//end the toggling of hamburger menu//

//to store the question index & score as they are changing//

let currentQuestionIndex=0;
let score=0;
let selected=false;
let results=Array(questions.length).fill("Not Answered");

 function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
 }

 
 function showQuestion(){
    resetState();
    selected=false;

    // to set back-ground image//

    document.body.style.backgroundImage=backgroundImages[currentQuestionIndex];

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;

    //to display the answers>>//

    currentQuestion.answers.forEach(answer => {
        const button =document.createElement("button");//to display the text which we have written in btn//
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild( button);//display answer in div//

        if(answer.correct){
          button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
        
    });
    //show hide button//
    const isLast=currentQuestionIndex===questions.length-1;
    const isFirst=currentQuestionIndex===0;
    previousButton.style.display=isFirst?"none":"inline-block";
    nextButton.innerHTML=isLast?"Submit":"Next";
    skipButton.style.display=isFirst?"none":"inline-block";
  

    //show "Previous" button after the 1st question//

 
//  //show the hide button//
  previousButton.style.display=currentQuestionIndex > 0?
 "inline-block":"none";
//  //show submit button on the last question//
//  nextButton.innerHTML=currentQuestionIndex===questions.length-1? "submit":"Next";
    nextButton.innerHTML=isLast?
    "Submit":"Next";
    skipButton.style.display="inline-block";
  }

//define the function//

 function resetState(){
  nextButton.style.display="none";
  while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
  }
 }

 function selectAnswer(e){
  const selectedBtn=e.target;
  const isCorrect=selectedBtn.dataset.correct==="true";     //check again!!//
  selected=true;

  if(isCorrect){
    selectedBtn.classList.add("correct");
    results[currentQuestionIndex]="correct";
    score++;

  }
  else {
    selectedBtn.classList.add("incorrect");
    results[currentQuestionIndex]="incorrect";
  }


  //to prevent from multiple click//
  Array.from(answerButton.children).forEach(button=>{
    if(button.dataset.correct ==="true"){
      button.classList.add("correct");

    }
    button.disabled=true;
   });
   nextButton.style.display="inline-block";
   skipButton.style.display="none";  //no skipping after selecting//
  }
  nextButton.addEventListener("click",()=>{
    if(nextButton.innerHTML==="Play Again"){
      startQuiz();
      return;
    }


    if(!selected && results[currentQuestionIndex]==="Not Answered"){
      results[currentQuestionIndex]="Not Answered";
    }

    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
      showQuestion();
    }
    else {
      showResults();
    }

  });
  previousButton.addEventListener("click",()=>{
    currentQuestionIndex--;
    showQuestion();
  });
  
  skipButton.addEventListener("click",()=>{
    if(results[currentQuestionIndex]==="Not Answered"){
      currentQuestionIndex++;
      if(currentQuestionIndex<questions.length){
        showQuestion();
      }
      else{
        showResults();
      }
    }

  });
  function showResults(){
    resetState();
    questionElement.innerHTML="Quiz Completed!✌️Did you Enjoy?";
    const total =questions.length;
    const correct=results.filter(r=> r ==="correct").length;
    const incorrect=results.filter(r=> r ==="incorrect").length;
    const notAnswered =results.filter(r=> r==="Not Answered").length;

    const resultSummary=`
    <p>   Total Questions:${total} </p>
     <p> Correct Answers:${correct}</p>  
    <p> Incorrect Answers:${incorrect}</p>
    <p> Not Answered:${notAnswered} </p> `;

    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
    //hide previous btn after the quiz ends//
    previousButton.style.display="none";
    skipButton.style.display="none";
  
  const resultDiv=
  document.createElement("div");
  resultDiv.innerHTML=resultSummary;
  questionElement.appendChild(resultDiv);

  }
  //start the quiz//
 startQuiz();


 



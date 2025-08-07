const input = document.getElementById('input1');
const inputfile = document.getElementById('input-file');
const container = document.getElementById('container');
const bulb = document.getElementById('bulb');
const container2 = document.getElementById('container-2');
const textcont = document.getElementById('textcont');
const uploadlabel = document.getElementById('uploadlabel');
const quest = document.getElementById('que');
const but1 = document.getElementById('but1');
const but2 = document.getElementById('but2');
const but3 = document.getElementById('but3');
const but4 = document.getElementById('but4');
const button = document.getElementById('next-button');
const qcount = document.getElementById('questionfor')
const catbtn = document.querySelectorAll('.cat-btn');
const na = document.getElementById('nam');
const container3 = document.getElementById('container-3');
const icon3 = document.getElementById('icon3');
const buttons = document.querySelectorAll('.button');
const container4 = document.getElementById('container-4');
const finalname = document.getElementById('final-name');
const pics = document.getElementById('pic');
const sc = document.getElementById('score');
const conv = document.getElementById('conv');
const para = document.getElementById('para');
const but12 = document.getElementById('but12');
const but13 = document.getElementById('but13');
const container5 = document.getElementById('container-5')
const pre = document.getElementById('pre');
const firstbox = document.getElementById('first-box');





let currentquestionindex = 0;
let currcat = '';
let score = 0;
const errorsound = new Audio('error.mp3');

let counted =1;




// quiz questions,options and answers

const quizQuestions = {
  mathematics: [
    { question: "What is 5 + 3?", options: ["6", "7", "8", "9"], answer: "8" },
    { question: "What is 9 - 4?", options: ["5", "6", "3", "4"], answer: "5" },
    { question: "What is 6 x 2?", options: ["12", "10", "8", "14"], answer: "12" },
    { question: "What is 12 ÷ 4?", options: ["2", "3", "4", "5"], answer: "3" },
    { question: "What is the square of 7?", options: ["49", "42", "36", "56"], answer: "49" },
    { question: "What is the cube of 3?", options: ["9", "27", "18", "21"], answer: "27" },
    { question: "What is 15 % 4?", options: ["3", "2", "1", "0"], answer: "3" },
    { question: "What is 0 divided by 5?", options: ["0", "5", "1", "Undefined"], answer: "0" },
    { question: "What is 100 - 99?", options: ["0", "2", "1", "5"], answer: "1" },
    { question: "What is 10 x 0?", options: ["0", "10", "1", "100"], answer: "0" }
  ],

  history: [
    { question: "Who was the first President of India?", options: ["Dr. Rajendra Prasad", "Jawaharlal Nehru", "Sardar Patel", "APJ Abdul Kalam"], answer: "Dr. Rajendra Prasad" },
    { question: "In which year did India gain independence?", options: ["1945", "1947", "1950", "1942"], answer: "1947" },
    { question: "Who was known as the 'Iron Man of India'?", options: ["Mahatma Gandhi", "Subhash Chandra Bose", "Sardar Patel", "Bhagat Singh"], answer: "Sardar Patel" },
    { question: "Who discovered the sea route to India?", options: ["Christopher Columbus", "Marco Polo", "Vasco da Gama", "Ferdinand Magellan"], answer: "Vasco da Gama" },
    { question: "Which empire built the Red Fort?", options: ["Maurya", "Mughal", "Gupta", "British"], answer: "Mughal" },
    { question: "Who was the founder of the Maurya Empire?", options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Harshavardhana"], answer: "Chandragupta Maurya" },
    { question: "Where did the Jallianwala Bagh massacre take place?", options: ["Delhi", "Amritsar", "Lahore", "Kolkata"], answer: "Amritsar" },
    { question: "Who gave the slogan 'Quit India'?", options: ["Subhash Chandra Bose", "Bal Gangadhar Tilak", "Jawaharlal Nehru", "Mahatma Gandhi"], answer: "Mahatma Gandhi" },
    { question: "Which war ended with the Treaty of Versailles?", options: ["World War I", "World War II", "Cold War", "Anglo-French War"], answer: "World War I" },
    { question: "Who was the last Governor-General of independent India?", options: ["Lord Mountbatten", "C. Rajagopalachari", "Warren Hastings", "Lord Curzon"], answer: "C. Rajagopalachari" }
  ],



  coding: [
    { question: "What does HTML stand for?", options: ["HyperText Markup Language", "Hyper Type Markup", "Home Tool Markup Language", "Hyperlinks and Text Markup"], answer: "HyperText Markup Language" },
    { question: "Which tag is used for JavaScript?", options: ["<js>", "<javascript>", "<script>", "<code>"], answer: "<script>" },
    { question: "What does CSS stand for?", options: ["Cascading Style Sheet", "Computer Style Sheet", "Creative Style System", "Color Style Sheet"], answer: "Cascading Style Sheet" },
    { question: "Which symbol is used for comments in JavaScript?", options: ["//", "/*", "#", "--"], answer: "//" },
    { question: "How do you declare a variable in JS?", options: ["int x;", "let x;", "var x;", "both let and var"], answer: "both let and var" },
    { question: "Which company developed JavaScript?", options: ["Microsoft", "Netscape", "Google", "Apple"], answer: "Netscape" },
    { question: "How do you print in JS?", options: ["print()", "echo()", "console.log()", "document.write()"], answer: "console.log()" },
    { question: "Which keyword is used to define a function?", options: ["func", "function", "def", "method"], answer: "function" },
    { question: "Which of these is a JavaScript framework?", options: ["React", "Laravel", "Django", "Flask"], answer: "React" },
    { question: "What is the output of 2 + '2'?", options: ["4", "22", "NaN", "Error"], answer: "22" }
  ],

  Sports: [
    { question: "How many players are there in a football team?", options: ["9", "10", "11", "12"], answer: "11" },
    { question: "Which country won the FIFA World Cup 2022?", options: ["France", "Argentina", "Brazil", "Germany"], answer: "Argentina" },
    { question: "Who is known as the God of Cricket?", options: ["MS Dhoni", "Virat Kohli", "Sachin Tendulkar", "Kapil Dev"], answer: "Sachin Tendulkar" },
    { question: "In which sport is the term 'Love' used?", options: ["Football", "Badminton", "Tennis", "Cricket"], answer: "Tennis" },
    { question: "Which country hosts the Wimbledon tournament?", options: ["USA", "UK", "France", "Australia"], answer: "UK" },
    { question: "How many rings are there in the Olympic logo?", options: ["4", "5", "6", "3"], answer: "5" },
    { question: "Which sport uses a puck?", options: ["Cricket", "Hockey", "Ice Hockey", "Baseball"], answer: "Ice Hockey" },
    { question: "What is the national sport of India?", options: ["Cricket", "Football", "Kabaddi", "Hockey"], answer: "Hockey" },
    { question: "Who won the 2021 Ballon d'Or?", options: ["Ronaldo", "Messi", "Mbappe", "Neymar"], answer: "Messi" },
    { question: "How long is an Olympic marathon?", options: ["21km", "42.195km", "50km", "30km"], answer: "42.195km" }
  ],

  Drama: [
    { question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "J.K. Rowling", "Leo Tolstoy"], answer: "William Shakespeare" },
    { question: "What is a monologue?", options: ["A group dance", "One actor speaking alone", "A musical", "A dialogue between two"], answer: "One actor speaking alone" },
    { question: "Which is a Greek tragedy?", options: ["Oedipus Rex", "Hamlet", "Macbeth", "The Tempest"], answer: "Oedipus Rex" },
    { question: "Which element is NOT in drama?", options: ["Plot", "Character", "Music", "Equation"], answer: "Equation" },
    { question: "Who is a playwright?", options: ["A director", "A writer of plays", "A singer", "A stage manager"], answer: "A writer of plays" },
    { question: "Which drama includes the line 'To be or not to be'?", options: ["Othello", "Macbeth", "Hamlet", "King Lear"], answer: "Hamlet" },
    { question: "Which drama genre is funny?", options: ["Tragedy", "Comedy", "Horror", "Mystery"], answer: "Comedy" },
    { question: "What is the stage area called behind the curtain?", options: ["Green room", "Backstage", "Gallery", "Pit"], answer: "Backstage" },
    { question: "Which is a famous Indian playwright?", options: ["Rabindranath Tagore", "Rohit Sharma", "Chetan Bhagat", "APJ Abdul Kalam"], answer: "Rabindranath Tagore" },
    { question: "What does 'act' mean in drama?", options: ["A dance", "A part of a play", "A movie", "A speech"], answer: "A part of a play" }
  ],

  book: [
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Venus", "Mars", "Jupiter"], answer: "Mars" },
    { question: "What is the capital of India?", options: ["Mumbai", "Delhi", "Kolkata", "Chennai"], answer: "Delhi" },
    { question: "Which is the largest ocean in the world?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: "Pacific" },
    { question: "Which is the tallest mountain in the world?", options: ["K2", "Everest", "Kangchenjunga", "Makalu"], answer: "Everest" },
    { question: "What is the currency of Japan?", options: ["Yen", "Won", "Rupee", "Dollar"], answer: "Yen" },
    { question: "Which is the longest river in the world?", options: ["Nile", "Amazon", "Ganga", "Yangtze"], answer: "Nile" },
    { question: "Who invented the light bulb?", options: ["Newton", "Einstein", "Thomas Edison", "Tesla"], answer: "Thomas Edison" },
    { question: "Which continent has the most countries?", options: ["Asia", "Africa", "Europe", "South America"], answer: "Africa" },
    { question: "What is the boiling point of water?", options: ["90°C", "100°C", "110°C", "80°C"], answer: "100°C" },
    { question: "Which gas do plants absorb?", options: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen"], answer: "Carbon Dioxide" }
  ]
};



uploadlabel.addEventListener('click', (e) => {

  let value = input.value;
  if (value === '') {
    // alert('please enter correct name');
    errorsound.play();

    let newdiv = document.createElement('div');
    newdiv.className = 'error1';
    newdiv.innerHTML = `<i style="color:red" class="fa-solid fa-circle-xmark"></i> error:please enter your  name`;
    newdiv.style.left = '3rem';





    forremove(newdiv);
    setTimeout(() => {
      newdiv.style.opacity = '1';

    }, 100);
    document.body.appendChild(newdiv);

    e.preventDefault();

    return;



  }

  else if (value.length < 4) {
    errorsound.play();

    let newdiv = document.createElement('div');
    newdiv.className = 'error1';
    newdiv.innerHTML = `<i style="color:red" class="fa-solid fa-circle-xmark"></i> Name should not be less than 4 characters`;
    newdiv.style.left = '3rem';



    forremove(newdiv);
    setTimeout(() => {
      newdiv.style.opacity = '1';

    }, 100);
    document.body.appendChild(newdiv);
    e.preventDefault();

    return;

  }

  else if (/\d/.test(value)) {
    errorsound.play();

    let newdiv = document.createElement('div');
    newdiv.className = 'error1';
    newdiv.innerHTML = `<i style="color:red" class="fa-solid fa-circle-xmark"></i> error: please enter name in alphabets`;
    newdiv.style.left = '3rem';



    forremove(newdiv);
    setTimeout(() => {
      newdiv.style.opacity = '1';

    }, 100);
    document.body.appendChild(newdiv);
    e.preventDefault();
    return;


  }

  else {

    joker();



  }


})


inputfile.onchange = function () {
  container.style.display = 'none';

  container2.style.display = 'block';

  bulb.src = URL.createObjectURL(inputfile.files[0]);
  textcont.textContent = input.value;
};


icon.addEventListener('click', () => {
  input.value = '';
  inputfile.value = '';
  container2.style.display = 'none';
  container.style.display = 'block';
})


function forremove(element) {
  setTimeout(() => {
    element.remove();

  }, 5000);
}

catbtn.forEach((cat) => {
  cat.addEventListener('click', () => {
    timers();
    container2.style.display = 'none';
    container3.style.display = 'block';

    currcat = cat.dataset.category;
    currentquestionindex = 0;
    nam.textContent = currcat;
    showquestion();
  })
})

function addquestions() {

  button.addEventListener('click', () => {


    if (timeup) {
      currentquestionindex++;
      if (currentquestionindex < quizQuestions[currcat].length) {
        timers();

        resetalloptions();

        showquestion();

      }
      return;

    }
    let selectedoption = document.querySelector('.fa-circle-check');

    if (!selectedoption) {
      errorsound.play();

      let newdiv = document.createElement('div');
      newdiv.className = 'error1';
      newdiv.innerHTML = `<i style="color:red" class="fa-solid fa-circle-xmark"></i> please select any option`;
      newdiv.style.left = '3rem';



      forremove(newdiv);
      setTimeout(() => {
        newdiv.style.opacity = '1';

      }, 100);
      document.body.appendChild(newdiv); return;


    }

    const selectedtext = selectedoption.closest('button').querySelector('a').textContent.trim();

    const correctanswer = quizQuestions[currcat][currentquestionindex].answer;

    if (selectedtext === correctanswer) {

      score++;


      console.log(`the total score is ${score}/10`);
    }
    else {
    }

    currentquestionindex++;
    if (currentquestionindex < quizQuestions[currcat].length) {
      timers();

      resetalloptions();

      showquestion();

    }
    else {
      container3.style.display = 'none';
      container4.style.display = 'block';

      if (score >= 8) {

        finalname.innerHTML = `    <a class="text-[18px]">Congratulations <span id="final-name">${input.value}</span>!</a>
`
        pics.src = bulb.src;
        conv.src = 'trophy.png'


        sc.innerHTML = `    <h3 id="score" class="text-[29px]"><span>${score}</span>/10</h3>
`
        para.innerHTML = `    <p class="text-gray-400">Hey champion you really played too well 🏆. </p>
`
       document.getElementById('first-rankimg').src = bulb.src;
       document.getElementById('first-ame').textContent = input.value;
    
      const div = document.createElement('li');
      div.className ='list'

       div.innerHTML = ` <div id="first-box" class="flex  mt-[30px] ml-[5%] w-[90%] py-3 rounded-3xl h-[20%] bg-[white] text-black pl-3 gap-3">
    <p>${counted++}</p>
    <img src= ${bulb.src} class =" rounded-full h-[30px] w-[30px]">
    <p>${input.value}</p>
    <div id="scor" class="mx-auto">
        <h2>${score}score</h2>
    </div>
</div>`
   
firstbox.appendChild(div);
   
       confetti();

      }

      else if (score >= 5 && score <= 7) {

        finalname.innerHTML = `    <a class="text-[18px]">Well done  <span id="final-name">${input.value}</span>!</a>
`
        conv.src = "medal.png";
        pics.style.height = '60px';
        pics.style.width = '60px';
        pics.style.borderRadius = '100px'
        pics.style.marginLeft = '-16px'

        pics.src = bulb.src;

        sc.innerHTML = `    <h3 id="score" class="text-[29px]"><span>${score}</span>/10</h3>
`
        para.innerHTML = `    <p class="text-gray-400">Good effort ! you are getting there 👍 . </p>`
        confetti();

          document.getElementById('second-rankimg').src = bulb.src;
       document.getElementById('second-ame').textContent = input.value;

        const div = document.createElement('li');
      div.className ='list'

       div.innerHTML = ` <div id="first-box" class="flex mt-[30px]  ml-[5%] w-[90%] py-3 rounded-3xl h-[20%] bg-[white] text-black pl-3 gap-3">
    <p>${counted++}</p>
    <img src= ${bulb.src} class =" rounded-full h-[30px] w-[30px]">
    <p>${input.value}</p>
    <div id="scor" class="mx-auto">
        <h2>${score}score</h2>
    </div>
</div>`
   
firstbox.appendChild(div);

      }

      else if (score >= 0 && score <= 4) {

        finalname.innerHTML = `    <a class="text-[18px]">Nice try <span id="final-name">${input.value}</span>!</a>
`
        conv.src = 'sadi.png';
        pics.src = bulb.src;
        pics.style.height = '60px';
        pics.style.width = '60px';
        pics.style.borderRadius = '100px'
        pics.style.marginLeft = '-16px'
        pics.style.marginTop = '-1rem';



        sc.innerHTML = `    <h3 id="score" class="text-[29px]"><span>${score}</span>/10</h3>
`
        para.innerHTML = `    <p class="text-gray-400">Dont give up ! Try again 💪. </p>`
    document.getElementById('third-rankimg').src = bulb.src;
       document.getElementById('third-ame').textContent = input.value;
     const div = document.createElement('li');
     div.className ='divu';
      div.className ='list'

       div.innerHTML = `  <div id="first-box" class="flex mt-[30px] ml-[5%] w-[90%] py-3 rounded-3xl h-[20%] bg-[white] text-black pl-3 gap-3">
    <p>${counted++}</p>
    <img src= ${bulb.src} class =" rounded-full h-[30px] w-[30px]">
    <p>${input.value}</p>
    <div id="scor" class="mx-auto">
        <h2>${score}score</h2>
    </div>
</div>`
   
firstbox.appendChild(div);
      }

    }

  })
}

addquestions();

function showquestion() {

  const buttons = document.querySelectorAll('.button');
  buttons.forEach((btn) => {
    const icon = btn.querySelector('.options-check');
    icon.style.pointerEvents = 'auto';
    icon.style.opacity = '';


  })


  let currentq = quizQuestions[currcat][currentquestionindex];

  quest.textContent = currentq.question;
  but1.textContent = currentq.options[0];
  but2.textContent = currentq.options[1];
  but3.textContent = currentq.options[2];
  but4.textContent = currentq.options[3];
  qcount.innerHTML = ` ${currentquestionindex + 1}/`



}


document.querySelectorAll('.options-check').forEach((icon) => {
  icon.addEventListener('click', () => {
    // First, clear ALL other icons (remove check from all)
    document.querySelectorAll('.options-check').forEach((otherIcon) => {
      otherIcon.classList.remove('fa-circle-check');
      otherIcon.classList.add('fa-circle');
      otherIcon.style.color = 'white';
    });

    // Then, set the clicked icon to checked
    icon.classList.remove('fa-circle');
    icon.classList.add('fa-circle-check');
    icon.style.color = 'green';
  });
});

function resetalloptions() {
  document.querySelectorAll('.options-check').forEach((other) => {
    other.classList.remove('fa-circle-check');
    other.classList.add('fa-circle');
    other.style.color = 'white';
    const buttons = document.querySelectorAll('.button');

    buttons.forEach((bt) => {
      bt.style.color = 'white'
    })

  })


}
icon3.addEventListener('click', () => {
  timers();
  container3.style.display = 'none';
  container2.style.display = 'block';


})


let timeup = false;

let timer;

function timers() {
  if (timer) {
    clearInterval(timer);
  }

  let totaltime = 10;
  let timeleft = 10;
  const pro = document.getElementById('progress');
  const time = document.getElementById('time');

  let circlelength = 2 * Math.PI * 50;
  pro.style.strokeDasharray = circlelength;

  pro.style.transition = 'stroke-dashoffset 0.0s ease';
  pro.style.strokeDashoffset = 0;
  time.textContent = timeleft;


  setTimeout(() => {
    pro.style.transition = '';
  }, 100);

  timer = setInterval(() => {
    timeleft--;
    time.textContent = timeleft;

    let offset = circlelength * (1 - timeleft / totaltime);
    pro.style.strokeDashoffset = offset;

    if (timeleft <= 0) {
      timeup = true;
      clearInterval(timer);

      const buttons = document.querySelectorAll('.button');
      buttons.forEach((btn) => {
        const icon = btn.querySelector('.options-check');
        icon.style.pointerEvents = 'none';

      });

      buttons.forEach((bt) => {
        bt.style.color = 'grey'
      })
    }
  }, 1000);
}


but13.addEventListener('click',()=>{
  container4.style.display ='none';
  container5.style.display ='block';
  setitem();
})


pre.addEventListener('click',()=>{
  container5.style.display ='none';
  container4.style.display ='block';

})




function tryagainfunction() {
  but12.addEventListener('click', () => {
    container4.style.display = 'none';
    container.style.display = 'block';
    input.value = '';

    resetalloptions();
    but1.style.color = 'white';
    but2.style.color = 'white';
    but3.style.color = 'white';
    but4.style.color = 'white';

 currentquestionindex = 0
 score = 0
 currcat = ''
 inputfile.value ='';
  timeup = false
  clearInterval(timer);


  })
}

tryagainfunction();


function setitem(){
 
  const inputfile = document.getElementById('input-file'); 
  
  const file = inputfile.files[0];

  if(file){
    const reader = new FileReader();
     
    reader.onload = function(e){
      const base4image = e.target.result;
       if(score >= 8) {
                localStorage.setItem('firstName', input.value); // Name save karo

        localStorage.setItem('firstRankImage', base4image); // Winner image
      }
      else if(score >= 5 && score <= 7) {
        localStorage.setItem('secondRankImage', base4image); // Second place image
                    localStorage.setItem('firstName', input.value); // Name save karo
                localStorage.setItem('secondName', input.value); // Name save karo

      }
      else {
        localStorage.setItem('thirdRankImage', base4image); // Third place image
                     localStorage.setItem('thirdName', input.value); // Name save karo

      }
      
      console.log('Image saved according to rank!');
    }
        reader.readAsDataURL(file);

      console.log('image has saved');
    }
  }



setitem();


function loadImage() {




  const firstRankData = localStorage.getItem('firstRankImage');
 const firstName = localStorage.getItem('firstName');
  if (firstRankData) {
    document.getElementById('first-rankimg').src = firstRankData;
  }
  if(firstName){
    document.getElementById('first-ame').textContent = firstName;

  }
  
  const secondRankData = localStorage.getItem('secondRankImage');
  const secondName = localStorage.getItem('secondName');

  if (secondRankData) {
    document.getElementById('second-rankimg').src = secondRankData;
  }
   if(secondName){
    document.getElementById('second-ame').textContent = secondName;
    
  }
  
  const thirdRankData = localStorage.getItem('thirdRankImage');
   const thirdName = localStorage.getItem('thirdName');

  if (thirdRankData) {
    document.getElementById('third-rankimg').src = thirdRankData;
  }
   if(thirdName){
    document.getElementById('third-ame').textContent = thirdName;
    
  }
}

loadImage();
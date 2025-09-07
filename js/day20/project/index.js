const questionBank = [
    {
      "question": "Who has the most centuries in international cricket?",
      "options": ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"],
      "answer": "Sachin Tendulkar"
    },
    {
      "question": "Which country has won the most FIFA World Cups?",
      "options": ["Brazil", "Germany", "Italy", "Argentina"],
      "answer": "Brazil"
    },
    {
      "question": "Who is known as the 'Father of the Nation' in India?",
      "options": ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Dr. B.R. Ambedkar"],
      "answer": "Mahatma Gandhi"
    },
    {
      "question": "What is the capital city of Australia?",
      "options": ["Sydney", "Melbourne", "Canberra", "Perth"],
      "answer": "Canberra"
    },
    {
      "question": "What is the chemical symbol for gold?",
      "options": ["Au", "Ag", "Pb", "Fe"],
      "answer": "Au"
    },
    {
      "question": "Which planet is known as the Red Planet?",
      "options": ["Mars", "Venus", "Jupiter", "Saturn"],
      "answer": "Mars"
    },
    {
      "question": "Who wrote the play 'Romeo and Juliet'?",
      "options": ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
      "answer": "William Shakespeare"
    },
    {
      "question": "What is the largest mammal on Earth?",
      "options": ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
      "answer": "Blue Whale"
    },
    {
      "question": "Which element has the atomic number 1?",
      "options": ["Oxygen", "Hydrogen", "Nitrogen", "Helium"],
      "answer": "Hydrogen"
    },
    {
      "question": "Which country is known as the 'Land of the Rising Sun'?",
      "options": ["Japan", "China", "South Korea", "Thailand"],
      "answer": "Japan"
    },
    {
      "question": "Who painted the Mona Lisa?",
      "options": ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
      "answer": "Leonardo da Vinci"
    },
    {
      "question": "What is the hardest natural substance on Earth?",
      "options": ["Diamond", "Gold", "Platinum", "Iron"],
      "answer": "Diamond"
    },
    {
      "question": "Who discovered penicillin?",
      "options": ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Isaac Newton"],
      "answer": "Alexander Fleming"
    },
    {
      "question": "What is the largest ocean on Earth?",
      "options": ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
      "answer": "Pacific Ocean"
    },
    {
      "question": "Which sport is known as the 'king of sports'?",
      "options": ["Football (Soccer)", "Basketball", "Cricket", "Tennis"],
      "answer": "Football (Soccer)"
    },
    {
      "question": "Who invented the telephone?",
      "options": ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "James Watt"],
      "answer": "Alexander Graham Bell"
    },
    {
      "question": "What is the square root of 64?",
      "options": ["6", "7", "8", "9"],
      "answer": "8"
    },
    {
      "question": "What is the national animal of the United States?",
      "options": ["Bald Eagle", "Grizzly Bear", "Mountain Lion", "American Bison"],
      "answer": "Bald Eagle"
    },
    {
      "question": "Who was the first man to step on the Moon?",
      "options": ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],
      "answer": "Neil Armstrong"
    },
    {
      "question": "Which country is famous for its maple syrup?",
      "options": ["Canada", "USA", "Sweden", "Switzerland"],
      "answer": "Canada"
    },
    {
      "question": "What is the tallest mountain in the world?",
      "options": ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
      "answer": "Mount Everest"
    },
    {
      "question": "Which is the smallest country in the world?",
      "options": ["Vatican City", "Monaco", "San Marino", "Liechtenstein"],
      "answer": "Vatican City"
    },
    {
      "question": "What is the most spoken language in the world?",
      "options": ["Mandarin Chinese", "English", "Spanish", "Hindi"],
      "answer": "Mandarin Chinese"
    },
    {
      "question": "Who is known as the 'Iron Man of India'?",
      "options": ["Sardar Vallabhbhai Patel", "Bhagat Singh", "Lal Bahadur Shastri", "Chandra Shekhar Azad"],
      "answer": "Sardar Vallabhbhai Patel"
    },
    {
      "question": "What is the freezing point of water?",
      "options": ["0°C", "32°C", "100°C", "273°C"],
      "answer": "0°C"
    },
    {
      "question": "What is the largest desert in the world?",
      "options": ["Sahara Desert", "Arctic Desert", "Gobi Desert", "Antarctic Desert"],
      "answer": "Antarctic Desert"
    },
    {
      "question": "Who developed the theory of relativity?",
      "options": ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
      "answer": "Albert Einstein"
    },
    {
      "question": "Which Indian city is known as the 'Pink City'?",
      "options": ["Jaipur", "Udaipur", "Jodhpur", "Bikaner"],
      "answer": "Jaipur"
    },
    {
      "question": "Who composed the famous symphony 'Fur Elise'?",
      "options": ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Franz Schubert"],
      "answer": "Ludwig van Beethoven"
    },
    {
      "question": "What is the longest river in the world?",
      "options": ["Nile", "Amazon", "Yangtze", "Mississippi"],
      "answer": "Nile"
    }
  ];

function RandomQuestion(){

    // first approach
    // let n = questionBank.length;
    // let bank = new Set()
    
    // while (bank.size != 5){
    //     let i = Math.floor(Math.random() * n);
    //     bank.add(questionBank[i]);
    // }

    // return [...bank];

    // nlogn
    // second approach
    // let bank = questionBank.sort(() => Math.random() - 0.5);
    // return bank.slice(0, 5);

    // to optimize above we can use fishery algorithm
    // third approach and best approach
    // O(n) time complexity and O(n) space complexity
    const list = []
    let size = questionBank.length;
    for (let i=0;i<5;i++){
        let index = Math.floor(Math.random() * size);
        list.push(questionBank[index]);
        // swap
        [questionBank[index], questionBank[size - 1]] = [questionBank[size - 1], questionBank[index]];
        size--;
    }
    return list

}




const form = document.querySelector('form');

const h = document.createElement('h1');
h.innerText = 'Cricket Quiz';
form.appendChild(h);

// form.append('<h1>Cricket Quiz</h1>')

const div1 = document.createElement('div');
div1.className = 'question';

const questions = RandomQuestion();

const lst = {}
questions.forEach((question , index)=>{
    const p = document.createElement('p');
    p.innerText = `${index + 1}. ${question.question}`;
    div1.appendChild(p);
    lst[`q${index + 1}`] =  question.answer  
    question.options.forEach((option)=>{
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `q${index + 1}`;
        input.value = option;
        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        label.appendChild(document.createElement('br'));
        div1.appendChild(label);
    })
    form.appendChild(div1);
})

const button = document.createElement('button');
button.type = 'submit';
button.className = 'submit-btn';
button.innerText = 'Submit';
form.appendChild(button);


form.addEventListener('submit' , (event)=>{
    event.preventDefault();
    // console.log(event.target)
    console.log(event.target.id);
    
    let data = document.querySelector('form')
    let form = new FormData(data)
    // console.log(typeof form);
    // console.log(form.entries());
    let result = 0;
    // console.log(form.entries());
    
    for (let [key,value] of form.entries()){
        if (value==lst[key]){
            result++;
        }
    }                                   

    let res = document.getElementById("result")
    // console.log(res.id);
    res.innerText =  `${result} out of 5 are correct`
        
})  


  


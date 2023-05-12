let truthBtn = document.querySelector('.truth-btn');
let dareBtn =document.querySelector('.dare-btn');

let displaycontainer = document.querySelector('.displaycontainer');

let truth = [
    "What Food would eat every day if you could ?",
    "What is a secret you have kept from your parents ?",
    "What fictional character would you love to marry ?",
    "Which one of your parents are you closer to ?",
    "If you have ever cheated on a test, what subject was it for ?",
    "If you could shop for free in one store,which one would you pick ?",
    "Pick one : Money, Fame, Power ?",
    "What is the song that will always give you goosebumps ?",
    "If it was your last day on Earth, what would you do ?",
    "Have you ever left a restaurant without paying the bill ?",
    "What is a talent of yours that nobody knows of ?",
    "When you were a kid, what did you want to be when you grow up ?",
    "What would you do with $1000 ?",
    "What do you daydream about the most ?",
    "What animal are you scared of the most ?",
    "What is your most strange Nickname ?",
    "What is the biggest lie you have ever Told ?",
    "What is the most Childish thing you still Do ?",
    "When was the Last time you  Cried ?",
];

let dare = [
    "Go outside and shout ,I belive in fairies ",
    "Try to have your tounge touch your nose",
    "Run around the house three times",
    "Sing in foreign language for 2 minutes",
    "Act like Dog",
    "Flirt with a friend like you are strangers",
    "Imitate someone in the group",
    "Give a speech about how the Earth is flat for 2 minutes",
    "Imitate any celebrity you like ",
    "Get an Item from Kitchen and Sell it to the group for 1 minute",
    "Show your search History on Phone",
    "Ask your neighbour for roll of toilet paper",
    "Do 20 Sit ups ",
    "Call the 4rth Contact on Your Phone and sing them 30 seconds of a song that the group chooses",
   

]
truthBtn.addEventListener('click', () => {
    let trueValue = truth[Math.floor(Math.random () * truth.length)];
    displaycontainer.innerHTML = trueValue;
})
 
dareBtn.addEventListener('click', () => {
    let dareValue =dare[Math.floor(Math.random() * dare.length)];
    displaycontainer.innerHTML = dareValue;
})
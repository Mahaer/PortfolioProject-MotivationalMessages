const motivationalQuotes = [
    [
        "Believe in yourself",
        "The only way to do great work",
        "Success is not the key to happiness.",
        "Don't watch the clock;",
        "Keep your face always toward the sunshine",
        "The future belongs to those who believe",
        "It does not matter how slowly you go",
        "You are never too old to set another goal",
        "The harder the conflict",
        "Don't be afraid to give up the good"
    ],
    [
        "and all that you are.",
        "is to love what you do.",
        "Happiness is the key to success.",
        "do what it does.",
        "and shadows will fall behind you.",
        "in the beauty of their dreams.",
        "as long as you do not stop.",
        "or to dream a new dream.",
        "the greater the triumph.",
        "to go for the great."
    ],
    [
        "Know that there is something inside you that is greater than any obstacle.",
        "Keep pushing forward.",
        "Believe in the power of your dreams.",
        "Keep going.",
        "Never give up on your aspirations.",
        "Dream big, act big.",
        "Your perseverance will pay off.",
        "The journey is the reward.",
        "Your potential is limitless.",
        "Great things are coming your way."
    ]
];


function createNewMessage(){
    let newMessage = ''
    let partOne = motivationalQuotes[0][Math.floor(Math.random() * motivationalQuotes[0].length)]
    let partTwo = motivationalQuotes[1][Math.floor(Math.random() * motivationalQuotes[1].length)]
    let partThree = motivationalQuotes[2][Math.floor(Math.random() * motivationalQuotes[2].length)]
    newMessage = partOne + ' ' + partTwo + ' ' + partThree
    return newMessage
}


console.log('Welcome to the Motivational Quote Generator!')
console.log('This is your Motivational Quote of the day:')
console.log(createNewMessage())
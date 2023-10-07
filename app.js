const quotes = [`The only way to do great work is to love what you do.`,
`Believe you can and you're halfway there.`,
`The future belongs to those who believe in the beauty of their dreams.`,
`Don't watch the clock; do what it does. Keep going.`,
`Success is not final, failure is not fatal: It is the courage to continue that counts.`,
`The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.`]
const authors = ['Steve Jobs', 
'Theodore Roosevelt', 
'Eleanor Roosevelt', 
'Sam Levenson', 
'Winston Churchill',
`Jordan Belfort`]
const usedIndices = []
const colours = ['#FF5733', '#FFC300', '#FF5733', '#C70039', '#900C3F', '#581845', '#5D6D7E', '#00A8CC', '#00A8CC', '#00537C'];
let previousColourIndex = -1;
let previousQuoteIndex = -1;
$(document).ready(function(){
    generate();

});

$('#generate-button').click(function(){
    

    $('#fade-out').fadeOut(500, function() {
        // Change the background color
        generate();
        // Fade in the body with the new color
        $('#fade-out').fadeIn(500);
    });

    

    
});

function generate(){
    let randomColour 
    do{
        randomColour = Math.floor(Math.random() * colours.length)
        console.log(randomColour)
    }while(randomColour === previousColourIndex)
    previousColourIndex = randomColour
    let randomIndex 
    do{
        randomIndex = Math.floor(Math.random() * quotes.length)
    }while(randomIndex === previousQuoteIndex)
    previousQuoteIndex = randomIndex
    

    
    $('body').css('backgroundColor', colours[randomColour])
    $('.text').css('color', colours[randomColour])
    $('button').css('backgroundColor', colours[randomColour])
    $('#fa-speech-mark').css('color', colours[randomColour])

    $('#quote-text').html(quotes[randomIndex]);
    $('#author-text').html('- ' + authors[randomIndex]);
    usedIndices.push(randomIndex);
}


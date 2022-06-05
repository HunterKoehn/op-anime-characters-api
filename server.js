const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const characters = {
    'luffy': {
        'name': 'Monkey D. Luffy',
        'classification': 'devil-fruit user, pirate',
        'anime': 'One Piece'
    },
    'naruto': {
        'name': 'Naruto Uzumaki',
        'classification': '9-tails jinchuriki',
        'anime': 'Naruto'
    },
    'goku': {
        'name': 'Goku, Son Goku, Kakarot',
        'classification': 'super saiyan',
        'anime': 'Dragon Ball'
    },
    'kaneki': {
        'name': 'Ken Kaneki',
        'classification': 'ghoul',
        'anime': 'Tokyo Ghoul'
    },
    'meruem': {
        'name': 'Meruem',
        'classification': 'chimera ant',
        'anime': 'Hunter X Hunter'
    },
    'rimuru': {
        'name': 'Rimuru Tempest',
        'classification': 'slime',
        'anime': 'That Time I Got Reincarnated as a Slime'
    },
    'gojo': {
        'name': 'Satoru Gojo',
        'classification': 'sorcerer',
        'anime': 'Jujutsu Kaisen'
    },
    'saitama': {
        'name': 'Saitama',
        'classification': 'hero',
        'anime': 'One Punch Man'
    },
    'unknown': {
        'name': 'unknown',
        'strengths': 'unknown',
        'anime': 'unknown'
    }
}

// when someone goes to main page of the application, we server up some html
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:character', (request, response) => {
    const characterInfo = request.params.character.toLowerCase()
    if ( characters[characterInfo] ) {
        response.json( characters[characterInfo] )
    }
    else {
        response.json( characters['unknown'] )
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now listening on port ${PORT}! Betta
    Go Catch It!`)
})
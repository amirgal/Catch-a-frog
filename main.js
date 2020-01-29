const game = Game()
const renderer = Renderer()
let counter = 0

$('#startBtn').on('click', function () {
    game.levelUp()
    renderer.renderFrogs(game.getFrogs())
    renderer.renderLevel(game.getLevel())
    $('#startBtn').attr('disabled',true)
    counter = game.getLevel()+1
    startCountDown(counter)
})

$('#container').on('click','.frog', function() {
    if(1 == game.getFrogs().length){
        game.removeFrog($(this).data().id)
        game.levelUp()
        renderer.renderFrogs(game.getFrogs())
        renderer.renderLevel(game.getLevel())
        startCountDown(0)
        counter = game.getLevel()+1
        startCountDown(counter)
    } else {  
        game.removeFrog($(this).data().id)
        renderer.renderFrogs(game.getFrogs())
    }
})

const startCountDown = function(counter) {
    $('#time').text(counter)
    const timer = setInterval(function() {
        counter--
        if(counter < 0) {
            clearInterval(timer)
            return
        } else {
            $('#time').text(counter)
        }
    },1000)
}

//TODO: dont call startcountdown every level up but manage the counter





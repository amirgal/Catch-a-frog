const game = Game()
const renderer = Renderer()
// let counter = 0


$('#startBtn').on('click', function () {
    game.levelUp()
    renderer.renderFrogs(game.getFrogs())
    renderer.renderLevel(game.getLevel())
    $('#startBtn').attr('disabled',true)
    startCountDown(game.getLevel()+1)
})

$('#container').on('click','.frog', function() {
    if(1 == game.getFrogs().length){
        const frogID = $(this).data().id
        game.removeFrog(frogID)
        game.levelUp()
        renderer.renderFrogs(game.getFrogs())
        renderer.renderLevel(game.getLevel())
        startCountDown(-1)
        startCountDown(game.getLevel()+1)
    }
    const frogID = $(this).data().id
    game.removeFrog(frogID)
    renderer.renderFrogs(game.getFrogs())
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





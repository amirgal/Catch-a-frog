const game = Game()
const renderer = Renderer()
let counter = 0

$('#startBtn').on('click', function () {
    game.levelUp()
    renderer.renderFrogs(game.getFrogs())
    renderer.renderLevel(game.getLevel())
    $('#startBtn').attr('disabled',true)
    counter = game.getLevel()+1
    
    $('#time').text(counter)
    const timer = setInterval(timeFunc,1000)
    
})

const timeFunc = function() {
    counter--
    if(counter < 0) {
        clearInterval(timer)
        $('#container').append(`<h1 id="game-over">Game Over!<h1>`)
        return
    } else {
        $('#time').text(counter)
    }
}

$('#container').on('click','.frog', function() {
    if(1 == game.getFrogs().length){
        game.removeFrog($(this).data().id)
        game.levelUp()
        renderer.renderFrogs(game.getFrogs())
        renderer.renderLevel(game.getLevel())
        counter = game.getLevel()+1
        timeFunc()
    } else {  
        game.removeFrog($(this).data().id)
        renderer.renderFrogs(game.getFrogs())
    }
})






const game = Game()
const renderer = Renderer()
game.levelUp()

$('#startBtn').on('click', function () {
    renderer.renderFrogs(game.getFrogs())
})

$('#container').on('click','.frog', function() {
    if(1 == game.getFrogs().length){
        const frogID = $(this).data().id
        game.removeFrog(frogID)
        renderer.renderFrogs(game.getFrogs())
        game.levelUp()
        renderer.renderFrogs(game.getFrogs())
    }
    const frogID = $(this).data().id
    game.removeFrog(frogID)
    renderer.renderFrogs(game.getFrogs())
})

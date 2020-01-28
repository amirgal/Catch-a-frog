const game = Game()
const renderer = Renderer()


$('#startBtn').on('click', function () {
    game.levelUp()
    renderer.renderFrogs(game.getFrogs())
    renderer.renderLevel(game.getLevel())
})

$('#container').on('click','.frog', function() {
    if(1 == game.getFrogs().length){
        const frogID = $(this).data().id
        game.removeFrog(frogID)
        renderer.renderFrogs(game.getFrogs())
        game.levelUp()
        renderer.renderFrogs(game.getFrogs())
        renderer.renderLevel(game.getLevel())
    }
    const frogID = $(this).data().id
    game.removeFrog(frogID)
    renderer.renderFrogs(game.getFrogs())
})

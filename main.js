const game = Game()
const renderer = Renderer()
game.levelUp()
// let frogClicks = 0

renderer.renderFrogs(game.getFrogs())

$('#container').on('click','.frog', function() {
    // frogClicks++
    if(1 == game.getFrogs().length){
        const frogID = $(this).data().id
        game.removeFrog(frogID)
        renderer.renderFrogs(game.getFrogs())
        game.levelUp()
        renderer.renderFrogs(game.getFrogs())
    }
    // if(frogClicks == game.getFrogs().length{
    //     frogClicks = 0
    // })
    const frogID = $(this).data().id
    game.removeFrog(frogID)
    renderer.renderFrogs(game.getFrogs())
})

// const level = 2
const game = Game()
const renderer = Renderer()

game.levelUp(3)
renderer.renderFrogs(game.getFrogs())

$('#container').on('click','.frog', function() {
    const frogID = $(this).data().id
    game.removeFrog(frogID)
    renderer.renderFrogs(game.getFrogs())
})

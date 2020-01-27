// const level = 2
const frogsMod = Frogs(3)
const renderer = Renderer()

renderer.renderFrogs(frogsMod.getFrogs())

$('#container').on('click','.frog', function() {

    const frogID = $(this).data().id
    frogsMod.removeFrog(frogID)
    renderer.renderFrogs(frogsMod.getFrogs())
})

//TODO:
//Change Frogs module to game and save the level there,
//make a function levelup that runs the for loop and takes a level from main
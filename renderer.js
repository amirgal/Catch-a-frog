const Renderer = () => {
    const renderFrogs = frogs => {
        $('#container').empty()
        $('#frogs-left').empty()
        const container = $('#container')
        
        for(let frog of frogs) {
            const newFrog = $(`<i class="fas fa-frog frog" data-id=${frog.id}></i>`)
            newFrog.css('color',`${frog.color}`)
            newFrog.css('top',`${frog.y}px`)
            newFrog.css('left',`${frog.x}px`)
            newFrog.css('font-size',`${frog.y/4}px`)
            container.append(newFrog)
        }
        $('#frogs-left').append(`<p>${frogs.length} Frogs Left<p>`)
        
    }

    const renderLevel = gLevel => {
        $('#level').empty()
        $('#level').append(`<p>Level: ${gLevel}<p>`)
    }

    
    return {renderFrogs,renderLevel}
}
   
const Renderer = () => {
    const renderFrogs = frogs => {
        $('#container').empty()
        $('#frogs-left').empty()
        const container = $('#container')
        
        for(let frog of frogs) {
            const frogElem = $(`<i class="fas fa-frog frog" data-id=${frog.id}></i>`)
            frogElem.css('color',`${frog.color}`)
            frogElem.css('top',`${frog.y}px`)
            frogElem.css('left',`${frog.x}px`)
            frogElem.css('font-size',`${frog.y/4}px`)
            container.append(frogElem)
        }
        $('#frogs-left').append(`<p>${frogs.length} Frogs Left<p>`)
        
    }

    const renderLevel = gLevel => {
        $('#level').empty()
        $('#level').append(`<p>Level: ${gLevel}<p>`)
    }

    
    return {renderFrogs,renderLevel}
}
   
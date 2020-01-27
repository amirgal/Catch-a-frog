const Renderer = () => {
    const renderFrogs = frogs => {
        $('#container').empty()
        const container = $('#container')
        
        for(let frog of frogs) {
            const frogElem = $(`<div class="frog" data-id=${frog.id}></div>`)
            frogElem.css('background-color',`${frog.color}`)
            frogElem.css('top',`${frog.y}px`)
            frogElem.css('left',`${frog.x}px`)
            container.append(frogElem)
        }
    }
    return {renderFrogs}
}
   
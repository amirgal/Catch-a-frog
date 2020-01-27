const Renderer = () => {
    const renderFrogs = frogs => {
        $('#container').empty()
        const container = $('#container')
        
        for(let frog of frogs) {
            const frogElem = $(`<i class="fas fa-frog frog" data-id=${frog.id}></i>`)
            frogElem.css('color',`${frog.color}`)
            frogElem.css('top',`${frog.y}px`)
            frogElem.css('left',`${frog.x}px`)
            frogElem.css('font-size',`${frog.y/5}px`)
            container.append(frogElem)
        }
    }
    return {renderFrogs}
}
   
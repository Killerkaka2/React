function customrender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    // domElement.setAttribute('target', reactElement.props.target)
    // domElement.setAttribute('href', reactElement.props.href)
    for (const prop in reactElement.props) {
        if(prop == 'children') continue;
        domElement.setAttribute(prop,renderElement.props[prop])
    }
    container.appendChild(domElement)
     
}

const renderElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
     children: 'Click to visit Google'
}

const mainContainer = document.querySelector('#root')

customrender(renderElement,mainContainer)
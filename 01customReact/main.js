//import react from 'react';

//for working of custom render, we need to design a function
function customRender(reactElement, container){
    // const domElement = document.createElement(reactElement.type)//Create the Dom element
    // domElement.innerHTML = reactElement.children//here, insert the value like in innerHTML
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    // container.appendChild(domElement)

    //let's make a code modular in verion2
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)

}

const reactElement = {
    type: 'a',
    props: {
        //Attributes
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit gooogle',

}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)///for rendering the element in browser
'use strict';
//import React from 'react';
require('styles//Component.scss');
//class ComponentComponent extends React.Component {
//    render() {
//        return (
//            <div className="component-component">
//                Please edit src/components///ComponentComponent.js to update this component!
//            </div>
//        );
//    }
//}
//ComponentComponent.displayName = 'ComponentComponent';
// Uncomment properties you need
// ComponentComponent.propTypes = {};
// ComponentComponent.defaultProps = {};
//export default ComponentComponent;
module.exports = function () {
    var element = document.createElement('h1');
    element.classList.add('component-component')
    element.innerHTML = 'Hello world12';
    return element;
};
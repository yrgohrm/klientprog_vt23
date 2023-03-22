const buttons = document.getElementsByTagName("button");
for (const button of Array.from(buttons)) {
    button.addEventListener('click', transform)
}


function transform(event) {
    if (event.target.classList.contains("nice")) {
        event.target.classList.remove("nice")
    }
    else {
        event.target.classList.add("nice")
    }
}


/* horrible pseudo code
while (true) {
    const nextEvent = getEventFromOS();
    if (nextEvent === MOUSE_EVENT) {
        const elem = getTargetFromOS();
        let eventObject = new MouseEvent(elem, nextEvent.x, nextEvent.y);
        elem.registeredClickHandler(eventObject)
    }
}


addEventListener(elem, type, func) {
    if (type === 'click') {
        elem.registeredClickHandler = func
    }
}
*/
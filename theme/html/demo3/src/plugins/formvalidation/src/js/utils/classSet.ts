/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

function addClass(element: HTMLElement, classes: string): void {
    classes.split(' ').forEach((clazz) => {
        if (element.classList) {
            element.classList.add(clazz);
        } else if (` ${element.className} `.indexOf(` ${clazz} `)) {
            element.className += ` ${clazz}`;
        }
    });
}

function removeClass(element: HTMLElement, classes: string): void {
    classes.split(' ').forEach((clazz) => {
        element.classList
            ? element.classList.remove(clazz)
            : (element.className = element.className.replace(clazz, ''));
    });
}

export default function classSet(element: HTMLElement, classes: { [clazz: string]: boolean }): void {
    const adding = [];
    const removing = [];

    Object.keys(classes).forEach((clazz) => {
        if (clazz) {
            classes[clazz] ? adding.push(clazz) : removing.push(clazz);
        }
    });

    // Always remove before adding class because there might be a class which belong to both sets.
    // For example, the element will have class `a` after calling
    //  ```
    //  classSet(element, {
    //      'a a1 a2': true,
    //      'a b1 b2': false
    //  })
    //  ```
    removing.forEach((clazz) => removeClass(element, clazz));
    adding.forEach((clazz) => addClass(element, clazz));
}

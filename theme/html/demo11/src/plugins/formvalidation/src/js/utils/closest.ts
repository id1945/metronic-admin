/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

function matches(element: HTMLElement, selector: string): boolean {
    const nativeMatches = element.matches || element.webkitMatchesSelector
        || element['mozMatchesSelector'] || element['msMatchesSelector']; // tslint:disable-line:no-string-literal
    if (nativeMatches) {
        return nativeMatches.call(element, selector);
    }

    // In case `matchesselector` isn't supported (such as IE10)
    // See http://caniuse.com/matchesselector
    const nodes = [].slice.call(element.parentElement.querySelectorAll(selector)) as HTMLElement[];
    return nodes.indexOf(element) >= 0;
}

export default function closest(element: HTMLElement, selector: string): HTMLElement {
    let ele = element;
    while (ele) {
        if (matches(ele, selector)) {
            break;
        }
        ele = ele.parentElement;
    }
    return ele;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

/**
 * @param {HTMLElement} form The form element
 * @param {string} field The field name
 * @param {HTMLElement} element The field element
 * @param {HTMLElement[]} elements The list of elements which have the same name as `field`
 * @return {string}
 */
export default function getFieldValue(
    form: HTMLElement,
    field: string,
    element: HTMLElement,
    elements: HTMLElement[],
): string {
    const type = (element.getAttribute('type') || '').toLowerCase();
    const tagName = element.tagName.toLowerCase();

    switch (tagName) {
        case 'textarea':
            return (element as HTMLTextAreaElement).value;

        case 'select':
            const select = element as HTMLSelectElement;
            const index = select.selectedIndex;
            return (index >= 0) ? select.options.item(index).value : '';

        case 'input':
            if ('radio' === type || 'checkbox' === type) {
                const checked = elements.filter((ele) => (ele as HTMLInputElement).checked).length;
                return checked === 0 ? '' : checked + '';
            } else {
                return (element as HTMLInputElement).value;
            }

        default:
            return '';
    }
}

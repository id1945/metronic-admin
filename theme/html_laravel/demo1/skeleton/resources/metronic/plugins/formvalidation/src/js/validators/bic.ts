/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { Localization, ValidateInput, ValidateOptions, ValidateResult } from '../core/Core';

/**
 * Validate an Business Identifier Code (BIC), also known as ISO 9362, SWIFT-BIC, SWIFT ID or SWIFT code
 * For more information see http://en.wikipedia.org/wiki/ISO_9362
 *
 * @todo The 5 and 6 characters are an ISO 3166-1 country code, this could also be validated
 */
export default function bic() {
    return {
        validate(input: ValidateInput<ValidateOptions, Localization>): ValidateResult {
            return { valid: (input.value === '') || /^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/.test(input.value) };
        },
    };
}

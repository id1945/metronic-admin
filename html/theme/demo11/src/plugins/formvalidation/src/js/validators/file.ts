/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import {
    Localization,
    ValidateFunctionInterface,
    ValidateInput,
    ValidateOptions,
    ValidateResult,
} from '../core/Core';

export interface FileOptions extends ValidateOptions {
    // The allowed extensions, separated by a comma
    extension: string;
    // The maximum number of files
    maxFiles: number;
    // The maximum size in bytes
    maxSize: number;
    // The maximum size in bytes for all files
    maxTotalSize: number;
    // The minimum number of files
    minFiles: number;
    // The minimum size in bytes
    minSize: number;
    // The minimum size in bytes for all files
    minTotalSize: number;
    // The allowed MIME type, separated by a comma
    type: string;
}

export default function file(): ValidateFunctionInterface<
    FileOptions,
    ValidateResult
> {
    return {
        validate(
            input: ValidateInput<FileOptions, Localization>
        ): ValidateResult {
            if (input.value === '') {
                return { valid: true };
            }

            let extension;
            const extensions = input.options.extension
                ? input.options.extension.toLowerCase().split(',')
                : null;
            const types = input.options.type
                ? input.options.type.toLowerCase().split(',')
                : null;
            const html5 =
                window['File'] && window['FileList'] && window['FileReader'];

            if (html5) {
                // Get FileList instance
                const files = (input.element as HTMLInputElement).files;
                const total = files.length;
                let allSize = 0;

                // Check the maxFiles
                if (
                    input.options.maxFiles &&
                    total > parseInt(`${input.options.maxFiles}`, 10)
                ) {
                    return {
                        meta: { error: 'INVALID_MAX_FILES' },
                        valid: false,
                    };
                }

                // Check the minFiles
                if (
                    input.options.minFiles &&
                    total < parseInt(`${input.options.minFiles}`, 10)
                ) {
                    return {
                        meta: { error: 'INVALID_MIN_FILES' },
                        valid: false,
                    };
                }

                let metaData = {};
                for (let i = 0; i < total; i++) {
                    allSize += files[i].size;
                    extension = files[i].name.substr(
                        files[i].name.lastIndexOf('.') + 1
                    );
                    metaData = {
                        ext: extension,
                        file: files[i],
                        size: files[i].size,
                        type: files[i].type,
                    };

                    // Check the minSize
                    if (
                        input.options.minSize &&
                        files[i].size < parseInt(`${input.options.minSize}`, 10)
                    ) {
                        return {
                            meta: Object.assign(
                                {},
                                { error: 'INVALID_MIN_SIZE' },
                                metaData
                            ),
                            valid: false,
                        };
                    }

                    // Check the maxSize
                    if (
                        input.options.maxSize &&
                        files[i].size > parseInt(`${input.options.maxSize}`, 10)
                    ) {
                        return {
                            meta: Object.assign(
                                {},
                                { error: 'INVALID_MAX_SIZE' },
                                metaData
                            ),
                            valid: false,
                        };
                    }

                    // Check file extension
                    if (
                        extensions &&
                        extensions.indexOf(extension.toLowerCase()) === -1
                    ) {
                        return {
                            meta: Object.assign(
                                {},
                                { error: 'INVALID_EXTENSION' },
                                metaData
                            ),
                            valid: false,
                        };
                    }

                    // Check file type
                    if (
                        files[i].type &&
                        types &&
                        types.indexOf(files[i].type.toLowerCase()) === -1
                    ) {
                        return {
                            meta: Object.assign(
                                {},
                                { error: 'INVALID_TYPE' },
                                metaData
                            ),
                            valid: false,
                        };
                    }
                }

                // Check the maxTotalSize
                if (
                    input.options.maxTotalSize &&
                    allSize > parseInt(`${input.options.maxTotalSize}`, 10)
                ) {
                    return {
                        meta: Object.assign(
                            {},
                            {
                                error: 'INVALID_MAX_TOTAL_SIZE',
                                totalSize: allSize,
                            },
                            metaData
                        ),
                        valid: false,
                    };
                }

                // Check the minTotalSize
                if (
                    input.options.minTotalSize &&
                    allSize < parseInt(`${input.options.minTotalSize}`, 10)
                ) {
                    return {
                        meta: Object.assign(
                            {},
                            {
                                error: 'INVALID_MIN_TOTAL_SIZE',
                                totalSize: allSize,
                            },
                            metaData
                        ),
                        valid: false,
                    };
                }
            } else {
                // Check file extension
                extension = input.value.substr(
                    input.value.lastIndexOf('.') + 1
                );
                if (
                    extensions &&
                    extensions.indexOf(extension.toLowerCase()) === -1
                ) {
                    return {
                        meta: {
                            error: 'INVALID_EXTENSION',
                            ext: extension,
                        },
                        valid: false,
                    };
                }
            }

            return { valid: true };
        },
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import algorithms from './algorithms/index';
import formValidation, { Plugin } from './core/index';
import filters from './filters/index';
import plugins from './plugins/index';
import utils from './utils/index';
import validators from './validators/index';

const locales = {};

export {
    algorithms,
    formValidation,
    filters,
    locales,
    plugins,
    utils,
    validators,
    Plugin,
};

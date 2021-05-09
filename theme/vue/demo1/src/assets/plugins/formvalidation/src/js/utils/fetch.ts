/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

export interface FetchOptions {
    // Does it request to other domain? Default value is `false`
    crossDomain?: boolean;
    // Additional headers
    headers?: {
        [name: string]: string,
    };
    // The request method. For example, `GET` (default), `POST`
    method?: string;
    params: {
        [name: string]: any,
    };
}

export default function fetch(url: string, options: FetchOptions): Promise<any> {
    const toQuery = (obj: object) => {
        return Object.keys(obj).map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`).join('&');
    };

    return new Promise((resolve, reject) => {
        const opts = Object.assign({}, {
            crossDomain: false,
            headers: {},
            method: 'GET',
            params: {},
        }, options);

        // Build the params for GET request
        const params = Object.keys(opts.params)
            .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(opts.params[k])}`)
            .join('&');
        const hasQuery = url.indexOf('?');
        const requestUrl = ('GET' === opts.method) ? `${url}${hasQuery ? '?' : '&'}${params}` : url;

        if (opts.crossDomain) {
            // User is making cross domain request
            const script = document.createElement('script');
            const callback = `___fetch${Date.now()}___`;
            window[callback] = (data) => {
                delete window[callback];
                resolve(data);
            };
            script.src = `${requestUrl}${hasQuery ? '&' : '?'}callback=${callback}`;
            script.async = true;

            script.addEventListener('load', () => {
                script.parentNode.removeChild(script);
            });
            script.addEventListener('error', () => reject);

            document.head.appendChild(script);
        } else {
            const request = new XMLHttpRequest();
            request.open(opts.method, requestUrl);

            // Set the headers
            request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            if ('POST' === opts.method) {
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            }
            Object.keys(opts.headers).forEach((k) => request.setRequestHeader(k, opts.headers[k]));

            request.addEventListener('load', function() {
                // Cannot use arrow function here due to the `this` scope
                resolve(JSON.parse(this.responseText));
            });
            request.addEventListener('error', () => reject);

            // GET request will ignore the passed data here
            request.send(toQuery(opts.params));
        }
    });
}

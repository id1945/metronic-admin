/* eslint-disable no-useless-escape */
// DOCS: https://javascript.info/cookie
export class CookieComponent {
  /**
   * Returns the cookie with the given name, or undefined if not found
   *
   * @param  {string} name - cookie name
   * @returns string | null
   */
  public static get(name: string): string | undefined {
    let matches = document.cookie.match(
      new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
    )
    return matches ? decodeURIComponent(matches[1]) : undefined
  }

  /**
   * Please note that a cookie value is encoded,
   * so getCookie uses a built-in decodeURIComponent function to decode it.
   *
   * @param  {string} name - cookie name
   * @param  {string | number | boolean} value - cookie value
   * @param  {any} cookieOptions - cookie options
   * @returns void
   */
  public static set(name: string, value: string | number | boolean, cookieOptions: any): void {
    const options = {
      path: '/',
      // add other defaults here if necessary
      ...cookieOptions,
    }

    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString()
    }

    let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value)

    for (let optionKey in options) {
      updatedCookie += '; ' + optionKey
      let optionValue = options[optionKey]
      if (optionValue !== true) {
        updatedCookie += '=' + optionValue
      }
    }

    document.cookie = updatedCookie
  }

  /**
   * To delete a cookie, we can call it with a negative expiration date
   *
   * @param  {string} name
   */
  public static delete(name: string): void {
    CookieComponent.set(name, '', {
      'max-age': -1,
    })
  }
}

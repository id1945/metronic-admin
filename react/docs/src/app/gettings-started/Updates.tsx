/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'

export function Updates() {
  const {REACT_APP_THEME_NAME} = process.env

  return (
    <>
      <h1 className='anchor fw-bolder mb-5' id='overview'>
        <a href='#overview'></a>Updating &nbsp;
        <strong>{REACT_APP_THEME_NAME}</strong>&nbsp;
      </h1>
      <div className='py-4'>
        Like all HTML templates, you will need to manually handle all updates that we provide after
        purchase for free. The best practice is to always keep {REACT_APP_THEME_NAME}'s source
        folder on an entire separate folder within your project and then use {REACT_APP_THEME_NAME}{' '}
        as a development companion or support.
      </div>

      <div className='py-4'>
        Each update should be used independently without mixing it with the previous versions. This
        is because new updates may not have a 100% backward compatibility for elements within
        previous versions. Therefore, each update is considered as a new and better version of the
        theme.
      </div>

      <div className='pt-4'>
        Here's our recommended steps needed to update {REACT_APP_THEME_NAME} effectively:
        <ol className='py-3'>
          <li className='py-2'>
            Backup all your files (your project folder and {REACT_APP_THEME_NAME}'s's older
            version).
          </li>
          <li className='py-2'>
            Review {REACT_APP_THEME_NAME}s changelog to have a quick preview on what has been
            updated.
          </li>
          <li className='py-2'>
            Unzip the latest version of {REACT_APP_THEME_NAME} and then browse through the elements
            (layout, widgets, plugins, etc) that you have used on your project.
          </li>
          <li className='py-2'>Get the latest version use it instead the previous version.</li>
          <li className='py-2'>
            Run
            <code>yarn install</code>task to update 3rd party plugins with their latest versions.
          </li>
          <li className='py-2'>
            Compare your project's code vs the latest version of {REACT_APP_THEME_NAME}s code for
            the used elements.
          </li>
          <li className='py-2'>Manually replace the element HTML, CSS or JS where necessary.</li>
          <li className='py-2'>
            Save and test your project files with {REACT_APP_THEME_NAME}'s updated elements.
          </li>
        </ol>
        If something goes wrong, you can revert your updates by reusing your backup files.
      </div>
    </>
  )
}

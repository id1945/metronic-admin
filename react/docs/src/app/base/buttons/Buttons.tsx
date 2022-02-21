/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import {Example1BaseButtons} from './Example1BaseButtons'
import {Example2LightStyle} from './Example2LightStyle'
import {Example3BackgroundStyle} from './Example3BackgroundStyle'
import {Example4OutlinedDashedStyle} from './Example4OutlinedDashedStyle'
import {Example5ColorStyle} from './Example5ColorStyle'
import {Example6IconAndTextColorStyle} from './Example6IconAndTextColorStyle'
import {Example7ActiveStyle} from './Example7ActiveStyle'
import {Example8ActiveLightStyle} from './Example8ActiveLightStyle'
import {Example9ActiveColorStyle} from './Example9ActiveColorStyle'
import {Example10ActiveIconAndTextColorStyle} from './Example10ActiveIconAndTextColorStyle'
import {Example11Icons} from './Example11Icons'
import {Example12SocialButtons} from './Example12SocialButtons'
import {Example13LinkOptions} from './Example13LinkOptions'
import {Example14UtilityClasses} from './Example14UtilityClasses'

export function Buttons() {
  const {
    REACT_APP_THEME_NAME,
    REACT_APP_BOOTSTRAP_DOCS_LINK,
    REACT_APP_SASS_PATH,
    REACT_APP_SASS_VARIABLES_PATH,
  } = process.env
  return (
    <>
      <div className='pb-10'>
        <h1 className='anchor fw-bolder mb-5' id='overview'>
          <a href='#overview'></a>Overview
        </h1>
        <div className='py-5'>
          <strong>{REACT_APP_THEME_NAME}</strong>&nbsp; customizes the{' '}
          <a href={`${REACT_APP_BOOTSTRAP_DOCS_LINK}/components/buttons`} className='fw-bold'>
            Bootstrap Buttons
          </a>
          &nbsp; through the SASS variables in
          <code>{REACT_APP_SASS_VARIABLES_PATH}</code>and adds additonal options in
          <code>{REACT_APP_SASS_PATH}/buttons</code>.
        </div>
      </div>
      <Example1BaseButtons />
      <Example2LightStyle />
      <Example3BackgroundStyle />
      <Example4OutlinedDashedStyle />
      <Example5ColorStyle />
      <Example6IconAndTextColorStyle />
      <Example7ActiveStyle />
      <Example8ActiveLightStyle />
      <Example9ActiveColorStyle />
      <Example10ActiveIconAndTextColorStyle />
      <Example11Icons />
      <Example12SocialButtons />
      <Example13LinkOptions />
      <Example14UtilityClasses />
    </>
  )
}

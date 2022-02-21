/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {KTSVG} from '../../../_metronic/helpers'
import {CodeBlock} from '../../../_metronic/partials'

export function Example1ThemeColors() {
  const {REACT_APP_THEME_NAME, REACT_APP_SASS_VARIABLES_PATH, REACT_APP_BOOTSTRAP_DOCS_LINK} =
    process.env
  return (
    <div className='pb-10'>
      <h1 className='anchor fw-bolder mb-5' id='theme-color'>
        <a href='#theme-color'></a>Theme Colors
      </h1>
      <div className='py-5'>
        <strong>{REACT_APP_THEME_NAME}</strong>&nbsp;extends{' '}
        <a href={`${REACT_APP_BOOTSTRAP_DOCS_LINK}/customize/color/`} className='fw-bold'>
          Bootstrap Colors
        </a>
        &nbsp; system with extra variants to cover its own design system build on top of the
        Boostrap Standards. The extended theme color SASS variables are defined in
        <code>{REACT_APP_SASS_VARIABLES_PATH}</code>:
      </div>
      <CodeBlock language='scss' code={code} />
      <div className='py-5'>
        <div className='d-flex align-items-center rounded py-5 px-5 bg-light-warning'>
          <KTSVG
            path='/media/icons/duotune/general/gen044.svg'
            className='svg-icon svg-icon-3x svg-icon-warning me-5'
          />
          <div className='text-gray-600 fw-bold fs-6'>
            Custom variables that used to customize Bootstrap components are marked with
            <code>Custom variable</code>comment in
            <code>_variables.scss</code>&nbsp; file.
          </div>
        </div>
      </div>
    </div>
  )
}

const code = `// Theme colors
$theme-colors: (
    "white":      $white,  // custom color type
    "primary":    $primary,
    "secondary":  $secondary,
    "success":    $success,
    "info":       $info,
    "warning":    $warning,
    "danger":     $danger,
    "light":      $light,
    "dark":       $dark
) !default;

// Hover colors
$theme-active-colors: (
    "white":      $white-active,   // custom color type
    "primary":    $primary-active,
    "secondary":  $secondary-active,
    "success":    $success-active,
    "info":       $info-active,
    "warning":    $warning-active,
    "danger":     $danger-active,
    "light":      $light-active,
    "dark":       $dark-active
) !default;  // Custom variable

// Inverse colors
$theme-inverse-colors: (
    "white":      $white-inverse,
    "primary":    $primary-inverse,
    "secondary":  $secondary-inverse,
    "success":    $success-inverse,
    "info":       $info-inverse,
    "warning":    $warning-inverse,
    "danger":     $danger-inverse,
    "light":      $light-inverse,
    "dark":       $dark-inverse
) !default;  // Custom variable

// Light colors
$theme-light-colors: (
    "white":      $white-light,
    "primary":    $primary-light,
    "secondary":  $secondary-light,
    "success":    $success-light,
    "info":       $info-light,
    "warning":    $warning-light,
    "danger":     $danger-light,
    "light":      $light-light,
    "dark":       $dark-light
) !default;  // Custom variable

// Text colors
$theme-text-colors: (
    "white":      $white,
    "primary":    $primary,
    "secondary":  $dark,
    "success":    $success,
    "info":       $info,
    "warning":    $warning,
    "danger":     $danger,
    "light":      $light,
    "dark":       $dark,
    "muted":      $text-muted,
    "gray-100":   $gray-100,
    "gray-200":   $gray-200,
    "gray-300":   $gray-300,
    "gray-400":   $gray-400,
    "gray-500":   $gray-500,
    "gray-600":   $gray-600,
    "gray-700":   $gray-700,
    "gray-800":   $gray-800,
    "gray-900":   $gray-900
) !default;  // Custom variable`

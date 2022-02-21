import {toAbsoluteUrl} from '../../../helpers'

export function FallbackView() {
  return (
    <div className='splash-screen'>
      <img src={toAbsoluteUrl('/media/logos/logo-compact.svg')} alt='Start logo' />
      <span>Loading ...</span>
    </div>
  )
}

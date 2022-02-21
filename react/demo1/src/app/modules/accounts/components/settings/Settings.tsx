import React from 'react'
import {ProfileDetails} from './cards/ProfileDetails'
import {SignInMethod} from './cards/SignInMethod'
import {ConnectedAccounts} from './cards/ConnectedAccounts'
import {EmailPreferences} from './cards/EmailPreferences'
import {Notifications} from './cards/Notifications'
import {DeactivateAccount} from './cards/DeactivateAccount'

export function Settings() {
  return (
    <>
      <ProfileDetails />
      <SignInMethod />
      <ConnectedAccounts />
      <EmailPreferences />
      <Notifications />
      <DeactivateAccount />
    </>
  )
}

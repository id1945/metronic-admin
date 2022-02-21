import React, {FC} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {PageLink, PageTitle} from '../_metronic/layout/core'
import {Overview} from './gettings-started/Overview'
import {Accordion} from './base/Accordion'
import {Alerts} from './base/Alerts'
import {Badges} from './base/Badges'
import {Breadcrumb} from './base/Breadcrumb'
import {Bullets} from './base/Bullets'
import {Buttons} from './base/buttons/Buttons'
import {Cards} from './base/Cards'
import {Carousel} from './base/Carousel'
import {Forms} from './base/Forms'
import {HelpersBackground} from './base/HelpersBackground'
import {HelpersBorders} from './base/HelpersBorders'
import {HelpersFlexLayout} from './base/HelpersFlexLayout'
import {HelpersOpacity} from './base/HelpersOpacity'
import {HelpersText} from './base/HelpersText'
import {Indicator} from './base/Indicator'
import {Modal} from './base/Modal'
import {Overlay} from './base/Overlay'
import {Pagination} from './base/Pagination'
import {Pulse} from './base/Pulse'
import {Rating} from './base/Rating'
import {Rotate} from './base/Rotate'
import {Ribbon} from './base/Ribbon'
import {Separator} from './base/Separator'
import {Symbol} from './base/Symbol'
import {Tables} from './base/Tables'
import {Tabs} from './base/Tabs'
import {Utilities} from './base/utilities/Utilities'
import {NouiSlider} from './base/NouiSlider'
import {BootstrapIcons} from './icons/BootstrapIcons'
import {DuotuneIcons} from './icons/DuotuneIcons'
// import { StockholmIcons } from "./icons/StockholmIcons";
import {FontAwesomeIcons} from './icons/FontAwesomeIcons'
import {Changelog} from './gettings-started/Changelog'
import {CreatePage} from './gettings-started/CreatePage'
import {Deployment} from './gettings-started/Deployment'
import {Internationalization} from './gettings-started/Internationalization'
import {MockBackend} from './gettings-started/MockBackend'
import {References} from './gettings-started/References'
import {RTL} from './gettings-started/RTL'
import {SASSCustomization} from './gettings-started/SASSCustomization'
import {Skeleton} from './gettings-started/Skeleton'
import {DarkMode} from './gettings-started/DarkMode'
import {Updates} from './gettings-started/Updates'
import {QuickStart} from './gettings-started/QuickStart'
import {LineAwesomeIcons} from './icons/LineAwesomeIcons'

const gettingStartedBC: Array<PageLink> = [
  {
    title: 'Getting started',
    isSeparator: false,
  },
  {
    title: '',
    isSeparator: true,
  },
]

const baseBC: Array<PageLink> = [
  {
    title: 'Base',
    isSeparator: false,
  },
  {
    title: '',
    isSeparator: true,
  },
]

const baseHelpersBC: Array<PageLink> = [
  {
    title: 'Base',
    isSeparator: false,
  },
  {
    title: '',
    isSeparator: true,
  },
  {
    title: 'Helpers',
    isSeparator: false,
  },
  {
    title: '',
    isSeparator: true,
  },
]

const iconsBC: Array<PageLink> = [
  {
    title: 'Icons',
    isSeparator: false,
  },
  {
    title: '',
    isSeparator: true,
  },
]

const DocsPage: FC = () => (
  <Switch>
    <Route path='/docs/overview'>
      <PageTitle breadcrumbs={gettingStartedBC}>Overview</PageTitle>
      <Overview />
    </Route>
    <Route path='/docs/changelog'>
      <PageTitle breadcrumbs={gettingStartedBC}>Changelog</PageTitle>
      <Changelog />
    </Route>
    <Route path='/docs/create-a-page'>
      <PageTitle breadcrumbs={gettingStartedBC}>Create a page</PageTitle>
      <CreatePage />
    </Route>
    <Route path='/docs/deployment'>
      <PageTitle breadcrumbs={gettingStartedBC}>Deployment</PageTitle>
      <Deployment />
    </Route>
    <Route path='/docs/i18n'>
      <PageTitle breadcrumbs={gettingStartedBC}>Internationalization (i18n)</PageTitle>
      <Internationalization />
    </Route>
    <Route path='/docs/mock-backend'>
      <PageTitle breadcrumbs={gettingStartedBC}>Mock Back-end</PageTitle>
      <MockBackend />
    </Route>
    <Route path='/docs/quick-start'>
      <PageTitle breadcrumbs={gettingStartedBC}>Quick Start</PageTitle>
      <QuickStart />
    </Route>
    <Route path='/docs/references'>
      <PageTitle breadcrumbs={gettingStartedBC}>References</PageTitle>
      <References />
    </Route>
    <Route path='/docs/dark-mode'>
      <PageTitle breadcrumbs={gettingStartedBC}>Dark Mode</PageTitle>
      <DarkMode />
    </Route>
    <Route path='/docs/updates'>
      <PageTitle breadcrumbs={gettingStartedBC}>Updates</PageTitle>
      <Updates />
    </Route>
    <Route path='/docs/rtl'>
      <PageTitle breadcrumbs={gettingStartedBC}>RTL</PageTitle>
      <RTL />
    </Route>
    <Route path='/docs/sass-customization'>
      <PageTitle breadcrumbs={gettingStartedBC}>SASS Customization</PageTitle>
      <SASSCustomization />
    </Route>
    <Route path='/docs/skeleton'>
      <PageTitle breadcrumbs={gettingStartedBC}>Skeleton</PageTitle>
      <Skeleton />
    </Route>

    <Route path='/docs/accordion'>
      <PageTitle breadcrumbs={baseBC}>Accordion</PageTitle>
      <Accordion />
    </Route>
    <Route path='/docs/alerts'>
      <PageTitle breadcrumbs={baseBC}>Alerts</PageTitle>
      <Alerts />
    </Route>
    <Route path='/docs/badges'>
      <PageTitle breadcrumbs={baseBC}>Basges</PageTitle>
      <Badges />
    </Route>
    <Route path='/docs/breadcrumb'>
      <PageTitle breadcrumbs={baseBC}>Breadcrumb</PageTitle>
      <Breadcrumb />
    </Route>
    <Route path='/docs/bullets'>
      <PageTitle breadcrumbs={baseBC}>Bullets</PageTitle>
      <Bullets />
    </Route>
    <Route path='/docs/buttons'>
      <PageTitle breadcrumbs={baseBC}>Buttons</PageTitle>
      <Buttons />
    </Route>
    <Route path='/docs/cards'>
      <PageTitle breadcrumbs={baseBC}>Cards</PageTitle>
      <Cards />
    </Route>
    <Route path='/docs/carousel'>
      <PageTitle breadcrumbs={baseBC}>Carousel</PageTitle>
      <Carousel />
    </Route>
    <Route path='/docs/forms'>
      <PageTitle breadcrumbs={baseBC}>Forms</PageTitle>
      <Forms />
    </Route>
    <Route path='/docs/helpers/background'>
      <PageTitle breadcrumbs={baseHelpersBC}>Background</PageTitle>
      <HelpersBackground />
    </Route>
    <Route path='/docs/helpers/borders'>
      <PageTitle breadcrumbs={baseHelpersBC}>Borders</PageTitle>
      <HelpersBorders />
    </Route>
    <Route path='/docs/helpers/flex-layout'>
      <PageTitle breadcrumbs={baseHelpersBC}>Flex Layout</PageTitle>
      <HelpersFlexLayout />
    </Route>
    <Route path='/docs/helpers/opacity'>
      <PageTitle breadcrumbs={baseHelpersBC}>Opacity</PageTitle>
      <HelpersOpacity />
    </Route>
    <Route path='/docs/helpers/text'>
      <PageTitle breadcrumbs={baseHelpersBC}>Text</PageTitle>
      <HelpersText />
    </Route>
    <Route path='/docs/indicator'>
      <PageTitle breadcrumbs={baseBC}>Indicator</PageTitle>
      <Indicator />
    </Route>
    <Route path='/docs/modal'>
      <PageTitle breadcrumbs={baseBC}>Modal</PageTitle>
      <Modal />
    </Route>
    <Route path='/docs/overlay'>
      <PageTitle breadcrumbs={baseBC}>Overlay</PageTitle>
      <Overlay />
    </Route>
    <Route path='/docs/pagination'>
      <PageTitle breadcrumbs={baseBC}>Pagination</PageTitle>
      <Pagination />
    </Route>
    <Route path='/docs/pulse'>
      <PageTitle breadcrumbs={baseBC}>Pulse</PageTitle>
      <Pulse />
    </Route>
    <Route path='/docs/rating'>
      <PageTitle breadcrumbs={baseBC}>Rating</PageTitle>
      <Rating />
    </Route>
    <Route path='/docs/rotate'>
      <PageTitle breadcrumbs={baseBC}>Rotate</PageTitle>
      <Rotate />
    </Route>
    <Route path='/docs/ribbon'>
      <PageTitle breadcrumbs={baseBC}>Ribbon</PageTitle>
      <Ribbon />
    </Route>
    <Route path='/docs/separator'>
      <PageTitle breadcrumbs={baseBC}>Separator</PageTitle>
      <Separator />
    </Route>
    <Route path='/docs/symbol'>
      <PageTitle breadcrumbs={baseBC}>Symbol</PageTitle>
      <Symbol />
    </Route>
    <Route path='/docs/tables'>
      <PageTitle breadcrumbs={baseBC}>Tables</PageTitle>
      <Tables />
    </Route>
    <Route path='/docs/tabs'>
      <PageTitle breadcrumbs={baseBC}>Tabs</PageTitle>
      <Tabs />
    </Route>
    <Route path='/docs/utilities'>
      <PageTitle breadcrumbs={baseBC}>Utilities</PageTitle>
      <Utilities />
    </Route>
    <Route path='/docs/nouislider'>
      <PageTitle breadcrumbs={baseBC}>noUISlider</PageTitle>
      <NouiSlider />
    </Route>

    <Route path='/docs/icons/bootstrap'>
      <PageTitle breadcrumbs={baseBC}>Bootstrap Icons</PageTitle>
      <BootstrapIcons />
    </Route>

    <Route path='/docs/icons/duotune'>
      <PageTitle breadcrumbs={iconsBC}>Duotune</PageTitle>
      <DuotuneIcons />
    </Route>
    <Route path='/docs/icons/fontawesome'>
      <PageTitle breadcrumbs={iconsBC}>Font Awesome Icons</PageTitle>
      <FontAwesomeIcons />
    </Route>
    <Route path='/docs/icons/lineawesome'>
      <PageTitle breadcrumbs={iconsBC}>Line Awesome Icons</PageTitle>
      <LineAwesomeIcons />
    </Route>
    <Redirect from='/docs' exact={true} to='/docs/quick-start' />
    <Redirect to='/docs/quick-start' />
  </Switch>
)

export {DocsPage}

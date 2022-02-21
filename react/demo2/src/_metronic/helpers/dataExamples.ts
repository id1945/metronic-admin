export interface MessageModel {
  user: number
  type: 'in' | 'out'
  text: string
  time: string
  template?: boolean
}

const defaultMessages: Array<MessageModel> = [
  {
    user: 4,
    type: 'in',
    text: 'How likely are you to recommend our company to your friends and family ?',
    time: '2 mins',
  },
  {
    user: 2,
    type: 'out',
    text: 'Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.',
    time: '5 mins',
  },
  {
    user: 4,
    type: 'in',
    text: 'Ok, Understood!',
    time: '1 Hour',
  },
  {
    user: 2,
    type: 'out',
    text: 'You’ll receive notifications for all issues, pull requests!',
    time: '2 Hours',
  },
  {
    user: 4,
    type: 'in',
    text: 'You can unwatch this repository immediately by clicking here: <a href="https://keenthemes.com">Keenthemes.com</a>',
    time: '3 Hours',
  },
  {
    user: 2,
    type: 'out',
    text: 'Most purchased Business courses during this sale!',
    time: '4 Hours',
  },
  {
    user: 4,
    type: 'in',
    text: 'Company BBQ to celebrate the last quater achievements and goals. Food and drinks provided',
    time: '5 Hours',
  },
  {
    template: true,
    user: 2,
    type: 'out',
    text: '',
    time: 'Just now',
  },
  {
    template: true,
    user: 4,
    type: 'in',
    text: 'Right before vacation season we have the next Big Deal for you.',
    time: 'Just now',
  },
]

export interface UserInfoModel {
  initials?: {label: string; state: 'warning' | 'danger' | 'primary' | 'success' | 'info'}
  name: string
  avatar?: string
  email: string
  position: string
  online: boolean
}

const defaultUserInfos: Array<UserInfoModel> = [
  {
    name: 'Emma Smith',
    avatar: 'avatars/150-1.jpg',
    email: 'e.smith@kpmg.com.au',
    position: 'Art Director',
    online: false,
  },
  {
    name: 'Melody Macy',
    initials: {label: 'M', state: 'danger'},
    email: 'melody@altbox.com',
    position: 'Marketing Analytic',
    online: true,
  },
  {
    name: 'Max Smith',
    avatar: 'avatars/150-2.jpg',
    email: 'max@kt.com',
    position: 'Software Enginer',
    online: false,
  },
  {
    name: 'Sean Bean',
    avatar: 'avatars/150-4.jpg',
    email: 'sean@dellito.com',
    position: 'Web Developer',
    online: false,
  },
  {
    name: 'Brian Cox',
    avatar: 'avatars/150-15.jpg',
    email: 'brian@exchange.com',
    position: 'UI/UX Designer',
    online: false,
  },
  {
    name: 'Mikaela Collins',
    initials: {label: 'M', state: 'warning'},
    email: 'mikaela@pexcom.com',
    position: 'Head Of Marketing',
    online: true,
  },
  {
    name: 'Francis Mitcham',
    avatar: 'avatars/150-8.jpg',
    email: 'f.mitcham@kpmg.com.au',
    position: 'Software Arcitect',
    online: false,
  },

  {
    name: 'Olivia Wild',
    initials: {label: 'O', state: 'danger'},
    email: 'olivia@corpmail.com',
    position: 'System Admin',
    online: true,
  },
  {
    name: 'Neil Owen',
    initials: {label: 'N', state: 'primary'},
    email: 'owen.neil@gmail.com',
    position: 'Account Manager',
    online: true,
  },
  {
    name: 'Dan Wilson',
    avatar: 'avatars/150-6.jpg',
    email: 'dam@consilting.com',
    position: 'Web Desinger',
    online: false,
  },
  {
    name: 'Emma Bold',
    initials: {label: 'E', state: 'danger'},
    email: 'emma@intenso.com',
    position: 'Corporate Finance',
    online: true,
  },
  {
    name: 'Ana Crown',
    avatar: 'avatars/150-7.jpg',
    email: 'ana.cf@limtel.com',
    position: 'Customer Relationship',
    online: false,
  },
  {
    name: 'Robert Doe',
    initials: {label: 'A', state: 'info'},
    email: 'robert@benko.com',
    position: 'Marketing Executive',
    online: true,
  },
  {
    name: 'John Miller',
    avatar: 'avatars/150-17.jpg',
    email: 'miller@mapple.com',
    position: 'Project Manager',
    online: false,
  },
  {
    name: 'Lucy Kunic',
    initials: {label: 'L', state: 'success'},
    email: 'lucy.m@fentech.com',
    position: 'SEO Master',
    online: true,
  },
  {
    name: 'Ethan Wilder',
    avatar: 'avatars/150-10.jpg',
    email: 'ethan@loop.com.au',
    position: 'Accountant',
    online: true,
  },
]

const messageFromClient: MessageModel = {
  user: 4,
  type: 'in',
  text: 'Thank you for your awesome support!',
  time: 'Just now',
}

export interface AlertModel {
  title: string
  description: string
  time: string
  icon: string
  state: 'primary' | 'danger' | 'warning' | 'success' | 'info'
}

const defaultAlerts: Array<AlertModel> = [
  {
    title: 'Project Alice',
    description: 'Phase 1 development',
    time: '1 hr',
    icon: 'icons/duotune/technology/teh008.svg',
    state: 'primary',
  },
  {
    title: 'HR Confidential',
    description: 'Confidential staff documents',
    time: '2 hrs',
    icon: 'icons/duotune/general/gen044.svg',
    state: 'danger',
  },
  {
    title: 'Company HR',
    description: 'Corporeate staff profiles',
    time: '5 hrs',
    icon: 'icons/duotune/finance/fin006.svg',
    state: 'warning',
  },
  {
    title: 'Project Redux',
    description: 'New frontend admin theme',
    time: '2 days',
    icon: 'icons/duotune/files/fil023.svg',
    state: 'success',
  },
  {
    title: 'Project Breafing',
    description: 'Product launch status update',
    time: '21 Jan',
    icon: 'icons/duotune/maps/map001.svg',
    state: 'primary',
  },
  {
    title: 'Banner Assets',
    description: 'Collection of banner images',
    time: '21 Jan',
    icon: 'icons/duotune/general/gen006.svg',
    state: 'info',
  },
  {
    title: 'Icon Assets',
    description: 'Collection of SVG icons',
    time: '20 March',
    icon: 'icons/duotune/art/art002.svg',
    state: 'warning',
  },
]
export interface LogModel {
  code: string
  state: 'success' | 'danger' | 'warning'
  message: string
  time: string
}

const defaultLogs: Array<LogModel> = [
  {code: '200 OK', state: 'success', message: 'New order', time: 'Just now'},
  {code: '500 ERR', state: 'danger', message: 'New customer', time: '2 hrs'},
  {code: '200 OK', state: 'success', message: 'Payment process', time: '5 hrs'},
  {code: '300 WRN', state: 'warning', message: 'Search query', time: '2 days'},
  {code: '200 OK', state: 'success', message: 'API connection', time: '1 week'},
  {code: '200 OK', state: 'success', message: 'Database restore', time: 'Mar 5'},
  {code: '300 WRN', state: 'warning', message: 'System update', time: 'May 15'},
  {code: '300 WRN', state: 'warning', message: 'Server OS update', time: 'Apr 3'},
  {code: '300 WRN', state: 'warning', message: 'API rollback', time: 'Jun 30'},
  {code: '500 ERR', state: 'danger', message: 'Refund process', time: 'Jul 10'},
  {code: '500 ERR', state: 'danger', message: 'Withdrawal process', time: 'Sep 10'},
  {code: '500 ERR', state: 'danger', message: 'Mail tasks', time: 'Dec 10'},
]

export {defaultMessages, defaultUserInfos, defaultAlerts, defaultLogs, messageFromClient}

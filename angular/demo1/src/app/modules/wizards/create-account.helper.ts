interface ICreateAccount {
  accountType: 'personal' | 'corporate';
  accountTeamSize: '1-1' | '2-10' | '10-50' | '50+';
  accountName: string;
  accountPlan: '1' | '2' | '3';
  businessName: string;
  businessDescriptor: string;
  businessType: '1' | '2' | '3' | '4' | '5' | '6';
  businessDescription: string;
  businessEmail: string;
  nameOnCard: string;
  cardNumber: string;
  cardExpiryMonth: string;
  cardExpiryYear: string;
  cardCvv: string;
  saveCard: string;
}

const inits: ICreateAccount = {
  accountType: 'personal',
  accountTeamSize: '50+',
  accountName: '',
  accountPlan: '1',
  businessName: 'Keenthemes Inc.',
  businessDescriptor: 'KEENTHEMES',
  businessType: '1',
  businessDescription: '',
  businessEmail: 'corp@support.com',
  nameOnCard: 'Max Doe',
  cardNumber: '4111 1111 1111 1111',
  cardExpiryMonth: '1',
  cardExpiryYear: '2',
  cardCvv: '123',
  saveCard: '1',
};

export { ICreateAccount, inits };

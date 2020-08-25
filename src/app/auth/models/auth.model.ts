export interface AuthDb {
  uid?: string;
  displayName?: string;
  photoURL?: string;
  email?: string;
  emailVerified?: boolean;
  phoneNumber?: any;
  tenantId?: string;
  apiKey?: string;
  appName?: string;
  authDomain?: string;
  stsTokenManager?: {
    apiKey?: string;
    refreshToken?: string;
    accessToken?: string;
    expirationTime?: number;
  }
  redirectEventId?: any;
  lastLoginAt?: string;
  createdAt?: string;
}

export const initialAuthDb = {
  uid: null,
  displayName: null,
  photoURL: null,
  email: null,
  emailVerified: false,
  phoneNumber: null,
  tenantId: null,
  apiKey: null,
  appName: null,
  authDomain: null,
  stsTokenManager: {
    apiKey: null,
    refreshToken: null,
    accessToken: null,
    expirationTime: null
  },
  redirectEventId: null,
  lastLoginAt: null,
  createdAt: null,
};


export interface SignUpFormObj {
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  password: string;
  passwordConfirm: string;
}



export const authErrorMsgs = {
  email: 'Should be a valid email.',
  fullName: 'Enter your full name',
  firstName: 'Enter your first name',
  lastName: 'Enter your last name',
  dateOfBirth: 'Enter your date of birth',
  phone: 'Should be a valid phone number.',
  password: 'Should be between 3-20 characters',
  passwordConfirm: 'Should match password and be between 3-20 characters',
}




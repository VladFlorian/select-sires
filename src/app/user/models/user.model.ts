export interface UserDb {
  id?: string;
  deviceId?: string;
  photoURL?: string;
  phone?: any;
  fullName?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  dateOfBirth?: string;
  author?: {
    id?: string,
    name?: string,
  };
  authored?: any;
  editor?: {
    id?: string,
    name?: string,
  };
  edited?: any;
  lastLogin?: any;
}


export const initialUserDb = {
  id: null,
  deviceId: null,
  photoURL: null,
  email: '',
  phone: '',
  fullName: '',
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  author: {
    id: null,
    name: null,
  },
  editor: {
    id: null,
    name: null,
  },
  authored: new Date(),
  edited: new Date(),
  lastLogin: new Date()
};

  
export const userErrorMsgs = {
  name: 'Enter name.',
}
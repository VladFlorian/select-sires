export interface ErrorDb {
  id?: string;
  error?: any;
  actionType?: any;
  payload?: any;
  timestamp?: any;
  clientId?: string;
  author?: {
    name?: string;
    id?: string
  }
  authored?: any;
  editor?: {
    name?: string;
    id?: string
  }
  edited?: any;
}

export const initialErrorDb = {
  id: null,
  error: null,
  actionType: null,
  payload: null,
  timestamp: new Date(),
  clientId: null,
  author: {
    name: null,
    id: null,
  },
  authored: new Date(),
  editor: {
    name: null,
    id: null,
  },
  edited: new Date()
};




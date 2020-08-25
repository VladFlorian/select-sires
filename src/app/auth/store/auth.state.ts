//-------------- Data Models -----------------------------------//
import { AuthDb } from './../models/auth.model';
import { initialAuthDb } from './../models/auth.model';

export interface AuthState {
    authUser: AuthDb;
    authenticated: boolean;
}

export const AuthInitialState: AuthState = {
    authUser: initialAuthDb,
    authenticated: false,
};

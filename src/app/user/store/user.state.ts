import { UserDb, initialUserDb } from './../models/user.model';

export interface UserState {
    userObj: UserDb;
}

export const UserStateInitialState: UserState = {
    userObj: initialUserDb,
};

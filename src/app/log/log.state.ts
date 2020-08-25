import { LogDb} from './models/log.model';

export interface LogState {
    logs: LogDb [],
}

export const LogInitialState: LogState = {
    logs: [],
};

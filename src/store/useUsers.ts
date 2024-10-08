import { createStore } from './store';


export interface User {
        user_id: string;
        ticket: number;
        refs: string[];
        get_ticket: boolean;
        premium: boolean;
        from_ref: string;
        lang: string;
        photo: string;
        username: string;
        task: {
                task1: boolean;
                task2: boolean;
                task3: boolean;
                task4: boolean;
                task5: boolean;
                task6: boolean;
        }
        _id?: string;
}

export interface WaitlistUser {
        exist: boolean
}

export interface Leaderboard {
        users: User[],
        rank: number
}

export const defaultStateUser: User = {
        user_id: "",
        ticket: 0,
        refs: [],
        get_ticket: false,
        premium: false,
        lang: "",
        from_ref: "",
        photo: "",
        username: "",
        task: {
                task1: false,
                task2: false,
                task3: false,
                task4: false,
                task5: false,
                task6: false,
        }
};

const defaultStateWaitlistUser: WaitlistUser = {
        exist: false
};

const defaultStateLeaderboard: Leaderboard = {
        users: [],
        rank: 0,
}

export const [useUser] = createStore(defaultStateUser);
export const [useWaitlistUser] = createStore(defaultStateWaitlistUser);
export const [useLeaderboard] = createStore(defaultStateLeaderboard)
export interface ICalculated {
    amount: number,
    from: string,
    to: string
};

export interface IData {
        info: {
            timestamp: number,
            quote: number
        },
        query: {
            from: string,
            to: string,
            amount: number
        },
        success: boolean,
        result: number
};

export interface IRates {
        quotes: {
            [key: string]: number
        },
        source: string,
        success: boolean,
        timestamp: number
};
    
export interface IState {
    data: {
        query: {
            to: string,
        },
        result: number
    },
    rates: {
        success: boolean,
        quotes: {
            [key: string]: number
        }
    },
    loading: boolean,
    error: null | {},
};
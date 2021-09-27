import {ACTIONS_TYPE, CurrencyReducersTypes} from './actions';


export type CurrencyType = {
    currencyName: string;
    buyRate: number;
    sellRate: number;
};
export type CurrencyState = {
    currencies: Array<CurrencyType>;
    currentCurrency: string;
    isBuying: boolean;
    amountOfRUR: string;
    amountOfCurrency: string;
};

const initialState: CurrencyState = {
    currencies: [
        {
            currencyName: 'USD',
            buyRate: 73.8,
            sellRate: 68.99,
        },
        {
            currencyName: 'EUR',
            buyRate: 86.05,
            sellRate: 84.33,
        },
        {
            currencyName: 'BYN',
            buyRate: 30.90,
            sellRate: 29,
        },
    ],
    currentCurrency: 'USD',
    isBuying: true,
    amountOfRUR: '',
    amountOfCurrency: '',
};

export const currencyReducer = (state: CurrencyState = initialState, action: CurrencyReducersTypes): CurrencyState => {

    switch (action.type) {
        case ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE:
            return {
                ...state,
                amountOfRUR: action.amountOfRUR,
                amountOfCurrency: action.amountOfCurrency,

            }
        case ACTIONS_TYPE.CHANGE_CHANGE_ACTION:
            return {
                ...state,
               isBuying: action.isBuying,
                amountOfRUR: '',
                amountOfCurrency: ''
            }
        case ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY:
            return {
                ...state,
                currentCurrency: action.currentCurrency,
                amountOfRUR: '',
                amountOfCurrency: ''
            }
        default:
            return state;
    }
};

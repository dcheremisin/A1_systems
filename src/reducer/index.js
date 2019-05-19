const initialState = {
    type: null,
    page: 'home',
    formPage: 1,
    individual_organization: {
        OGRNIP: '',
        SNILS: '',
        INN: '',
        E: '',
    },
    organization: {
        O: '',
        OU: '',
        T: '',
        OGRN: '',
        SNILS: '',
        INN: '',
        E: '',
    },
    personal: {
        CN: '',
        SN: '',
        G: '',
        C: '',
        S: '',
        L: '',
        STREET: '',
    },
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_TYPE':
            return {
                ...state,
                type: action.selectedType,
            };
        case 'CLEAR_FORM_VALUES':
            return {
                ...state,
                individual_organization: {
                    OGRNIP: '',
                    SNILS: '',
                    INN: '',
                    E: '',
                },
                organization: {
                    O: '',
                    OU: '',
                    T: '',
                    OGRN: '',
                    SNILS: '',
                    INN: '',
                    E: '',
                },
                personal: {
                    CN: '',
                    SN: '',
                    G: '',
                    C: '',
                    S: '',
                    L: '',
                    STREET: '',
                },
            };

        case 'SET_PAGE':
            return {
                ...state,
                page: action.page,
            };

        case 'SET_FORM_PAGE':
            return {
                ...state,
                formPage: action.page,
            };

        default:
            return state;
    }
};
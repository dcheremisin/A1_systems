const validates = {
    individual_organization: {
        OGRNIP: {"type":"number","fieldLength":13,"required":true},
        SNILS: {"type":"number","fieldLength":11,"required":true},
        INN: {"type":"number","fieldLength":12,"required":true},
        E: {"type":"email","required":true},
    },
    organization: {
        O: {"type":"text","required":true},
        OU: {"type":"text","required":true},
        T: {"type":"text","required":true},
        OGRN: {"type":"number","fieldLength":13,"required":true},
        SNILS: {"type":"number","fieldLength":11,"required":true},
        INN: {"type":"number","fieldLength":12,"required":true},
        E: {"type":"email","required":true},
    },
    personal: {
        CN: {"type":"text","required":true},
        SN: {"type":"text","required":true},
        G: {"type":"text","required":true},
        C: {"type":"text","required":true},
        S: {"type":"text","required":true},
        L: {"type":"text","required":true},
        STREET: {"type":"text","required":true},
    },
};

const regexpEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

export {
    validates,
    regexpEmail
};
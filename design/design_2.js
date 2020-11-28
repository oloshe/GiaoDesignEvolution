const menu = {
    荷包蛋: {
        egg: 2,
        oil: true,
        sauce: true,
    },
    盐焗鸡: {
        chicken: 1,
        saltBaked: true,
        salt: '1kg',
        cookingWine: '50g',
        ginger: true,
        shallots: true,
    },
    辣子鸡: {
        chicken: 1,
        chilli: '800g',
        oil: true,
        ginger: true,
        garlic: true,
        sugar: true,
        shallots: true,
        salt: true,
        aginomoto: true,
    },
    土豆丝: {
        tomato: 2,
        shredding: true,
        vinegar: '10g',
        oil: true,
        chilli: '30g',
        shallots: true,
        garlic: true,
        cookingWine: '20g',
    },
}
function cook({ dish }) {
    return menu[dish] || {}
}

export default cook
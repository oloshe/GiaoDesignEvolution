const 主料 = {
    egg: 'egg',
    chicken: 'chicken',
    tomato: 'tomato',
}

const 辅料 = {
    ginger: 'ginger',
    shallots: 'shallots',
    garlic: 'garlic',
}

const 调料 = {
    oil: 'oil',
    sauce: 'sauce',
    cookingWine: 'cookingWine',
    vinegar: 'vinegar',
    chilli: 'chilli',
    sugar: 'sugar',
    aginomoto: 'aginomoto',
}

const 工序 = {
    saltBaked: 'saltBaked',
    shredding: 'shredding',
    fry: 'fry',
}

const menu = {
    荷包蛋: {
        [工序.fry]: true,
        [主料.egg]: 2,
        [调料.oil]: true,
        [调料.sauce]: true,
    },
    盐焗鸡: {
        [工序.saltBaked]: true,
        [主料.chicken]: 1,
        [调料.salt]: '1kg',
        [调料.cookingWine]: '50g',
        [辅料.ginger]: true,
        [辅料.shallots]: true,
    },
    辣子鸡: {
        [工序.fry]: true,
        [主料.chicken]: 1,
        [调料.chilli]: '800g',
        [调料.sugar]: true,
        [调料.salt]: true,
        [调料.aginomoto]: true,
        [调料.oil]: true,
        [辅料.ginger]: true,
        [辅料.garlic]: true,
        [辅料.shallots]: true,
    },
    土豆丝: {
        [工序.shredding]: true,
        [主料.tomato]: 2,
        [调料.vinegar]: '10g',
        [调料.oil]: true,
        [调料.chilli]: '30g',
        [调料.cookingWine]: '20g',
        [辅料.shallots]: true,
        [辅料.garlic]: true,
    },
}
function cook({ dish }) {
    return menu[dish] || {}
}

export default cook
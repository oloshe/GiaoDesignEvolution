
/** 主料 */
const M = {
    /** 鸡蛋 */
    egg: 'egg',
    /** 鸡 */
    chicken: 'chicken',
    /** 土豆 */
    tomato: 'tomato',
}

/** 辅料 */
const F = {
    /** 姜 */
    ginger: 'ginger',
    /** 葱 */
    shallots: 'shallots',
    /** 蒜 */
    garlic: 'garlic',
}

/** 调料 */
const _ = {
    /** 油 */
    oil: 'oil',
    /** 酱油 */
    sauce: 'sauce',
    /** 料酒 */
    cookingWine: 'cookingWine',
    /** 醋 */
    vinegar: 'vinegar',
    /** 辣椒 */
    chilli: 'chilli',
    /** 糖 */
    sugar: 'sugar',
    /** 味精 */
    aginomoto: 'aginomoto',
}

/** 工序 */
const $ = {
    /** 盐焗 */
    saltBaked: 'saltBaked',
    /** 切片 */
    shredding: 'shredding',
    /** 油炒 */
    fry: 'fry',
}

const menu = {
    荷包蛋: [
        [M.egg, 2],
        [$.fry, true],
        [_.oil, true],
        [_.sauce, true],
    ],
    盐焗鸡: [
        [M.chicken, 1],
        [$.saltBaked, true],
        [_.salt, '1kg'],
        [_.cookingWine, '50g'],
        [F.ginger, true],
        [F.shallots, true],
    ],
    辣子鸡: [
        [M.chicken, 1],
        [$.fry, true],
        [_.chilli, '800g'],
        [_.sugar, true],
        [_.salt, true],
        [_.aginomoto, true],
        [_.oil, true],
        [F.ginger, true],
        [F.garlic, true],
        [F.shallots, true],
    ],
    土豆丝: [
        [M.tomato, 2],
        [$.shredding, true],
        [_.vinegar, '10g'],
        [_.oil, true],
        [_.chilli, '30g'],
        [_.cookingWine, '20g'],
        [F.shallots, true],
        [F.garlic, true],
    ],
}
function cook({ dish }) {
    let arr = menu[dish] || []
    let process = {};
    arr.forEach(item => {
        process[item[0]] = item[1]
    })
    return process
}

export default cook
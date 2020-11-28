
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
        $.fry,
        _.oil,
        _.sauce,
    ],
    盐焗鸡: [
        [M.chicken, 1],
        $.saltBaked,
        [_.salt, '1kg'],
        [_.cookingWine, '50g'],
        F.ginger,
        F.shallots,
    ],
    辣子鸡: [
        [M.chicken, 1],
        $.fry,
        [_.chilli, '800g'],
        _.sugar,
        _.salt,
        _.aginomoto,
        _.oil,
        F.ginger,
        F.garlic,
        F.shallots,
    ],
    土豆丝: [
        [M.tomato, 2],
        $.shredding,
        [_.vinegar, '10g'],
        _.oil,
        [_.chilli, '30g'],
        [_.cookingWine, '20g'],
        F.shallots,
        F.garlic,
    ],
}
function cook({ dish }) {
    let arr = menu[dish] || []
    let process = {};
    arr.forEach(item => {
        if (typeof item === 'string') {
            return process[item] = true
        }
        process[item[0]] = item[1]
    })
    return process
}

export default cook
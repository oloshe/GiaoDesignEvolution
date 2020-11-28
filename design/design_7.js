
/** 主料 */
const M = {
    /** 鸡蛋 */
    egg: 'egg',
    鸡蛋: 'egg',
    /** 鸡 */
    chicken: 'chicken',
    鸡: 'chicken',
    /** 土豆 */
    tomato: 'tomato',
    土豆: 'tomato',
    /** 米饭 */
    rice: 'rice',
    米饭: 'rice',
    /** 可乐 */
    cola: 'cola',
    可乐: 'cola',
}, 主料 = M

/** 辅料 */
const F = {
    /** 姜 */
    ginger: 'ginger',
    姜: 'ginger',
    /** 葱 */
    shallots: 'shallots',
    葱: 'shallots',
    /** 蒜 */
    garlic: 'garlic',
    蒜: 'garlic',
}, 辅料 = F

/** 调料 */
const _ = {
    /** 油 */
    oil: 'oil',
    油: 'oil',
    /** 酱油 */
    sauce: 'sauce',
    酱油: 'sauce',
    /** 料酒 */
    cookingWine: 'cookingWine',
    料酒: 'cookingWine',
    /** 醋 */
    vinegar: 'vinegar',
    醋: 'vinegar',
    /** 辣椒 */
    chilli: 'chilli',
    辣椒: 'chilli',
    /** 糖 */
    sugar: 'sugar',
    糖: 'sugar',
    /** 盐 */
    salt: 'salt',
    盐: 'salt',
    /** 味精 */
    aginomoto: 'aginomoto',
    味精: 'aginomoto',
}, 调料 = _

/** 工序 */
const $ = {
    /** 盐焗 */
    saltBaked: 'saltBaked',
    盐焗: 'saltBaked',
    /** 切片 */
    shredding: 'shredding',
    切片: 'shredding',
    /** 油炒 */
    fry: 'fry',
    油炒: 'fry',
    /** 煮 */
    cook: 'cook',
    煮: 'cook',
}, 工序 = $

/** 菜单 */
const menu = {
    可乐: [
        M.cola
    ],
    米饭: [
        $.cook,
        M.rice,
    ],
    荷包蛋: [
        $.fry,
        [M.egg, 2],
        _.oil, _.sauce,
    ],
    盐焗鸡: [
        $.saltBaked,
        [M.chicken, 1],
        [_.salt, '1kg'],
        [_.cookingWine, '50g'],
        F.ginger, F.shallots,
    ],
    辣子鸡: [
        $.fry,
        [M.chicken, 1],
        _.sugar, _.salt, _.aginomoto, _.oil,
        [_.chilli, '800g'],
        F.ginger, F.garlic, F.shallots
    ],
    土豆丝: [
        $.shredding,
        [M.tomato, 2],
        _.oil,
        [_.vinegar, '10g'],
        [_.chilli, '30g'],
        [_.cookingWine, '20g'],
        F.shallots, F.garlic,
    ],
}

// 套餐
const setMeal = {
    套餐A: [menu.辣子鸡, menu.米饭],
    套餐B: [menu.荷包蛋, menu.米饭],
    套餐C: [menu.辣子鸡, menu.米饭, menu.可乐],
}

/**
 * @param {{
 *  dish: String,
 * }} option 
 * @returns {Object|Array}
 */
function cook({ dish }) {
    // 从菜单中寻找
    let arr = menu[dish]
    if (arr) {
        return _exec(arr)
    } else {
        return setMeal[dish] && setMeal[dish].map(array => _exec(array))
    }
    function _exec(arr, ref = {}) {
        if (arr && arr.length) {
            arr.forEach(item => {
                if (!item) return
                if (typeof item === 'string') {
                    return ref[item] = true
                }
                ref[item[0]] = item[1]
            })
        }
        return ref
    }
}

export default cook
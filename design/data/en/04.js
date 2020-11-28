import $ from './01.js'
import M from './02.js'
import _ from './03.js'
/** 菜单 */
const menu = {
    cola: [
        M.cola
    ],
    rice: [
        $.cook,
        M.rice,
    ],
    hebaodan: [
        $.fry,
        [M.egg, 2],
        _.oil, _.sauce,
    ],
    yanjuji: [
        $.saltBaked,
        [M.chicken, 1],
        _.ginger, _.shallots,
        [_.salt, '1kg'],
        [_.cookingWine, '50g'],
    ],
    laziji: [
        $.fry,
        [M.chicken, 1],
        _.sugar, _.salt, _.aginomoto, _.oil,
        _.ginger, _.garlic, _.shallots,
        [_.chilli, '800g'],
    ],
    tudousi: [
        $.shredding,
        [M.tomato, 2],
        _.oil, _.shallots, _.garlic,
        [_.vinegar, '10g'],
        [_.chilli, '30g'],
        [_.cookingWine, '20g'],
    ],
}
export default menu
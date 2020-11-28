import zh_CN from "./zh_CN/00.js"
import en from "./en/00.js"
export const i18n = ['en', 'zh_CN']
/**
 * @param {'zh_CN'|'en'} language 
 */
export default function (language) {
    if (!i18n.includes(language)) {
        console.error(`No Language ${language}`)
    }
    let menu, setMeal
    if (language === 'zh_CN') {
        menu = zh_CN.menu
        setMeal = zh_CN.setMeal
    } else if (language === 'en') {
        menu = en.menu
        setMeal = en.setMeal
    }
    return {
        menu,
        setMeal,
        /**
         * @param {{dish:String}}
         * @returns {Array}
         */
        cook({ dish }) {
            let menuItem = menu[dish]
            return menuItem
                ? [_exec(menuItem)]
                : setMeal[dish]
                    ? setMeal[dish].map(array => _exec(array))
                    : []
        }
    }
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
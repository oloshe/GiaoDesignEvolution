import rs from 'readline-sync';
import { default as _export, i18n } from "./data/export.js";
;(function () {
    orderSystem()
})()

function orderSystem() {
    while (1) {
        let index = rs.keyInSelect(i18n, 'Please Select Language:')
        if (index == -1) break
        let { menu, setMeal, cook } = _export(i18n[index]);
        const menuKeys = Object.keys(menu), setMealKeys = Object.keys(setMeal)
        while (1) {
            index = rs.keyInSelect([...menuKeys,...setMealKeys], 'Please Select food:')
            if (index == -1) break
            let dish = index >= menuKeys.length ? setMealKeys[index-menuKeys.length] : menuKeys[index]
            console.log(dish)
            console.log(cook({ dish }))
        }
    }
}
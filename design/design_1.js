
function cook(options) {
    let { dish } = options
    if (dish === '荷包蛋') {
        return {
            egg: true,
            oil: true,
            sauce: true,
        }
    } else if (dish === '盐焗鸡') {
        return {
            chicken: true,
            saltBaked: true,
            salt: true,
            cookingWine: true,
            ginger: true,
            shallots: true,
        }
    } else if (dish === '土豆丝') {
        return {
            tomato: true,
            shredding: true,
            vinegar: true,
            oil: true,
            chilli: true,
            shallots: true,
            garlic: true,
            cookingWine: true,
        }
    }
}
export default cook
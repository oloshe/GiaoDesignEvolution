import { test, expect, describe } from '@jest/globals';
import d1 from "../design/design_1";
import d2 from "../design/design_2";
import d3 from "../design/design_3";
import d4 from "../design/design_4";
import d5 from "../design/design_5";
import d6 from "../design/design_6";
import d7 from "../design/design_7";
import d8 from "../design/design_8";
import _export from '../design/data/export'


describe('荷包蛋的测试', () => {
    test('d1的荷包蛋', () => {
        expect(d1({ dish: '荷包蛋' })).toEqual({ egg: true, oil: true, sauce: true })
    })
    test('d2的荷包蛋', () => {
        expect(d2({ dish: '荷包蛋' })).toEqual({ egg: 2, oil: true, sauce: true })
    })
    const rightEgg = {
        egg: 2,
        fry: true,
        oil: true,
        sauce: true,
    }
    test('d3的荷包蛋', () => {
        expect(d3({ dish: '荷包蛋' })).toEqual(rightEgg)
    })
    test('d4的荷包蛋', () => {
        expect(d4({ dish: '荷包蛋' })).toEqual(rightEgg)
    })
    test('d5的荷包蛋', () => {
        expect(d5({ dish: '荷包蛋' })).toEqual(rightEgg)
    })
    test('d6的荷包蛋', () => {
        expect(d6({ dish: '荷包蛋' })).toEqual(rightEgg)
    })
})

describe('套餐测试', () => {
    test('d7的套餐A', () => {
        expect(d7({ dish: '套餐A' })).toEqual([
            {
                fry: true,
                chicken: 1,
                sugar: true,
                salt: true,
                aginomoto: true,
                oil: true,
                chilli: '800g',
                ginger: true,
                garlic: true,
                shallots: true
            },
            { cook: true, rice: true }
        ])
    })

    test('d8的套餐', () => {
        let { cook, menu, setMeal } = d8('zh_cn');
        console.log(setMeal)
        // expect(d8('zh_cn').cook({ dish: '套餐A' })).toEqual([
        //     {
        //         fry: true,
        //         chicken: 1,
        //         sugar: true,
        //         salt: true,
        //         aginomoto: true,
        //         oil: true,
        //         chilli: '800g',
        //         ginger: true,
        //         garlic: true,
        //         shallots: true
        //     },
        //     { cook: true, rice: true }
        // ])
    })
})

describe('i18n的测试', () => {
    const tudousi = [
        {
            shredding: true,
            tomato: 2,
            oil: true,
            shallots: true,
            garlic: true,
            vinegar: '10g',
            chilli: '30g',
            cookingWine: '20g'
        }
    ], taocanC = [
        {
            fry: true,
            chicken: 1,
            sugar: true,
            salt: true,
            aginomoto: true,
            oil: true,
            ginger: true,
            garlic: true,
            shallots: true,
            chilli: '800g'
        },
        { cook: true, rice: true },
        { cola: true }
    ]
    test('中文 zh_cn', () => {
        const { cook } = _export('zh_cn')
        expect(cook({ dish: '土豆丝' })).toEqual(tudousi)
        expect(cook({ dish: '套餐C' })).toEqual(taocanC)
    })
    test('英文 en', () => { 
        const { cook } = _export('en')
        expect(cook({ dish: 'tudousi' })).toEqual(tudousi)
        expect(cook({ dish: 'pC' })).toEqual(taocanC)
    })
});
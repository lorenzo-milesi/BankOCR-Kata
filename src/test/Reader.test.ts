import {expect} from 'chai';
import 'mocha';
import Reader from "../Reader";
import * as numbers from "../Data/Numbers";

describe('Reader Test', () => {

    const reader = new Reader();

    it('Should parse single numbers', () => {
        expect(reader.read(numbers.ZERO)).to.equal(0);
        expect(reader.read(numbers.ONE)).to.equal(1);
        expect(reader.read(numbers.TWO)).to.equal(2);
        expect(reader.read(numbers.THREE)).to.equal(3);
        expect(reader.read(numbers.FOUR)).to.equal(4);
        expect(reader.read(numbers.FIVE)).to.equal(5);
        expect(reader.read(numbers.SIX)).to.equal(6);
        expect(reader.read(numbers.SEVEN)).to.equal(7);
        expect(reader.read(numbers.EIGHT)).to.equal(8);
        expect(reader.read(numbers.NINE)).to.equal(9);
    });

});
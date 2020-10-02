import {expect} from 'chai';
import 'mocha';
import Reader from "../Reader";
import * as numbers from "../Data/Numbers";

describe('Reader Test', () => {

    const reader = new Reader();

    it('Should parse single numbers', () => {
        expect(reader.read(numbers.ZERO)).to.equal(0);
    });

});
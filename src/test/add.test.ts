import add from "./add";
import {expect} from 'chai';
import 'mocha';

describe('Add function', () => {
    it('should return correct sum', () => {
        expect(add(2, 2)).to.equal(4);
    });
});
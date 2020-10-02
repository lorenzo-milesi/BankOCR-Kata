import {expect} from 'chai';
import 'mocha';
import Reader from "../Reader";
import * as numbers from "../Data/Numbers";

describe('Reader Test', () => {

    it('Should parse single numbers', () => {
        expect(Reader.readNumber(numbers.ZERO)).to.equal('0');
        expect(Reader.readNumber(numbers.ONE)).to.equal('1');
        expect(Reader.readNumber(numbers.TWO)).to.equal('2');
        expect(Reader.readNumber(numbers.THREE)).to.equal('3');
        expect(Reader.readNumber(numbers.FOUR)).to.equal('4');
        expect(Reader.readNumber(numbers.FIVE)).to.equal('5');
        expect(Reader.readNumber(numbers.SIX)).to.equal('6');
        expect(Reader.readNumber(numbers.SEVEN)).to.equal('7');
        expect(Reader.readNumber(numbers.EIGHT)).to.equal('8');
        expect(Reader.readNumber(numbers.NINE)).to.equal('9');
    });

    it('Should parse single entries', () => {
        let entry: string =
            " _  _  _  _  _  _  _  _  _ " +
            "| || || || || || || || || |" +
            "|_||_||_||_||_||_||_||_||_|";
        expect(Reader.readEntry(entry)).to.equal('000000000');

        entry =
            "                           " +
            "  |  |  |  |  |  |  |  |  |" +
            "  |  |  |  |  |  |  |  |  |";
        expect(Reader.readEntry(entry)).to.equal('111111111');

        entry =
            " _  _  _  _  _  _  _  _  _ " +
            " _| _| _| _| _| _| _| _| _|" +
            "|_ |_ |_ |_ |_ |_ |_ |_ |_ ";
        expect(Reader.readEntry(entry)).to.equal('222222222');

        entry =
            " _  _  _  _  _  _  _  _  _ " +
            " _| _| _| _| _| _| _| _| _|" +
            " _| _| _| _| _| _| _| _| _|";
        expect(Reader.readEntry(entry)).to.equal('333333333');

        entry =
            "                           " +
            "|_||_||_||_||_||_||_||_||_|" +
            "  |  |  |  |  |  |  |  |  |";
        expect(Reader.readEntry(entry)).to.equal('444444444');

        entry =
            " _  _  _  _  _  _  _  _  _ " +
            "|_ |_ |_ |_ |_ |_ |_ |_ |_ " +
            " _| _| _| _| _| _| _| _| _|";
        expect(Reader.readEntry(entry)).to.equal('555555555');

        entry =
            " _  _  _  _  _  _  _  _  _ " +
            "|_ |_ |_ |_ |_ |_ |_ |_ |_ " +
            "|_||_||_||_||_||_||_||_||_|";
        expect(Reader.readEntry(entry)).to.equal('666666666');

        entry =
            " _  _  _  _  _  _  _  _  _ " +
            "  |  |  |  |  |  |  |  |  |" +
            "  |  |  |  |  |  |  |  |  |";
        expect(Reader.readEntry(entry)).to.equal('777777777');

        entry =
            " _  _  _  _  _  _  _  _  _ " +
            "|_||_||_||_||_||_||_||_||_|" +
            "|_||_||_||_||_||_||_||_||_|";
        expect(Reader.readEntry(entry)).to.equal('888888888');

        entry =
            " _  _  _  _  _  _  _  _  _ " +
            "|_||_||_||_||_||_||_||_||_|" +
            " _| _| _| _| _| _| _| _| _|";
        expect(Reader.readEntry(entry)).to.equal('999999999');

        entry =
            "    _  _     _  _  _  _  _ " +
            "  | _| _||_||_ |_   ||_||_|" +
            "  ||_  _|  | _||_|  ||_| _|"
        expect(Reader.readEntry(entry)).to.equal('123456789');
    });
});
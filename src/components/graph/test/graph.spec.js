
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { changeMonth } from '../impl/actions';

configure({ adapter: new Adapter() });

describe("Graph actions test.", () => {

    test('Check changeMonth', () => {

        const changeMonthTest = changeMonth('test');

        expect(changeMonthTest).toEqual({ type: 'CHANGE_MONTH', month: 'test' });
    });
});

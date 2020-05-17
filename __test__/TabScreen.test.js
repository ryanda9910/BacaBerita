import 'react-native';
import React from 'react';
import TabScreens from '../src/screens/Tabscreen';
import renderer from 'react-test-renderer';

jest.mock("../src/screens/Tabscreen");

test('Tabscreen Snapshot',()=>{
    const snap = renderer.create(
        <TabScreens />
    ).toJSON();
expect(snap).toMatchSnapshot();
});


describe('a Text', () => {
    it('should be present', () => {
        let tree = renderer.create(<TabScreens />
            ).toJSON()
    expect((tree, 'Text')).toBeDefined()
       
    })

})

import 'react-native';
import React from 'react';
import Modal from '../src/components/modal';
import renderer from 'react-test-renderer';

jest.mock("../src/components/modal");

test('Modal Components Snapshot',()=>{
    const snap = renderer.create(
        <Modal />
    ).toJSON();
expect(snap).toMatchSnapshot();
});


describe('a Text', () => {
    it('should be present', () => {
        let tree = renderer.create(<Modal />
            ).toJSON()
    expect((tree, 'Text')).toBeDefined()
       
    })

})

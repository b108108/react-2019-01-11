import React from 'react';
import Enzyme, {render, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CommentList from '../article-list';
import mockedComments from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

describe('Comment List', function () {
    it('should render', () => {
        const wrapper = mount(
            <CommentList comments = {mockedComments[0].comments}/>
        )

        expect(wrapper.find('.test--comment__list').length)
            .toEqual(1);
    });

    it('should render without open comment', () => {
        const wrapper = render(
            <CommentList comments = {mockedComments[0].comments} />
        )

        expect(wrapper.find('.test--comment__button').length)
            .toEqual(1);

        expect(wrapper.find('.test--comment__list').length)
            .toEqual(0);
    });

    it('should show comment text after click on button', () => {
        const wrapper = mount(
            <CommentList comments = {mockedComments[0].comments} isOpen />
        )

        wrapper.find('.test--comment__button').at(0).simulate('click');

        expect(wrapper.find('.test--comment__list').length)
            .toEqual(5);
    });
});
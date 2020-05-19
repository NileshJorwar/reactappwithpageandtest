import React from "react";
import {shallow} from "enzyme"
import NewPage from "./NewPage";

describe("NewPage", () => {
    it('should render newpage', function () {
        const wrapper = shallow(<NewPage/>);
        expect(wrapper.find("div.NewPage-header").length).toEqual(1);
    });
});
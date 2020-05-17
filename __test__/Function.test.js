import React from "react";
import Tabsone from "../src/screens/tabs/tab-one";

import renderer from "react-test-renderer";

//for handlesearchText Function 
it("handlesearchText test", () => {
  const searchText = jest.fn(() => "");
  let TabOne = renderer.create(<Tabsone />).getInstance();
  console.warn(searchText)
  TabOne.search("");
  expect(TabOne.state.searchText).toEqual("");
});

//for handleData Function 
it("HandleData test", () => {
  const data = jest.fn(() => []);
  let TabOne = renderer.create(<Tabsone />).getInstance();
  console.warn(data)
  TabOne.handleData(data);
  expect(TabOne.state.data).toEqual([]);
});

//for _onRefresh Function 
it("onRefresh test", () => {
  const refresh = jest.fn(() => false);
  let TabOne = renderer.create(<Tabsone />).getInstance();
  console.warn(refresh)
  TabOne._onRefresh(refresh);
  expect(TabOne.state.refreshing).toEqual(true);
});





  
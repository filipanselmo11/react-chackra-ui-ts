import * as React from "react";
// import {
//   ChakraProvider,
//   Box,
//   Text,
//   Link,
//   VStack,
//   Code,
//   Grid,
//   theme,
// } from "@chakra-ui/react"
// import { ColorModeSwitcher } from "./ColorModeSwitcher"
// import { Logo } from "./Logo"
import { AccordionComponent } from "./components/Accordion/AccordionComponent";
import { TabsComponent } from "./components/Tabs/TabsComponent";
import { Example1 } from "./components/VisuallyHidden/Example1";
import { Example2 } from "./components/VisuallyHidden/Example2";
import { Example3 } from "./components/VisuallyHidden/Example3";
// import { DataTabsComponent } from "./components/Tabs/DataTabsComponent";

export const App = () => (
  <div className="app">
    <AccordionComponent />
    <br />
    <TabsComponent/>
    <br/>
    <Example1/>
    <br/>
    <Example2/>
    <br/>
    <Example3/>
    {/* <DataTabsComponent/> */}
  </div>
);

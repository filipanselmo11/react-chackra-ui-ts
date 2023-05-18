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
import { Usage } from "./components/Alert/Usage";
import { Status } from "./components/Alert/Status";
import { Variant } from "./components/Alert/Variant";
import { Composition } from "./components/Alert/Composition";
import { CloseButtonExample } from "./components/Alert/CloseButtonExample";
import { Size } from "./components/CircularProgress/Size";
import { Thickness } from "./components/CircularProgress/Thickness";
import { Label } from "./components/CircularProgress/Label";
import { IndeterminateProgress } from "./components/CircularProgress/IndeterminateProgress";
// import { DataTabsComponent } from "./components/Tabs/DataTabsComponent";

export const App = () => (
  <div className="app">
    <section id="accordion">
      <AccordionComponent />
    </section>
    <section id="tabs">
      <TabsComponent />
    </section>
    <section id="visually-hidden">
      <Example1 />
      <br />
      <Example2 />
      <br />
      <Example3 />
    </section>
    <section id="alert">
      <Usage />
      <br />
      <Status />
      <br />
      <Variant />
      <br />
      <Composition />
      <br />
      <CloseButtonExample />
    </section>
    <section id="circular-progress">
      <Size/>
      <br/>
      <Thickness/>
      <br/>
      <Label/>
      <br/>
      <IndeterminateProgress/>
    </section>
  </div>
);

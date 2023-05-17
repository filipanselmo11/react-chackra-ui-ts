import * as React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
  Image,
  Box,
} from "@chakra-ui/react";

export const TabsComponent = () => {
  const colors = useColorModeValue(
    ["red.50", "teal.50", "blue.50"],
    ["red.900", "teal.900", "blue.900"]
  );

  //   const [tabIndex, setTabIndex] = React.useState(0);
  //   const bg = colors[tabIndex]

  const [tabIndex, setTabIndex] = React.useState(0);

  const handleSlideChange = (event: any) => {
    setTabIndex(parseInt(event.target.value, 10));
  };

  const handleTabsChange = (index: any) => {
    setTabIndex(index);
  };

  return (
    // Controlled Tabs
    <Box>
      <input
        type="range"
        min="0"
        max="2"
        value={tabIndex}
        onChange={handleSlideChange}
      />
      <Tabs index={tabIndex} onChange={handleTabsChange}>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
                <p>Click the tabs or pull slider around</p>
            </TabPanel>
            <TabPanel>
                <p>Yeah yeah, What's up ?</p>
            </TabPanel>
            <TabPanel>
                <p>Oh, hello there.</p>
            </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
    // <Tabs defaultIndex={1} isManual>
    //   <TabPanels>
    //     <TabPanel>
    //       <Image
    //         boxSize={290}
    //         fit="cover"
    //         src="https://www.freepnglogos.com/uploads/naruto-png/image-kunai-naruto-fictional-battle-omniverse-23.png"
    //       />
    //     </TabPanel>
    //     <TabPanel>
    //       <Image
    //         boxSize={290}
    //         fit="cover"
    //         src="https://images5.alphacoders.com/810/thumbbig-810547.webp"
    //       />
    //     </TabPanel>
    //   </TabPanels>
    //   <TabList>
    //     <Tab>Naruto</Tab>
    //     <Tab>Sasuke</Tab>
    //     {/* <Tab isDisabled>Sasuke</Tab> */}
    //   </TabList>
    // </Tabs>
    // <Tabs onChange={(index) => setTabIndex(index)} bg={bg}>
    //   <TabList>
    //     <Tab>Red</Tab>
    //     <Tab>Teal</Tab>
    //     <Tab>Blue</Tab>
    //   </TabList>
    //   <TabPanels p='2rem'>
    //     <TabPanel>The Primary Colors</TabPanel>
    //     <TabPanel>Are 1, 2, 3</TabPanel>
    //     <TabPanel>Red, yellow and blue.</TabPanel>
    //   </TabPanels>
    // </Tabs>
    // <Tabs isFitted align="center" size='lg' variant='soft-rounded' colorScheme="orange"></Tabs>
    // <Tabs variant='unstyled'>
    //     <TabList>
    //         <Tab _selected={{color: 'white', bg: 'blue.500'}}>1</Tab>
    //         <Tab _selected={{color: 'white', bg: 'green.800'}}>2</Tab>
    //         <Tab _selected={{color: 'white', bg: 'red.900'}}>3</Tab>
    //     </TabList>
    //     <TabPanels>
    //         <TabPanel>
    //             <p>1!</p>
    //         </TabPanel>
    //         <TabPanel>
    //             <p>2!</p>
    //         </TabPanel>
    //         <TabPanel>
    //             <p>3!</p>
    //         </TabPanel>
    //     </TabPanels>
    // </Tabs>
  );
};

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
  useTab,
  useMultiStyleConfig,
  Button,
} from "@chakra-ui/react";

export const CustomTabs = () => {
    const CustomTab = React.forwardRef((props) => {
        // 1. Reuse the `useTab` hook
        const tabProps = useTab({...props})
        const isSelected = !!tabProps['aria-selected']

        const styles = useMultiStyleConfig('Tabs', tabProps)

        return (
            <Button __css={styles.tab} {...tabProps}>
                <Box as='span' mr='2'>
                    {isSelected ? '😎' : '😐'}
                </Box>
                {tabProps.children}
            </Button>
        )
    })

    return (
        <Tabs>
            <TabList>
                {/* <CustomTab>One</CustomTab>
                <CustomTab>Two</CustomTab> */}
            </TabList>
            <TabPanels>
                <TabPanel>1</TabPanel>
                <TabPanel>2</TabPanel>
            </TabPanels>
        </Tabs>
    )
}

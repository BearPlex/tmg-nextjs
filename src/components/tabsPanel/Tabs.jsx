import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Expertise from "../expertise/Expertise";

const TabsPanel = () => {
    return(
        <>
            <Tabs>
                <TabList>
                    <Tab></Tab>)
                </TabList>

                <TabPanel>
                    <Expertise />
                </TabPanel>
            </Tabs>

        </>
    )
}
export default TabsPanel;
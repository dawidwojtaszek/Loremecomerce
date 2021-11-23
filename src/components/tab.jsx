import React from "react";
import Tab from "../style/productPage/tab";
import { useState } from 'react'
const TabComponent = () => {

    const [currentTab, setTab] = useState(1);

    const handleChange = (e) => {
        e.preventDefault();
        const tabNr = parseInt(e.target.dataset.tabNr);
        setTab(tabNr);
    }

    const detailsTab = <Tab.ContentBox>
        <Tab.Content>
            <Tab.List>
                <Tab.ListElement>
                    <Tab.Bold>Weight:</Tab.Bold> 200g
                </Tab.ListElement>
                <Tab.ListElement>
                    <Tab.Bold>Materials:</Tab.Bold> 60% Cotton, 40% Polyester
                </Tab.ListElement>
                <Tab.ListElement>
                    <Tab.Bold>Other Info:</Tab.Bold> Lorem ipsum dolor sit amet.
                </Tab.ListElement>
            </Tab.List>
        </Tab.Content>
    </Tab.ContentBox>
    const shipingInfoTab = <Tab.ContentBox>
        <Tab.Content>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt eius aliquam veniam optio eum ullam?
        </Tab.Content>
    </Tab.ContentBox>
    return (
        <Tab>
            <Tab.Nav>
                <Tab.NavBtn data-tab-nr='1' onClick={handleChange} isActive={currentTab === 1 ? (true) : (false)}>Details</Tab.NavBtn>
                <Tab.NavBtn data-tab-nr='2' onClick={handleChange} isActive={currentTab === 2 ? (true) : (false)}>Shiping Inforamtion</Tab.NavBtn>
            </Tab.Nav>

            {{
                1: detailsTab,
                2: shipingInfoTab,
            }[currentTab]}

        </Tab>
    )
}

export default TabComponent;
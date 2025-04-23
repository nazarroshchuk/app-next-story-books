import React from "react";

export const TABS__LIST = [
    {title: "Home", content: "Welcome to the Home tab!"},
    {title: "Profile", content: "This is your Profile."},
    {title: "Settings", content: "Update your settings here."}
]


function Tabs({tabs}) {
    const [activeTab, setActiveTab] = React.useState(0);

    const content = () => {
        const activeTabContent = tabs[activeTab]?.content || "No content";

        return (
            <div
                className="tabs-content"
                style={{width: '100%', textAlign: 'center', padding: '100px'}}
            >
                {activeTabContent}
            </div>
        )
    }

    return (
        <div
            className="tabs-container"
            style={{width: 800}}
        >
            <div
                className="tabs-header"
                style={{width: '100%', display: 'flex', justifyContent: 'space-between', gap: 0}}
            >
                {tabs.map((tab, index) => (
                    <button style={{
                        borderBottom: activeTab === index ? '2px solid green' : 'none',
                        flex: 1,
                        textAlign: 'center',
                        transition: 'border 0.3s ease-in-out',
                    }}
                            key={index} className="tab"
                            onClick={() => setActiveTab(index)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            <div
                className="tabs-content"
                style={{width: '100%'}}
            >
                {content()}
            </div>
        </div>
    )
}


export default Tabs;
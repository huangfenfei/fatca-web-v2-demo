import AppLayout from "@/components/layout/app-layout";
import { Tabs, TabsProps } from "antd";
import React from "react";

const InquiryPage = () => {
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Search by Customer ID',
            children: <div>Search by Customer ID</div>,
        },
        {
            key: '2',
            label: 'Search by Customer Name',
            children: <div>Search by Customer Name</div>,
        },
        {
            key: '3',
            label: 'Search by TIN Number',
            children: <div>Search by TIN Number</div>,
        },
        {
            key: '4',
            label: 'Search by Date/Status',
            children: <div>Search by Date/Status</div>,
        },
    ];

    const onChange = (key: string) => {
        console.log(key);
    };

    return (
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    );
}

export default InquiryPage;
InquiryPage.getLayout = function getLayout(page: React.ReactElement<any, string | React.JSXElementConstructor<any>>) {
    return <AppLayout>{page}</AppLayout>;
};
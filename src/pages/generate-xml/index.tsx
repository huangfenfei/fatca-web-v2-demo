import AppLayout from "@/components/layout/app-layout";
import React from "react";

const GenerateXMLPage = () => {
    return (
        <div>
            Generate XML Page
        </div>
    );
}

export default GenerateXMLPage;
GenerateXMLPage.getLayout = function getLayout(page: React.ReactElement<any, string | React.JSXElementConstructor<any>>) {
    return <AppLayout>{page}</AppLayout>;
};
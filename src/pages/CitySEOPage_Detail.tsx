import React from "react";
import CitySEOPage from "./CitySEOPage";

interface CitySEOPageDetailProps {
    categoryType?: 'call-girl' | 'massage';
}

const CitySEOPage_Detail: React.FC<CitySEOPageDetailProps> = ({ categoryType }) => {
    return <CitySEOPage categoryType={categoryType} />;
};

export default CitySEOPage_Detail;

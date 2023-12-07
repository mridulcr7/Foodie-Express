import React from "react";
import { ShimmerPostList } from "react-shimmer-effects";

export const ShimmerUi = () => {
    return (
        <div>
             <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={20} gap={30} />;
        </div>
    );
};

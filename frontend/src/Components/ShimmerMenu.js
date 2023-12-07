import React from 'react'
import { ShimmerContentBlock } from "react-shimmer-effects";


export const ShimmerMenu = () => {
    return (
        <div>
            <ShimmerContentBlock
                title
                text
                cta
                thumbnailWidth={370}
                thumbnailHeight={370}
                reverse
            />
        </div>
    )
}

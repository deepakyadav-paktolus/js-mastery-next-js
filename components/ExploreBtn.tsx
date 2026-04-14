'use client';

import { ArrowDown } from "lucide-react";
import Image from "next/image";

const ExploreBtn = () => {
    return (
        <button type="button" id="explore-btn" className="mt-7 mx-auto" onClick={() => console.log('CLICK')}>
            <a href="#events" className="flex gap-2">
                Explore Events
             <ArrowDown/>
            </a>
        </button>
    )
}

export default ExploreBtn
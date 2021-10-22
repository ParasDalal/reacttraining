import React, {useRef} from 'react';

export default function SampleUseRef() {
    const imgRef = useRef<HTMLImageElement>(null);            // Declaring the type here is important for TypeScript

    return (
        <img src = '/media/logo-other.png' alt = "logo" 
            ref = {imgRef} 
            onMouseOver={() => {if (imgRef && imgRef.current) imgRef.current.src = "media/logo.png" }}
            onMouseOut={() => {if (imgRef && imgRef.current) imgRef.current.src = "media/logo-other.png" }}            
            />
    );

}
import React from 'react';
import isFetchingLoader from "../assets/loader.gif";

const PreLoader = () => {
    return (
        <div>
            <img alt={'img'} src={isFetchingLoader}/>
        </div>
    );
};

export default PreLoader;
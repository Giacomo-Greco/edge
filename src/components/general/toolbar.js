import React from 'react';

//icons
import share_icon  from '../../media/icons/share.png';

function Toolbar(props) {

    const tools = [
        {title: 'Print', icon: share_icon},
        {title: 'Share', icon: share_icon},
        {title: 'Export', icon: share_icon},
        {title: 'Date picker', icon: share_icon}
    ]

    return(
        <>
        {tools.map((item, index) => {
            return(
                <div className="flex functions x-a y-a" key={index} style={{gap: '5px'}}>
                    <img src={item.icon} style={{width: 'auto', height: '30px'}}></img>
                    <h6 className="bold" style={{whiteSpace: 'nowrap'}} onClick={props.function}>{item.title}</h6>
                </div>
                
            )
        })}
        
        </>
    )
}

export default Toolbar;
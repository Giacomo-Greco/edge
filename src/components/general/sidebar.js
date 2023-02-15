import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from '../../actions';

function Sidebar() {

    const dispatch = useDispatch();

    const nodes = useSelector(state => state.nodes);
    const width = '310px';


    return(
        <div className="absolute color5" style={{borderLeft: '1px solid var(--border--color)', right: '0', width: width, height: '100%',  zIndex: '10', paddingTop: '90px'}}>
            <div style={{overflow: 'auto', height: '100%', }}>
            
            {/* Medicinali */}

                <div className="border-box flex-column filter" style={{width: 'auto', gap: '15px'}}>
                    <div style={{width: 'auto', borderBottom: '1px solid var(--border--color)', paddingTop: '0px', paddingBottom: '10px'}}>
                        <h4 className="bold user-select">Medicinali</h4>
                    </div>
                    <div className="flex" style={{gap: '5px', flexWrap: 'wrap'}}>
                        {nodes?.map((node, index) => {
                            return(
                                <h6 key={index} className="tag pointer" onClick={(e) => {
                                    if (!e.target.classList.contains('active')) {
                                        e.target.classList.add('active');
                                    }else{
                                        e.target.classList.remove('active');
                                    }
                                    dispatch(addFilter(node.short_name))}
                                }>{node.short_name}</h6>
                            )
                        })}
                    </div>
                </div>

                {/* Altri filtri */}

                <div className="border-box flex-column filter" style={{width: 'auto', gap: '15px'}}>
                    <div style={{width: 'auto', borderBottom: '1px solid var(--border--color)', paddingTop: '0px', paddingBottom: '10px'}}>
                        <h4 className="bold user-select">Altri filtri</h4>
                    </div>
                    <div className="flex" style={{gap: '5px', flexWrap: 'wrap',  paddingBottom: '120px'}}>
                    </div>
                </div>

            </div>
        </div>        
    )
}

export default Sidebar;
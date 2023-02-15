import React, { useState } from 'react';

//sezioni layout
import Chord from '../components/charts/chord';
import Header from '../components/layout/header';
import Toolbar from '../components/general/toolbar';
import Sidebar from '../components/general/sidebar';

//tool calendario
import Calendario from '../components/tools/calendario';

//icons
import graph_icon from './../media/icons/graph.svg';

function Home() {

    //states
    const [calendar, setCalendar] = useState();


    function showCalendar() {
        if (calendar === 'show') {
            setCalendar('hide');
        }else{
            setCalendar('show');
        }
    }

    //variabili di stile
    const width = '310px';

        return(
            <>
           
            <div className="flex absolute border-box " style={{boxSizing: 'border-box', left: '70px', width: 'calc(100% - 70px)', height: '100%'}}>
                <Header />
                
                <div className="flex fixed" style={{width: 'calc(100% - 70px)', height: '100%'}}>
                    <div className="flex-column absolute border-box" style={{boxSizing: 'border-box', width:'calc(100% - ' + width + ')', height: '100%', top: '90px', padding: '35px', paddingTop: '10px', gap: '10px'}}>
                        <div className="flex y-a" style={{ width: '100%', height: '45px'}}>
                            <div className="flex light y-a" style={{width: '100%'}}>
                                <h6 className="user-select">Dati aggiornati al: 04/05/2022</h6>
                            </div>
                            <div className="flex y-a pointer" style={{width: 'auto', justifyContent: 'end', gap: '4px'}}>
                                <Toolbar 
                                function={showCalendar}/>
                            </div>
                            </div>
                            {calendar === 'show' && 
                                <div  style={{position: 'fixed', zIndex: '1000', top: '135px', display: 'block'}}>
                                    <Calendario />
                                </div>
                            }
                        <div className="flex" style={{ width: '100%', height: 'auto', gap: '18px'}}>
                            <div className="pointer" style={{width: '70%'}}>
                                <Chord />
                            </div>
                            <div className="flex-column x-a y-a pointer color5" style={{boxSizing: 'border-box', width: '30%', height: '100%', gap: '15px'}}>
                                <img src={graph_icon} style={{width: '70px', height: 'auto'}}></img>
                                <h6 style={{fontSize: '16px', opacity: '0.45'}}>Aggiungi un grafico</h6>
                            </div>
                        </div>
                    </div>

                    <Sidebar />
                    
                </div>

            </div>
            </>
        )
}

export default Home;
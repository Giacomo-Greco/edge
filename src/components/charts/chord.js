import React, { useCallback, useEffect, useState } from "react";

import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.powercharts";
import ReactFusioncharts from "react-fusioncharts";

//redux
import { useDispatch, useSelector } from "react-redux";
import { nodes } from "../../actions";

//icons
import arrow from '../../media/icons/arrow.svg';

//funzioni
import { pageDefine, pagination } from "../../config/pagination";

charts(FusionCharts);

function PageSelector(props) {
  return(
    <div className="flex y-a " style={{position: 'absolute', right: '18px', top: '13px', gap: '0px'}}>
      <div className="flex y-a x-a light" style={{gap: '15px'}}>
        <h6>Page:</h6> 
        <div className="flex x-a" style={{width: '45px'}}>
          <div style={{width: '22px'}}>
            <h6>{props.page.currentPage}</h6>
          </div>
          <h6> /&nbsp;</h6>
          <div style={{width: '22px'}}>
            <h6>{props.page.pages}</h6>
          </div>
        </div>
      </div>
      <div className="flex x-a y-a">
        <div className="flex y-a x-a arrow-box">
          <img className="arrow" src={arrow} direction="prev" onClick={props.function} style={{width: '10px', transform: 'rotate(180deg)'}}></img>
        </div>
        <div className="flex y-a x-a arrow-box">
          <img className="arrow" src={arrow} direction="next" onClick={props.function} style={{width: '10px'}}></img>
        </div>
      </div>
    </div>
  )
}

function Chart() {

  //funzioni
  const dispatch = useDispatch();

  function filters(props) {
    if (filterState.length > 0) {
      props.links = props.links.filter((obj) => 
        filterState.some(filter => obj.to.split(',').includes(filter))  ||
        filterState.some(filter => obj.from.split(',').includes(filter))
        );
      page.pages =  Math.ceil((props.links.length/page.divider));
      setPage(page);
    }
    return props;
  }

  const changePage = (e) => {
        
    const direction = e.target.getAttribute("direction");
    let counter = 1;
  
    if (page.currentPage === page.pages && direction === 'next') {
      counter = 0;
    }else {
      counter = page.currentPage;
    }

    if (page.pages < 1){
      e.preventDefault();
    }else if (direction === 'next') {
      const newCount = counter + 1
      page.currentPage = newCount;
      setPage(() => ({...page, currentPage: newCount}));
  
    }else if (direction !== 'next' && page.currentPage === 1) {
      e.preventDefault();
    }else{
      const newCount = counter - 1
      page.currentPage = newCount;
      setPage(() => ({...page, currentPage: newCount}));
    }
  
  }


  //configurazione chart
  const chartConfig = {
    chart: {
      caption: "",
      subcaption: "",
      nodelabelposition: "outside",
      showlegend: 0,
      theme: "fusion",
      showCanvasBorder: 0,
      mode: "post",
      linkcolorbydominance: "1",
      animation: "0",
  
      nodeSpacing: '2',
      nodeThickness: "14",
      startingAngle: "0",
      nodeLinkPadding: "7",
    },
    nodes: [],
    links: []
  };

  //states
  const calendar = useSelector(state => state.calendar);
  const filterState = useSelector(state => state.filters);
  const [allData = chartConfig, setData] = useState();
  const [diagram = [], setDiagram] = useState();
  const [page, setPage] = useState(pageDefine(25, 25));


  //fetch di tutti i dati, eventualmente filtrati per data
  useEffect(() => {

    //check date calendario
    let startDate = '';
    let endDate = '';
    
    calendar.startDate ? startDate = "/" + calendar.startDate : startDate = "";
    if (calendar.endDate !== calendar.startDate) {
      endDate = "/" + calendar.endDate;
    }else{
      endDate = "";
    }
  
    //definizione url per api
    const url = 'https://api.sonardigital.it/api/therapies.php/150' + startDate + endDate;

    fetch(url).then(response => {
      return response.json();
      }).then(data => {

        if (typeof data.data !== 'undefined') {
          dispatch(nodes(data.nodes));
          chartConfig.links = data.data;
          setPage(pageDefine(data.records, 25));
          setData(chartConfig)  
      }

        setDiagram([]);

      }).catch(error => {
        console.log("Error: " + error);
      })
  }, [calendar])

  //filtri e paginazione
  useEffect(() => {
    let temp = filters({...allData});
    temp = pagination(temp, page);
    setDiagram(temp)
  }, [filterState, page])

    return (
      <div style={{position: 'relative', width: '100%', height: '540px'}}>
        <ReactFusioncharts
            type="chord"
            width="100%"
            height="100%"
            dataFormat="JSON"
            dataSource={diagram}
        />

        <PageSelector 
        page={page}
        function={changePage}/>

      </div>
    );
}

export default Chart;

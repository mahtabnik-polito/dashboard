/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { WordCloud } from "word-cloud-react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
import ReactWordcloud from 'react-wordcloud';
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
  dashboardFabricData,
  MotiviMiroglio,
  MotiviOltreFashion,
  MotiviPerte
  
} from "variables/charts.js";
const words=
[{text:'motivifashion',value:65},
        {text:'motividicuore',value:5},
        {text:'denim',value:5},
        {text:'sales',value:5},
        {text:'Repost',value:5},
        { text:'springcollection',value:4},
        { text:'facetimeshooting',value:4},
        { text:'sale',value:3},
        { text:'love',value:3},
        { text:'retail',value:3},
        { text:'orgogliomiroglio',value:2},
        { text:'fashion',value:2},
        {text:'lontanemavicine',value:2},
        { text:'Italy',value:2},
        {text:'fallwintercollection',value:2},
        { text:'mirogliofashion',value:2},
        { text:'trend',value:1},
        { text:'vergogna',value:1},
        { text:'Shopcall',value:1},
        {text:'servizioclienti',value:1},
        { text:'Italia',value:1},
        { text:'shopping',value:1},
        { text:'leconomiadellintelligenza',value:1},
        {text:'life',value:1},
        { text:'supplychain',value:1},
        { text:'fiorellarubino',value:1},
        { text:'pricing',value:1},
        {text:'vendite',value:1},
        { text:'oltrefashion',value:1},
        {text:'ArtificialIntelligence',value:1},
        { text:'CelticMusic',value:1},
        {  text:'MachineLearning',value:1},
        {  text:'woman',value:1},
        { text:'harpiste',value:1},
        { text:'lovemyjob',value:1},
        {  text:'AI',value:1},
        {  text:'LiveStreamShopping',value:1},
        {  text:'proud',value:1},
        {  text:'miglioreinsegna2021',value:1},
        {  text:'missedyou',value:1},
        { text:'maratonamotivi',value:1},
        { text:'Musica',value:1},
        { text:'resilienza',value:1},
        { text:'arpista',value:1},
        { text:'COVID19',value:1},
        { text:'agilità',value:1},
        { text:'Torino',value:1},
        { text:'servizioclientiinesistente',value:1},
        { text:'milano',value:1},
        { text:'27LUGLIO',value:1},
        { text:'agcom',value:1},
        { text:'harp',value:1},
        { text:'villa',value:1},
        { text:'facetimeshoting',value:1},
        {text:'Piemonte',value:1},
        {text:'Turin',value:1},
        { text:'Google',value:1},
        { text:'milan',value:1},
        {text:'valentinesday',value:1},
        { text:'CelticHarp',value:1},
        { text:'newcollection',value:1},
        { text:'inventory',value:1},
        {text:'onlineshopping',value:1},
        {text:'caterinabergo',value:1},
        {text:'BuonPomeriggionè',value:1},
        {text:'blue',value:1},
        {text:'SmartCoutureMotivi',value:1},
        {text:'SUMMER',value:1},
        {text:'liguria',value:1},
        {text:'COVID__19',value:1},
        {text:'arpa',value:1},
        {text:'diversity',value:1},
        {text:'lamialiguria',value:1},
        {text:'italianart',value:1},
        {text:'digitalsignage',value:1},
        {text:'Motivi',value:1},
        {text:'Piedmont',value:1},
        {text:'CallShopping',value:1},
        {text:'MiroglioGroup',value:1},
        {text:'mlcheckup',value:1},
        {text:'abbigliamento',value:1},
        {text:'harpe',value:1},
        {text:'Codacons',value:1},
        {text:'ClassicalMusic',value:1},
        {text:'fallpreview',value:1},
        {text:'ArtificialInteligence',value:1},
        {text:'Abbigliamentodonna',value:1},
        {text:'BigData',value:1},
        {text:'harpist',value:1},
        {text:'saturdaynight',value:1},
        {text:'2020',value:1},
        {text:'stayathome',value:1}]

        const options = {
          // rotations: 0,
          // rotationAngles: [0, 0],
          fontSizes: [19, 45],
        };

        // const size = [100% , 100%];

class Dashboard extends React.Component {
  datasetKeyProvider(){ return Math.random(); }

  constructor(props) {
    super(props);
    this.state = { data : dashboardNASDAQChart.data , name: '', key: 1 , options:
    dashboardNASDAQChart.options };
  }
  handleChange = (event) => {

  if(event.target.value=="1"){
    console.log(event.target.value);

    this.setState({data: MotiviOltreFashion.data , options: MotiviOltreFashion.options,  key:2
    , name:"Oltre Fashion"})
  }
  else if(event.target.value=="2"){
    console.log(event.target.value);

      this.setState({data: MotiviMiroglio.data , options: MotiviMiroglio.options, key:3 , name: "Miroglio"})
    }
  else if(event.target.value=="3"){
    console.log(event.target.value);

        this.setState({data: MotiviMiroglio.data,  options: MotiviMiroglio.options, key:4
          , name: "Twist Fashion"})
      }
  else if(event.target.value=="4"){
    console.log(event.target.value);

          this.setState({data: MotiviPerte.data,  options: MotiviPerte.options, key:5,
            name: "Per te By Kiritzia" })
      }

    else if(event.target.value=="6"){
      console.log(event.target.value);

      this.setState({data:dashboardNASDAQChart.data , name: '', key:5
         });
  }

    

    
  }

  render() {
    return (
      <>
        <div className="content">
        <Row>
            <Col lg="3" md="6" sm="6">
          <p>Choose the Brand : </p>
        <div style={{margin: "6px"}}>
        <select className="browser-default custom-select" onChange={this.handleChange} >
        <option value="6">Brands...</option>
          <option value="2">Miroglio</option>
          <option value="1">Oltre Fashion</option>
          <option value="3">Twist Fashion</option>
          <option value="4">Per te By Kiritzia</option>
        </select>

      </div>
      </Col>
      </Row>

          <Row> <Col md="12">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h5">Twitter Trends</CardTitle>
                  <p className="card-category">data at Today 28 Dec 2020</p>
                </CardHeader>
                <CardBody>
                  <Line
                   datasetKeyProvider={this.datasetKeyProvider}
                    data={this.state.data}
                    options={this.state.options}
                    width={400}
                    height={100}
                    redraw
                  />
                </CardBody>
                
                <CardFooter>
                  <div className="chart-legend">
                    
                    <i className="fa fa-circle text-warning" /> Motivi {" "}
                    <i className="fa fa-circle text-info" /> {this.state.name}{" "}
                  </div>
                  <hr />
                  <div className="card-stats">
                    <i className="fa fa-check" /> Data information certified
                  </div>
                </CardFooter>
              </Card>
            </Col></Row>
          <Row>
            <Col md="12">
              <Card> 
              <CardHeader>
                  <CardTitle tag="h5">Related Hashtags</CardTitle>
                  <p className="card-category">Brand Motivi</p>
                </CardHeader>
                 <CardBody>
              <div style={{ width: "100%", height: "100%" }}>
          <ReactWordcloud words={words} options={options} />

        </div>

       
       </CardBody> 
                </Card>
                </Col>
                </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;

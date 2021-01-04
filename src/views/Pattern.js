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
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
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
  totalPatternDatafs,
  totalPatternDatain,
  topPatternDatafs,
  topPatternDatain,
  skirtPatternDatafs,
  skirtPatternDatain,
  pantsPatternDatafs,
  pantsPatternDatain,
  jacketPatternDatafs,
  jacketPatternDatain,
  dressPatternDatafs,
  dressPatternDatain,
  kimonoPatternDatafs,
  kimonoPatternDatain,
  jumpPatternDatafs,
  jumpPatternDatain
  
} from "variables/patterndata.js";

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data : totalPatternDatafs.data , data2:totalPatternDatain.data  };
  }
  handleChange = (event) => {
    if(event.target.value=="1"){
      this.setState({ data: jacketPatternDatafs.data ,  data2:jacketPatternDatain.data  });
    }
    if((event.target.value=="2")){
      // this.state = { data : dashboardFabricData.data , data2:dashboardFabricDataInstagram.data  };
      this.setState({ data : totalPatternDatafs.data , data2:totalPatternDatain.data  });
    }
    if((event.target.value=="3")){
      // this.state = { data : dashboardFabricData.data , data2:dashboardFabricDataInstagram.data  };
      this.setState({ data : topPatternDatafs.data , data2:topPatternDatain.data  });
    }
    if((event.target.value=="4")){
      // this.state = { data : dashboardFabricData.data , data2:dashboardFabricDataInstagram.data  };
      this.setState({ data : skirtPatternDatafs.data , data2:skirtPatternDatain.data  });
    }
    if((event.target.value=="5")){
      // this.state = { data : dashboardFabricData.data , data2:dashboardFabricDataInstagram.data  };
      this.setState({ data : kimonoPatternDatafs.data , data2:kimonoPatternDatain.data  });
    }
    if((event.target.value=="6")){
      // this.state = { data : dashboardFabricData.data , data2:dashboardFabricDataInstagram.data  };
      this.setState({ data : jumpPatternDatafs.data , data2:jumpPatternDatain.data  });
    }
    if((event.target.value=="7")){
      // this.state = { data : dashboardFabricData.data , data2:dashboardFabricDataInstagram.data  };
      this.setState({ data : dressPatternDatafs.data , data2:dressPatternDatain.data  });
    }
    if((event.target.value=="8")){
      // this.state = { data : dashboardFabricData.data , data2:dashboardFabricDataInstagram.data  };
      this.setState({ data : pantsPatternDatafs.data , data2:pantsPatternDatain.data  });
    }
    console.log("target:" +event.target.value);

    // this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <>
      
        <div className="content">
        <Row>
            <Col lg="3" md="6" sm="6">
          <p>Choose the category: </p>
        <div style={{margin: "6px"}}>
        <select className="browser-default custom-select" onChange={this.handleChange} >
        <option value="2">Total</option>
          <option value="3">Top</option>
          <option value="4">Skirt</option>
          <option value="5">Kimono</option>
          <option value="6">Jumpsuit</option>
          <option value="7">Dress</option>
          <option value="8">Pants</option>
          <option value="1">Jacket</option>
        </select>

      </div>
      </Col>
      </Row>
          <Row>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Total Fabrics</CardTitle>
                  <p className="card-category">Instagram</p>
                </CardHeader>
                <CardBody>
                  <Pie
                    data={this.state.data2}
                    options={totalPatternDatain.options}
                  />
                
                </CardBody>
                <CardFooter>
                <div className="legend">
                    <i className="fa fa-circle text-gray" /> SOLID COLOR{" "}
                    <i className="fa fa-circle text-primary" /> FLORAL{" "}
                    <i className="fa fa-circle text-warning" /> CHECKS{" "}
                    <i className="fa fa-circle text-danger" />STRIPES{" "}
                    <i className="fa fa-circle "style={{color:"red"} }/>LEOPARD{" "}
                    <i className="fa fa-circle"  style={{color:"#C9F7EE"}} />DOTTED{" "}
                    <i className="fa fa-circle " style={{color:"#F67DE0"}} />CAMO{" "}
                  </div>
                  <hr />
                </CardFooter>       
              </Card>
            </Col>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Total Fabrics</CardTitle>
                  <p className="card-category">Fashion Shows</p>
                </CardHeader>
                <CardBody>
                  <Pie
                    data={this.state.data}
                    options={totalPatternDatafs.options}
                  />
                
                </CardBody>
                <CardFooter>
                <div className="legend">
                    <i className="fa fa-circle text-gray" /> SOLID COLOR{" "}
                    <i className="fa fa-circle text-primary" /> FLORAL{" "}
                    <i className="fa fa-circle text-warning" /> CHECKS{" "}
                    <i className="fa fa-circle text-danger" />STRIPES{" "}
                    <i className="fa fa-circle "style={{color:"red"} }/>LEOPARD{" "}
                    <i className="fa fa-circle"  style={{color:"#C9F7EE"}} />DOTTED{" "}
                    <i className="fa fa-circle " style={{color:"#F67DE0"}} />CAMO{" "}
                  </div>
                  <hr />
                  {/* <div className="stats">
                    <i className="fa fa-calendar" /> Number of emails sent
                  </div> */}
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Notifications;


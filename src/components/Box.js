import React,{ Component } from 'react'
  
class Box extends Component{ 
  constructor(props){ 
    super(props) 
    this.handleChangeColor = this.handleChangeColor.bind(this) 
  } 
  
  // Handler callback 
  handleChangeColor(){ 
    
    // Call parent component cahngeColor  method passing the 
    // color value of div 
    this.props.changeColor(this.props.color) 
  } 
  
  render(){ 
    
    // Create a div component and assign the given  
    // color value by BoxContainer component as its 
    // background color 
    return <div style={{  alignItems:'center'}}>
      <div
      onClick={this.handleChangeColor}  
      style={{margin:'2em' , backgroundColor:this.props.color,  
                  width:'8em', height:'8em' , borderRadius:'2em' }}  
                 ></div>

    <p style={{  textAlign: 'center',
 fontSize:"0.8em"}}>{this.props.color}{': '}{this.props.number}</p>        
                  
    </div>
    
  } 
} 
  
export default Box
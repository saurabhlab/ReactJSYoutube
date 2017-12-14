
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
   //this.age = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
   // alert('A name was submitted: ' + this.state.value);
   // var updated = Object.assign(this.state.value);
document.getElementById('l').innerHTML=this.state.value;
//document.getElementById('a').innerHTML=this.age.value;


    event.preventDefault();
  }

  render() {
    return (


<div className="App">    


 <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        </p>

        <p>saurabh</p>


  <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label><br/><br/>
        <label>
          Age:
          <input type="text" value={this.age.value}  onChange={this.handleChange}/>
        </label><br/><br/>
        
        <input type="submit" value="Submit" />
    
  

      </form><br/><br/>




   Output Name:--    <label id="l" ></label><br/><br/>
   Output Age:--    <label id="a" ></label>
  


</div>




    );
  }
}


export default NameForm;

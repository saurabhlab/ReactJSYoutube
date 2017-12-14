import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state={ term: '' };
    this.submit=this.submit.bind(this);


  }

  render() {
    return (
        <div className="search-bar jumbotron col-lg-12"  style={{"height" : "50px"}}>
        <form onSubmit={this.submit}>
        <center>    
            
          <label> Search </label>
        <input 
         placeholder={"Video Search Here..."}
          value={this.state.term}
              className="img-rounded  	"
             
         onChange={event => this.onInputChange(event.target.value)}
              style={{"height" : "30px","width" : "400px","backgroundColor":"lightyellow"}}
           />
              <input type="submit"     className="btn btn-sm btn-success " value="Search"/>

     </center>
     </form>
        </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
  //this.props.onSearchTermChange(term);
  }

submit(event){
  event.preventDefault();
  this.props.onSearchTermChange(this.state.term);



}



}

export default SearchBar;




// const Searchbox=()=>{

//     return(
//         <div className="col-lg-6">
//                <br/>
//                <label  className="pull-left"> Search Videos  : </label>
              
//              <input  
               
//                 placeholder="Video Search Here..."
//                 //style={{"height" : "30px"}}
//                 className="img-rounded col-lg-8  	"
//                // onChange={(event) => this.setState({term : event.target.value})}
//                /> 
//                  <p className="glyphicon glyphicon-search "></p><br/><br/>
//         </div>
//     )
// }
// export default Searchbox;
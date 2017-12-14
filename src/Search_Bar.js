import React from 'react';
import logo from './logo.svg';
import './App.css';
//import YTsearch from 'youyube-api-search';



// const elmnt=<h1> hello</h1>

// ReactDOM.render(elmnt,document.getElementById('root'));




class SearchBar extends React.Component{






constructor(props)
{

    

    super(props);
    
    this.state={term : 'Enter Text'};
   // this.handleLoginClick = this.handleLoginClick.bind(this);
  //  this.handleLogoutClick = this.handleLogoutClick.bind(this);
     //this.state ={isLoggedIn : false};

}






render(){
    return <div className="App">
            <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>*** Welcome ***</h2>
        </div>



    <h1>Search</h1>
     <input 
     
     placeholder={this.state.term}
     onChange={(event) => this.setState({term : event.target.value})} />

    </div>;
 //OnChange=(this.OnInputChange) 
 


}   
 

//<input onChange={(event) => console.log(event.target.value)} />
   
// OnInputChange(event){
//      console.log(event.target.value)


//}




}




export default SearchBar;
import React, {Component, component} from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
import {BrowserRouter as Router,Route} from 'react-router-dom'
class PhoneDirectory extends Component{
  constructor(){
      super();
      this.state={
          subscriberList:[{
              id:1,
              name:'hairu',
              phone:'9072503599'
          },
          {
              id:2,
              name:'paru',
              phone:'999999999'
          }
        ]
      }
  }

  deleteSubscriberHandler =(subscriberId) =>{
   let subscriberList = this.state.subscriberList;
   let subscriberIndex =0;
   subscriberList.forEach(function(subscriber,index){
       if(subscriber.id == subscriberId){
         subscriberIndex=index;
       }
   },this);
   let newsubscribers=subscriberList;
   newsubscribers.splice(subscriberIndex,1);
   this.setState({subscriber:newsubscribers});

  }
  addsubscriberHandler=(newsubscriber)=>{
      let subscriberList=this.state.subscriberList;
      if(subscriberList.length>0){
          newsubscriber.id=subscriberList[subscriberList.length-1].id+1;

      }
      else
      {
          newsubscriber.id=1;
      }
      subscriberList.push(newsubscriber);
      this.setState({subscriberList:subscriberList});
     
  }
    render(){
        return(
          <Router>
              <div className="main-container">
              <Route exact path='/' render={(props) => <ShowSubscribers{...props}subscriberList={this.state.subscriberList} deleteSubscriberHandler ={this.deleteSubscriberHandler}/>}/>
              <Route exact path='/add' render={({history},props) => <AddSubscriber history={history}{...props}addsubscriberHandler={this.addsubscriberHandler}/>}/>
              </div>
          </Router>
        )
    }
}
export default PhoneDirectory;
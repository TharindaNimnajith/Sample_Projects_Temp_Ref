import React,{ PropTypes } from 'react';
import "./BusStyles.css";
import axios from "axios";


class SeatList extends React.Component {

   // state={tdObjects:this.props.seatList};
    
   constructor(props) {
       
    super(props);
    this.state = {
        tdObjects:props.seats

    };
}
componentWillReceiveProps(nextProps){
    this.setState({tdObjects:this.props.seats});

}

    componentDidMount() {
        console.log('propprop',this.props.seats);
        this.setState({tdObjects:this.props.seats});
        //console.log('seatListSeats',this);
    }

    componentWillMount(){
      // this.setState({tdObjects:this.props.seatList});
    }

    getSmartCardId(){
        return '001';
    }

    bookNow(){
        let userBookedSeats=this.state.tdObjects.filter(
            (seat)=>seat.smartCardId=='001'
            );

        axios({
            method: 'post',
            url: 'http://localhost:8081/api/v1/seats/bookNow',
            data:{
                date:new Date(),
                seats:userBookedSeats
            }

        }).then(res=>{
           
            this.setState({seats:res.data});
            console.log('seatsssnn',this.state.seats);
        })
    }
    onClickSeat(seatNo,smartCardId){
        console.log('seatNo',seatNo);
        let oldSeats=this.state.tdObjects;
        let seat=oldSeats.filter((seat)=>seat.smartCardId==smartCardId);
        let id=seat[0].smartCardId;

        if(id==''){
            id='001';
        }else{
            id='';
        }
        console.log(this.state.tdObjects);
        oldSeats[seatNo-1].smartCardId=id;
        console.log(oldSeats[seatNo-1]);

        this.setState({tdObjects:oldSeats});
        
    }
    test(seatNo,smartCardId){
        console.log('seatNo',seatNo);
        console.log('seatNo',seatNo);
        let oldSeats=this.state.tdObjects;
        let seat=oldSeats.filter((seat)=>seat.smartCardId==smartCardId);
        let id=seat[0].smartCardId;

        if(id!=''){
            id='001';
        }else{
            id='';
        }
        
        oldSeats[seatNo-1].smartCardId=id;
       
    }


    render() {
           // this.setState({tdObjects:this.props.seatList});
            console.log('sealistzzz',this.props.seats)

        return (
                <div style={{width:'290px'}}>
                    <h1></h1>
                    <div>
                    {this.state.tdObjects.map((seat)=>{
                        if(seat.smartCardId=="001")
                        return (<div style={{backgroundColor:'green',width:'50px',height:'50px',margin:'10px',float:'left',textAlign:'center'}} onClick={()=>this.onClickSeat(seat.seatNo,seat.smartCardId)}>
                        {seat.seatNo}
                        </div>)
                        
                        if(seat.smartCardId!="")
                        return (<div style={{backgroundColor:'red',width:'50px',height:'50px',margin:'10px',float:'left',textAlign:'center'}}>
                        {seat.seatNo}
                        </div>)
                        
                        if(seat.smartCardId=="")
                        return (<div style={{backgroundColor:'black',width:'50px',height:'50px',margin:'10px',float:'left',textAlign:'center'}} onClick={()=>this.onClickSeat(seat.seatNo,seat.smartCardId)}>
                        {seat.seatNo}
                        </div>)
                    })}
                    </div>
                    <div style={{float:'none'}}>
                        <br/>
                    <button onClick={()=>this.bookNow()}>book Now</button>
                    </div>
                </div>
                

        )
    }

   
}


export default SeatList;

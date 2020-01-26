
const flightAction =(flight_Get_Data)=>{
    return{
        type: 'GetData',
        pyload: flight_Get_Data      
    }
}
export default flightAction;
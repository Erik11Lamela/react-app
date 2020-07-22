import React from 'react';
import './ListItems.css'


function ListItems(props){
    const items = props.items;
 
    
    
    const ListItems = items.map( item =>
    {
        
        return(<div>
          
         <table className = "list" key = {item.key} id = "employeeList">
          <tbody>  
              <tr id = {item.key} onClick = {() => props.selectItems(item.key)}> 
                <td>{item.name}</td> 
                <td>{item.job} </td>
                <td>{item.birth} </td>
                <td> {item.firedValue}</td>
                <td>{item.gender} </td>
              </tr>  
                <button id = "delete" onClick = {()=> props.deleteItems(item.key)}> удалить запись </button>  
                <button id = "edit" onClick = {()=> props.updateItems(item.key)}> править </button>
          </tbody> 
         </table> </div>)
         
    })
    return (
        <div> {ListItems} </div>
       
       )
}
export default ListItems;
import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems'

class  App extends React.Component {
   constructor (props){
   super(props);
   this.state = {   
      items: [],            
       name: '',      
       job: 'уборщик',
       birth: '',
       fired: false,
       gender: "Male",  
       key: ''  ,
       firedValue: "не уволен"    
   }
   this.updateItems = this.updateItems.bind(this)
  this.handleInput = this.handleInput.bind(this);
  this.deleteItems = this.deleteItems.bind(this);
  this.handleCheck = this.handleCheck.bind(this);
  this.selectItems = this.selectItems.bind(this);
  this.firedValue = this.firedValue.bind(this);
  this.addItem = this.addItem.bind(this);
  }
 firedValue(key){
   console.log("lol")
 }
 handleInput(e){
   this.setState({                       
      [e.target.name]: e.target.value,  
      key: Date.now()   ,
      selected: false    
   })
 }
 handleCheck(e) {
  
   this.setState({
     [e.target.name]: e.target.checked,
     
   }) 
 }
 
 addItem (e) {
   document.getElementById("add").textContent = "добавить"
    e.preventDefault();
    const newItem = this.state;
    console.log(newItem);
    if(this.state.fired) {this.state.firedValue = "уволен"} else this.state.firedValue = "не уволен"
  
     const newItems = [...this.state.items, newItem];
    
    this.setState({
      items: newItems,
      name: '',      
      job: 'уборщик',
      birth: '',
      fired: false,
      gender: "Male", 
      firedValue: "не уволен",
      key: Date.now()
    })
  
 }
 
deleteItems(key)  {

   const updatedElements = this.state.items.filter (item => item.key !== key);
  this.setState({
   items: updatedElements
  })
}
 updateItems(key){
  const updatedElements = this.state.items.filter (item => item.key !== key);
  console.log(updatedElements)
  this.setState({
 items: updatedElements
})
  var currentItems = this.state
  var ll = this.state.items
  var n = 0 ;
   var myLi = document.getElementById(key)  
   for(var i = 0 ; i< ll.length; i++ )
    if (ll[i].key === key) {n = i }
    this.state = ll[n]
   
     this.setState({
      name : ll[n].name, 
    job : ll[n].job, 
    birth :ll[n].birth,
    firedValue: ll[n].firedValue,
    gender: ll[n].gender,
    key: Date.now(),
    fired: ll[n].fired
    })
    document.getElementById("add").textContent = "Сохранить изменения"
    //console.log(this.state)
    
           
 }
  
  selectItems(key){
    const myLi = document.getElementById(key)
    myLi.style.background= "MediumOrchid"  
    
 }
  render () {
  return (

    
    <div className = "app">
      
    <form id = "employee-form" onSubmit = {this.addItem}>
      
          
          <button className = "addButton" id = "add" type = "submit"> Добавить </button>
        
    <table className ="table">
      <tbody> 
      <tr>
       <th>ФИО</th>
       <th>Должность</th>
       <th>Дата рождения</th>
       <th>Уволен?</th>
       <th>Пол</th>
      </tr>
      </tbody>
      <tbody>
      <tr>
        
          <td>
            <input id = "name" type = "text" name = "name" required
            value = {this.state.name}
            onChange = {this.handleInput}  />
          </td>
          <td> 
          <select name = "job"  value = {this.state.job} id = "jobs"
              onChange = {this.handleInput}> 
              <option value = "уборщик"> уборщик </option>
              <option value = "курьер"> курьер </option>
              <option value = "повар"> повар </option>
              <option value = "сторож"> сторож </option>
              <option value = "системный администратор"> системный админстратор </option>
              
          </select>
           
          </td> 
          <td><input type = "Date" name = "birth"  value = {this.state.birth}
            onChange = {this.handleInput}/> 
          </td>
          <td><input name = "fired" type = "checkbox" checked = {this.state.fired} onChange = {this.handleCheck} /></td>
          <td >  М <input type = "radio" name = "gender"  value = "Male" checked = {this.state.gender === "Male"} onChange = {this.handleInput}/> 
                Ж <input type = "radio" name = "gender"  value = "Female"  checked = {this.state.gender === "Female"}  onChange = {this.handleInput}/>
          </td>
       
      </tr>
      </tbody>
    </table>  
    </form>
     
   <ListItems items = {this.state.items}  updateItems = {this.updateItems} selectItems = {this.selectItems} deleteItems = {this.deleteItems}></ListItems>
  </div>

  );
}
 }

export default App;

import React from 'react';
import Select from 'react-select';

const option = [
    { value : 'Real Madrid', label :'Real Madrid' },
    { value : 'Chelsea', label :'Chelsea' },
    { value : 'Manchester United', label :'Manchester United' },
];

export const SelectionComponent = () => (
    <Select styles={{color:"red"}} options={option} ></Select>
)

// class SelectionComponent extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         fruit: "banana",
//       };
  
//       this.handleChange = this.handleChange.bind(this);
//     }
  
//     handleChange(e) {
//       console.log("Fruit Selected!!");
//       this.setState({ fruit: e.target.value });
//     }
  
//     render() {
//       return (
//         <div id="App">
//           <div className="select-container">
//             <select value={this.state.fruit} onChange={this.handleChange}>
//               {options.map((option) => (
//                 <option value={option.value}>{option.label}</option>
//               ))}
//             </select>
//           </div>
//         </div>
//       );
//     }
//   }
  
//   export default SelectionComponent;
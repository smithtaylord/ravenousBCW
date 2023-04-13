import React, { useState } from "react";
import '../assets/scss/pages/HomePage.scss';
import BusinessList from '../components/BusinessList.jsx';
import SearchBar from '../components/SearchBar.jsx';

class HomePage extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList />
      </div>
    )
  }
}

export default HomePage

// export default function HomePage() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="home-page">
//       <div className="container my-3">
//         <div className="row">
//           <div className="col-4">
//             <div className="card">
//               <div className="card-body">
//                 <button className="btn btn-success my-1" onClick={() => setCount((count) => count + 1)}>
//                   count is {count}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
// import React from "react";
import "../style/index.css";

// export default function Header() {
//   return (

//      <div className="container-fluid ">
//       <section className="">
//         <div className="d-flex justify-content-between">
//           <div className="logo">
//           <img
//             src="https://www.toddleapp.com/wp-content/uploads/2021/09/Group-1608.png"
//             alt="Toddle"
//             width="90"
//             height="30"

//           />
//           </div>
//           <div class="wrapper">
//             <div class="input-box">
//               <input type="text" class="navbar" placeholder="Search" />
//               <i class="fa fa-search"></i>
//             </div>
//            <div>
//            <button
//             id="createButton"
//               type="button"
//               class="btn btn-danger btn-sm button"
//               data-bs-toggle="modal"
//               data-bs-target="#exampleModal"
//             >
//               <img src="/image/Union2.png" class="plus-logo"/>
//               &nbsp;Create new board
//             </button>
//            </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

import React from "react";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar">
        <div className="container-fluid">
          <div className="logo">
            <img
              src="https://www.toddleapp.com/wp-content/uploads/2021/09/Group-1608.png"
              alt="Toddle"
              width="90"
              height="30"
            />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              {/* <button className="btn btn-outline-success " type="submit">Search</button> */}

              <button
                id="createButton"
                type="button"
                class="btn btn-danger btn-sm button ml-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <img src="/image/Union2.png" class="plus-logo" alt="" />
                &nbsp;Create new board
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

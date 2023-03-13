import React from "react";


import "bootswatch/dist/lux/bootstrap.min.css"
import List from "./List";


function Buscador() {

    return (
        <>
          <main className="bg-dark">
            <div className="container">
              <List />
            </div>
          </main>
        </>
      );
}

export default Buscador
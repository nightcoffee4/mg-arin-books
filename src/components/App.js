import React from "react";
import BookList from "./BookList";
import BookContextProivder from "../contexts/BookContext";

class App extends React.Component {
  render() {
    return (
      <div>
        <BookContextProivder>
          <BookList />
        </BookContextProivder>
      </div>
    );
  }
}
export default App;

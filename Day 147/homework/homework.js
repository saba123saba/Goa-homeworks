
          ///// 1) 

// import React, { useState } from 'react';

// function InputForm() {
//   const [inputs, setInputs] = useState({
//     input1: '',
//     input2: '',
//     input3: '',
//     input4: '',
//     input5: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputs((prevState) => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   return (
//     <div>
//       <input type="text" name="input1" value={inputs.input1} onChange={handleChange}/>
//       <input type="text" name="input2" value={inputs.input2} onChange={handleChange}/>
//       <input type="text" name="input3" value={inputs.input3} onChange={handleChange}/>
//       <input type="text" name="input4" value={inputs.input4} onChange={handleChange}/>
//       <input type="text" name="input5" value={inputs.input5} onChange={handleChange}/>
//     </div>
//   );
// }

// export default InputForm;



          //// 2) 

import { useState, useEffect } from "react";

export default function BookLibraryApp() {
  const [books, setBooks] = useState(() => {
    return JSON.parse(localStorage.getItem("books")) || [];
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [newBook, setNewBook] = useState("");

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = () => {
    if (newBook.trim() === "") return;
    setBooks([...books, { title: newBook, read: false }]);
    setNewBook("");
  };

  const toggleReadStatus = (index) => {
    setBooks(
      books.map((book, i) =>
        i === index ? { ...book, read: !book.read } : book
      )
    );
  };

  const filteredBooks = books.filter((book) => {
    if (filter === "all") return true;
    return filter === "read" ? book.read : !book.read;
  });

  const searchedBooks = filteredBooks.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">📚 Book Library</h2>
      <input type="text" placeholder="Search books..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full p-2 border rounded-md mb-2"/>
      <select value={filter} onChange={(e) => setFilter(e.target.value)} className="w-full p-2 border rounded-md mb-2">
        <option value="all">All</option>
        <option value="read">Read</option>
        <option value="unread">Unread</option>
      </select>
      <div className="flex gap-2 mb-2">
        <input type="text" placeholder="Add a book..." value={newBook} onChange={(e) => setNewBook(e.target.value)} className="flex-1 p-2 border rounded-md"/>
        <button onClick={addBook} className="bg-blue-500 text-white px-4 py-2 rounded-md">Add</button>
      </div>
      <ul className="space-y-2">
        {searchedBooks.map((book, index) => (
          <li
            key={index}
            className={`p-2 border rounded-md flex justify-between cursor-pointer ${
              book.read ? "bg-green-100" : "bg-red-100"
            }`}
            onClick={() => toggleReadStatus(index)}
          >
            {book.title} <span>{book.read ? "✅ Read" : "📖 Unread"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}



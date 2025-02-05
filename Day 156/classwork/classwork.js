// import React, { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// const BookLibrary = () => {
//   const [books, setBooks] = useState([
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
//     { title: "To Kill a Mockingbird", author: "Harper Lee" },
//     { title: "1984", author: "George Orwell" }
//   ]);
//   const [newBook, setNewBook] = useState({ title: "", author: "" });

//   const addBook = () => {
//     if (newBook.title && newBook.author) {
//       setBooks([...books, newBook]);
//       setNewBook({ title: "", author: "" });
//     }
//   };

//   return (
//     <div className="p-6 max-w-lg mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Book Library</h1>
//       <div className="grid gap-4">
//         {books.map((book, index) => (
//           <Card key={index} className="p-4 shadow-md rounded-xl">
//             <CardContent>
//               <h2 className="text-lg font-semibold">{book.title}</h2>
//               <p className="text-sm text-gray-600">by {book.author}</p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//       <div className="mt-6 p-4 border rounded-lg shadow-sm">
//         <h2 className="text-lg font-semibold mb-2">Add a new book</h2>
//         <Input
//           placeholder="Title"
//           value={newBook.title}
//           onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
//           className="mb-2"
//         />
//         <Input
//           placeholder="Author"
//           value={newBook.author}
//           onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
//           className="mb-2"
//         />
//         <Button onClick={addBook} className="w-full">Add Book</Button>
//       </div>
//     </div>
//   );
// };

// export default BookLibrary;

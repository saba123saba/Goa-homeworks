// 1) შექმენით ერთი კომპონენტი, სადაც შექმნით ორ მოვლენის მართველ ფუნქვიას, handleClick და handleCorrect. პირველ შემთხვევაში ჩვეულებრივად(როგორც აქამდე აკეთებდით), ღილაკის დაჭერისას განაახლეთ პარაგრაფის ტექსტი
// მეორე შემთხვევაში, გააკეთეთ იგივე რამ ქოლბექ ფუნქვიების გამოყენებით

import React, { useState } from 'react';

function TextUpdater() {
  const [text, setText] = useState('');

  const handleClick = () => {
    setText('button clicked');
  };

  const handleCorrect = (callback) => {
    callback('the button was clicked by callBack function');
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={handleClick}>remember text</button>
      <button onClick={() => handleCorrect(setText)}>remember callback</button>
    </div>
  );
}

export default TextUpdater;

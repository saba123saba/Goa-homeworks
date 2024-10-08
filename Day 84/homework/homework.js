// 2) https://felixgerschau.com/javascript-memory-management/ გადაავლეთ თვალი და გააკეთეთ პრეზენტაცია
// ნებისმიერი პროგრამით ან პლატფორმით, პრეზენტაციის მთავარი შეკიტხვა არის "როგორ მუშაობს stack და heap"


// Stack და Heap არის ორი მთავარი მეხსიერების სექცია
//, რომელიც გამოიყენება პროგრამების მუშაობისთვის და მათ მეხსიერების მართვისთვის. 


//Stack არის მეხსიერების ერთგვარი ერუდი, რომელიც ოპერაციული სისტემის მიერ ინტეგრირებულია
// პროგრამის მეხსიერებაში. Stack-ში მონაცემები ორგანიზებულია ისე, რომ ბოლოს დამატებული პირველი
// ამოიღება (LIFO - Last In, First Out).

//Heap არის მეხსიერების სექცია, რომელიც გამოიყენება დინამიური მეხსიერების შესანახად.
// აქ მონაცემები ინახება იმ მახასიათებლით, რომ მასიური მეხსიერება (დინამიური ობიექტები)
// შეიძლება იყოს განსხვავებული სიგრძით და პროგრამის საჭიროებების მიხედვით.


let Person = {
    name: 'saba',
}

Person.name = 'luka';
console.log(Person)
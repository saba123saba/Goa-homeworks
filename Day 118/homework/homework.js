class LibraryItem {
    constructor(title, year) {
        this.title = title;
        this.year = year;
        this.isAvailable = true;
    }

    borrowItem() {
        if (this.isAvailable) {
          this.isAvailable = false;
          console.log(`${this.title} გამოუქმდა.`);
        } else {
          console.log(`${this.title} უკვე იქნა არჩეული და არ არის ხელმისაწვდომი.`);
        }
    }

    returnItem() {
        this.isAvailable = true;
        console.log(`${this.title} დაბრუნდა.`)
    }
}
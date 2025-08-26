abstract class LibraryItem {
    protected id: number;
    protected isAvailable: boolean;

    constructor(id: number) {
        this.id = id;
        this.isAvailable = true;
    }

    checkOut(): void {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`Item ${this.id} has been checked out.`);
        } else {
            console.log(`Item ${this.id} is not available.`);
        }
    }

    returnItem(): void {
        this.isAvailable = true;
        console.log(`Item ${this.id} has been returned.`);
    }

    abstract getDetails(): string;
}

class MyBook extends LibraryItem {
    private _title: string;
    private _author: string;

    constructor(title: string, author: string, id: number) {
        super(id);
        this._title = title;
        this._author = author;
    }

    get title(): string {
        return this._title;
    }

    get author(): string {
        return this._author;
    }

    getDetails(): string {
        return `Book: ${this._title} by ${this._author} (ID: ${this.id})`;
    }
}

class EBook extends MyBook {
    private fileSize: number;

    constructor(title: string, author: string, id: number, fileSize: number) {
        super(title, author, id);
        this.fileSize = fileSize;
    }

    getDetails(): string {
        return `${super.getDetails()}, File Size: ${this.fileSize}MB`;
    }
}

const book_01 = new MyBook("Deep Work", "Cal Newport", 1);
const ebook_01 = new EBook("Digital Minimalism", "Cal Newport", 2, 5);

const libraryItems: LibraryItem[] = [book_01, ebook_01];

libraryItems.forEach(item => {
    console.log(item.getDetails());
});

book_01.checkOut();
book_01.returnItem();
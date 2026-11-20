///1
class User {
  public id: number;
  public name: string;
  public email: string;

  private password: string;

  protected phone: string;

  private _age!: number;

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    phone: string,
    age: number
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;

    this.age = age;
  }

  
  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value < 18 || value > 60) {
      throw new Error("Age must be between 18 and 60");
    }

    this._age = value;
  }

  displayInfo(): void {
    console.log("ID:", this.id);
    console.log("Name:", this.name);
    console.log("Email:", this.email);
    console.log("Phone:", this.phone);
    console.log("Age:", this.age);
  }
}



////2



class Admin extends User {

  manageNotes(): void {
    console.log("Admin is managing notes...");
  }

}



///3






class Note {
  public id: number;
  public title: string;
  public content: string;

  public userId: User;

  constructor(
    id: number,
    title: string,
    content: string,
    userId: User
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.userId = userId;
  }

  preview(): string {
    return this.content.length > 50
      ? this.content.substring(0, 50) + "..."
      : this.content;
  }
}



////4



class NoteBook {
  private notes: Note[] = [];

  public addNote(note: Note): void {
    this.notes.push(note);

    console.log("Note added successfully");
  }

  public removeNote(noteId: number): void {
    this.notes = this.notes.filter(
      note => note.id !== noteId
    );

    console.log("Note removed successfully");
  }

  public getNotes(): Note[] {
    return this.notes;
  }
}



///5




class user {
  

  public notebooks: NoteBook[] = [];

  addNotebook(notebook: NoteBook): void {
    this.notebooks.push(notebook);
  }

  removeNotebook(notebook: NoteBook): void {
    this.notebooks = this.notebooks.filter(
      item => item !== notebook
    );
  }
}


///6


class Nota {
  public id: number;
  public title: string;
  public content: string;

  public userId: User;

  constructor(
    id: number,
    title: string,
    content: string,
    userId: User
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.userId = userId;
  }

  preview(): string {
    return this.content.length > 50
      ? this.content.substring(0, 50) + "..."
      : this.content;
  }
}




///7



class Storage<T> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  removeItem(item: T): void {
    this.items = this.items.filter(
      currentItem => currentItem !== item
    );
  }

  getAllItems(): T[] {
    return this.items;
  }
}





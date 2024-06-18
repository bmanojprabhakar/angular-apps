import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  inputTitle: string = "";
  inputAuthor: string = "";

  books: Book[] = [];

  ngOnInit(): void {
    let savedBooks = localStorage.getItem("books");
    this.books = savedBooks ? JSON.parse(savedBooks) : [];
  }

  addBook() {
    if(this.inputTitle.trim().length && this.inputAuthor.trim().length) {
      this.books.push({
        id: Math.floor(Math.random() * 100) + 1,
        title: this.inputTitle,
        author: this.inputAuthor
      })
      localStorage.setItem("books", JSON.stringify(this.books));
    } else {
      alert('Both Title and Author are mandatory');
    }

  }

  deleteBook(index: number) {
    this.books.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(this.books));
  }

}

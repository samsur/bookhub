import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userPrompt: string = '';
  books: Book[] = [];
  loading: boolean = false;

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  searchBooks(): void {
    if (!this.userPrompt.trim()) {
      return;
    }

    this.loading = true;
    this.bookService.getBookRecommendations(this.userPrompt).subscribe({
      next: (response) => {
        this.books = response.books;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching book recommendations:', error);
        this.loading = false;
      }
    });
  }

  viewBookDetail(book: Book, index: number): void {
    this.router.navigate(['/book', index], { state: { book } });
  }
}


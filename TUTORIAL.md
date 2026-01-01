# BookHub Tutorial - Step-by-Step Guide

This tutorial will guide you through creating the BookHub application from scratch. You'll learn how to build a modern Angular application with routing, services, and Angular Material components.

## Prerequisites

Before you begin, make sure you have the following installed:
- Node.js (v18 or higher)
- npm (comes with Node.js)
- Angular CLI

To install Angular CLI globally, run:
```bash
npm install -g @angular/cli
```

## Step 1: Create a New Angular Project

Create a new Angular project with standalone components:

```bash
ng new bookhub
```
When prompted, answer:
- Which stylesheet format would you like to use? **CSS**
-  Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)?n

Navigate into your project:
```bash
cd bookhub
```

## Step 2: Install Angular Material

Install Angular Material and its dependencies:

```bash
ng add @angular/material
```

When prompted, choose:
- Choose a prebuilt theme: **Indigo/Pink**
- Set up global Angular Material typography styles? **Yes**
- Include the Angular animations module? **Yes**

## Step 3: Open Project in Visual Studio Code

Open the project in Visual Studio Code:

```bash
code .
```

This will open VS Code with your bookhub project.

## Step 4: Create the Project Structure

In VS Code, you can create the necessary folders using the terminal or the file explorer.

Create the folders for models and services:

```bash
mkdir src/app/models
mkdir src/app/services
```

Generate the components using Angular CLI:

```bash
ng g c home
ng g c team
ng g c book-detail
```

This will automatically create all the necessary files (TypeScript, HTML, CSS, and spec files) for each component.

## Step 5: Create the Book Interface

Create the file `src/app/models/book.interface.ts`:

```typescript
export interface Book {
  title: string;
  author: string;
  genre: string;
  year: number;
  description: string;
  rating: number;
}

export interface BookResponse {
  books: Book[];
}
```

This interface defines the structure of our book data.

## Step 6: Create the Book Service

Create the file `src/app/services/book.service.ts`:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookResponse } from '../models/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:8000/api/generate';

  constructor(private http: HttpClient) {}

  getBookRecommendations(prompt: string): Observable<BookResponse> {
    return this.http.post<BookResponse>(this.apiUrl, { prompt });
  }
}
```

This service handles HTTP communication with the backend API.

## Step 7: Update App Configuration

Update `src/app/app.config.ts` to include HTTP client and animations:

```typescript
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient()
  ]
};
```

## Step 8: Update the Home Component

The component files were already generated in Step 3. Now we'll update them.

### Home Component TypeScript
Update `src/app/home/home.component.ts`:

```typescript
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
```

### Home Component HTML
Update `src/app/home/home.component.html` (replace all content):

```html
<div class="home-container">
  <div class="search-section">
    <h2>Find Your Next Great Read</h2>
    <p>Tell us about your book preferences and we'll recommend some great books for you!</p>
    
    <mat-form-field appearance="outline" class="search-field">
      <mat-label>What kind of books do you enjoy?</mat-label>
      <textarea 
        matInput 
        [(ngModel)]="userPrompt" 
        placeholder="E.g., I love science fiction books with time travel and adventure"
        rows="3">
      </textarea>
    </mat-form-field>
    
    <button mat-raised-button color="primary" (click)="searchBooks()" [disabled]="!userPrompt.trim() || loading">
      Get Recommendations
    </button>
  </div>

  <div class="loading-section">
    @if (loading) {
      <mat-spinner></mat-spinner>
      <p>Finding the perfect books for you...</p>
    }
  </div>

  <div class="books-grid">
    @if (books.length > 0 && !loading) {
      @for (book of books; track book.title; let i = $index) {
        <mat-card class="book-card" (click)="viewBookDetail(book, i)">
          <mat-card-header>
            <mat-card-title>{{ book.title }}</mat-card-title>
            <mat-card-subtitle>{{ book.author }} ({{ book.year }})</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p class="genre"><strong>Genre:</strong> {{ book.genre }}</p>
            <p class="description">{{ book.description }}</p>
            <p class="rating"><strong>Rating:</strong> ⭐ {{ book.rating }}/5</p>
          </mat-card-content>
        </mat-card>
      }
    }
  </div>
</div>
```

### Home Component CSS
Update `src/app/home/home.component.css` (replace all content):

```css
.home-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.search-section {
  text-align: center;
  margin-bottom: 40px;
}

.search-section h2 {
  color: #3f51b5;
  margin-bottom: 10px;
}

.search-section p {
  color: #666;
  margin-bottom: 20px;
}

.search-field {
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
}

.search-section button {
  padding: 10px 30px;
  font-size: 16px;
}

.loading-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
}

.loading-section p {
  margin-top: 20px;
  color: #666;
  font-size: 18px;
}

.books-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.book-card {
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}

.book-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.book-card mat-card-header {
  margin-bottom: 16px;
}

.book-card mat-card-title {
  font-size: 18px;
  font-weight: bold;
  color: #3f51b5;
}

.book-card mat-card-subtitle {
  font-size: 14px;
  color: #666;
}

.genre {
  margin-bottom: 10px;
  color: #555;
}

.description {
  color: #333;
  line-height: 1.5;
  margin-bottom: 10px;
}

.rating {
  color: #f57c00;
  font-weight: 500;
}

@media (max-width: 768px) {
  .books-grid {
    grid-template-columns: 1fr;
  }
  
  .search-field {
    width: 100%;
  }
}
```

## Step 9: Update the Team Component

### Team Component TypeScript
Update `src/app/team/team.component.ts`:

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

interface TeamMember {
  name: string;
  avatar: string;
  role: string;
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  teamMembers: TeamMember[] = [
    {
      name: 'Tara',
      avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      role: 'Full Stack Developer'
    },
    {
      name: 'Grace',
      avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      role: 'Full Stack Developer'
    },
    {
      name: 'Rebecca',
      avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      role: 'Full Stack Developer'
    },
    {
      name: 'Araya',
      avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      role: 'Backend Developer'
    }
  ];
}
```

### Team Component HTML
Update `src/app/team/team.component.html` (replace all content):

```html
<div class="team-container">
  <h2>Our Team</h2>
  <p class="subtitle">Meet the amazing people behind BookHub</p>
  
  <div class="team-grid">
    @for (member of teamMembers; track member.name) {
      <mat-card class="team-card">
        <img mat-card-image [src]="member.avatar" [alt]="member.name" class="avatar">
        <mat-card-content>
          <h3>{{ member.name }}</h3>
          <p class="role">{{ member.role }}</p>
        </mat-card-content>
      </mat-card>
    }
  </div>
</div>
```

### Team Component CSS
Update `src/app/team/team.component.css` (replace all content):

```css
.team-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.team-container h2 {
  text-align: center;
  color: #3f51b5;
  margin-bottom: 10px;
  font-size: 32px;
}

.subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 40px;
  font-size: 18px;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.team-card {
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin: 20px auto;
  display: block;
}

.team-card h3 {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.role {
  color: #666;
  font-size: 14px;
  font-style: italic;
}

@media (max-width: 768px) {
  .team-grid {
    grid-template-columns: 1fr;
  }
}
```

## Step 10: Update the Book Detail Component

### Book Detail Component TypeScript
Update `src/app/book-detail/book-detail.component.ts`:

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { Book } from '../models/book.interface';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule
  ],
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book?: Book;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    // Get book data from navigation state
    const navigation = history.state;
    if (navigation && navigation.book) {
      this.book = navigation.book;
    }
  }

  goBack(): void {
    this.location.back();
  }

  getStars(): number[] {
    return [1, 2, 3, 4, 5];
  }
}
```

### Book Detail Component HTML
Update `src/app/book-detail/book-detail.component.html` (replace all content):

```html
<div class="detail-container">
  @if (book) {
    <div class="back-button-container">
      <button mat-raised-button (click)="goBack()">
        <mat-icon>arrow_back</mat-icon>
        Back to Results
      </button>
    </div>

    <mat-card class="detail-card">
      <div class="card-header">
        <div class="book-info">
          <h1 class="book-title">{{ book.title }}</h1>
          <h2 class="book-author">by {{ book.author }}</h2>
          
          <div class="metadata">
            <mat-chip-set>
              <mat-chip class="genre-chip">{{ book.genre }}</mat-chip>
              <mat-chip class="year-chip">{{ book.year }}</mat-chip>
            </mat-chip-set>
          </div>

          <div class="rating-container">
            <div class="stars">
              @for (star of getStars(); track star) {
                <span class="star" [class.filled]="star <= book.rating">
                  ★
                </span>
              }
            </div>
            <span class="rating-text">{{ book.rating }}/5</span>
          </div>
        </div>

        <div class="book-cover">
          <div class="cover-placeholder">
            <mat-icon>menu_book</mat-icon>
          </div>
        </div>
      </div>

      <mat-card-content>
        <div class="description-section">
          <h3>Description</h3>
          <p class="description">{{ book.description }}</p>
        </div>

        <div class="additional-info">
          <div class="info-item">
            <mat-icon>person</mat-icon>
            <div>
              <h4>Author</h4>
              <p>{{ book.author }}</p>
            </div>
          </div>
          
          <div class="info-item">
            <mat-icon>category</mat-icon>
            <div>
              <h4>Genre</h4>
              <p>{{ book.genre }}</p>
            </div>
          </div>
          
          <div class="info-item">
            <mat-icon>event</mat-icon>
            <div>
              <h4>Published</h4>
              <p>{{ book.year }}</p>
            </div>
          </div>
        </div>
      </mat-card-content>
    </mat-card>
  }

  @if (!book) {
    <div class="error-container">
      <mat-card>
        <mat-card-content>
          <h2>Book not found</h2>
          <p>Sorry, we couldn't find the book details.</p>
          <button mat-raised-button color="primary" (click)="goBack()">Go Back</button>
        </mat-card-content>
      </mat-card>
    </div>
  }
</div>
```

### Book Detail Component CSS
Update `src/app/book-detail/book-detail.component.css` (replace all content):

```css
.detail-container {
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.back-button-container {
  margin-bottom: 20px;
}

.back-button-container button {
  display: flex;
  align-items: center;
  gap: 8px;
}

.detail-card {
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card-header {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 30px;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 2px solid #e0e0e0;
}

.book-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.book-title {
  font-size: 32px;
  font-weight: 600;
  color: #3f51b5;
  margin: 0;
  line-height: 1.2;
}

.book-author {
  font-size: 20px;
  font-weight: 400;
  color: #666;
  margin: 0;
  font-style: italic;
}

.metadata {
  display: flex;
  gap: 10px;
  align-items: center;
}

mat-chip-set {
  display: flex;
  gap: 8px;
}

.genre-chip {
  background-color: #e3f2fd !important;
  color: #1976d2 !important;
  font-weight: 500;
}

.year-chip {
  background-color: #f3e5f5 !important;
  color: #7b1fa2 !important;
  font-weight: 500;
}

.rating-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.stars {
  display: flex;
  gap: 2px;
}

.star {
  font-size: 28px;
  color: #ddd;
}

.star.filled {
  color: #ffa726;
}

.rating-text {
  font-size: 20px;
  font-weight: 600;
  color: #f57c00;
}

.book-cover {
  display: flex;
  align-items: center;
  justify-content: center;
}

.cover-placeholder {
  width: 200px;
  height: 280px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.cover-placeholder mat-icon {
  font-size: 80px;
  width: 80px;
  height: 80px;
  color: white;
}

.description-section {
  margin-bottom: 30px;
}

.description-section h3 {
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
  font-weight: 500;
}

.description {
  font-size: 18px;
  line-height: 1.8;
  color: #555;
  text-align: justify;
}

.additional-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 30px;
  padding-top: 30px;
  border-top: 2px solid #e0e0e0;
}

.info-item {
  display: flex;
  gap: 15px;
  align-items: flex-start;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.info-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.info-item mat-icon {
  color: #3f51b5;
  font-size: 28px;
  width: 28px;
  height: 28px;
}

.info-item h4 {
  margin: 0 0 5px 0;
  font-size: 14px;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.info-item p {
  margin: 0;
  font-size: 16px;
  color: #333;
  font-weight: 500;
}

.error-container {
  padding: 40px;
  max-width: 600px;
  margin: 40px auto;
  text-align: center;
}

.error-container h2 {
  color: #333;
  margin-bottom: 10px;
}

.error-container p {
  color: #666;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .detail-card {
    padding: 20px;
  }

  .card-header {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .book-cover {
    order: -1;
    margin-bottom: 20px;
  }

  .cover-placeholder {
    width: 150px;
    height: 210px;
  }

  .cover-placeholder mat-icon {
    font-size: 60px;
    width: 60px;
    height: 60px;
  }

  .book-title {
    font-size: 24px;
  }

  .book-author {
    font-size: 16px;
  }

  .metadata {
    justify-content: center;
  }

  .rating-container {
    justify-content: center;
  }

  .additional-info {
    grid-template-columns: 1fr;
  }

  .description {
    text-align: left;
  }
}
```

## Step 11: Update the App Component

### App Component TypeScript
Update `src/app/app.component.ts`:

```typescript
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MatToolbarModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BookHub';
}
```

### App Component HTML
Update `src/app/app.component.html`:

```html
<mat-toolbar color="primary" class="toolbar">
  <span class="toolbar-title">📚 BookHub</span>
  <span class="spacer"></span>
  <button mat-button routerLink="/">Home</button>
  <button mat-button routerLink="/team">Team</button>
</mat-toolbar>

<router-outlet />
```

### App Component CSS
Update `src/app/app.component.css`:

```css
.toolbar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.toolbar-title {
  font-size: 24px;
  font-weight: 500;
}

.spacer {
  flex: 1 1 auto;
}
```

## Step 12: Configure Routes

Update `src/app/app.routes.ts`:

```typescript
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'team', component: TeamComponent },
  { path: 'book/:id', component: BookDetailComponent },
  { path: '**', redirectTo: '' }
];
```

## Step 13: Update Global Styles

Update `src/styles.css`:

```css
/* You can add global styles to this file, and also import other style files */
@import '@angular/material/prebuilt-themes/indigo-pink.css';

html, body { 
  height: 100%; 
}

body { 
  margin: 0; 
  font-family: Roboto, "Helvetica Neue", sans-serif;
  background-color: #f5f5f5;
}

* {
  box-sizing: border-box;
}
```

## Step 14: Run the Application

Make sure your backend API is running on `http://localhost:8000`, then start the development server:

```bash
ng serve
```

Or use the npm script:

```bash
npm start
```

Open your browser and navigate to:
```
http://localhost:4200
```

## Testing the Application

1. **Home Page**: Enter a book preference like "I love science fiction books with time travel"
2. Click "Get Recommendations"
3. View the recommended books in a responsive grid
4. Click on any book card to see detailed information
5. Navigate to the Team page to see team members
6. Use the back button to return to search results

## Key Concepts Learned

### 1. **Standalone Components**
Modern Angular uses standalone components that don't require NgModule. Each component declares its own dependencies.

### 2. **Dependency Injection**
Services like `BookService` are injected into components using the constructor.

### 3. **HTTP Communication**
The `HttpClient` is used to make API calls, returning Observables that we subscribe to.

### 4. **Routing**
Angular Router enables navigation between different views/components.

### 5. **Angular Material**
Pre-built UI components that follow Material Design principles.

### 6. **Data Binding**
- `[(ngModel)]` - Two-way binding
- `[disabled]` - Property binding
- `(click)` - Event binding
- `{{ }}` - Interpolation

### 7. **Directives**
- `@if` - Conditional rendering (modern control flow)
- `@for` - Loop through arrays (modern control flow)
- `[class.filled]` - Conditional CSS classes
- `track` - Optimize list rendering performance

### 8. **TypeScript Interfaces**
Define the shape of data for type safety.

### 9. **Responsive Design**
Using CSS Grid and media queries for mobile-friendly layouts.

### 10. **Component Communication**
Passing data through router state for navigation.

## Common Issues and Solutions

### Issue: Can't bind to 'ngModel'
**Solution**: Make sure you've imported `FormsModule` in your component.

### Issue: HTTP request fails
**Solution**: Check that `provideHttpClient()` is in `app.config.ts` and your backend is running.

### Issue: Material components not working
**Solution**: Import the specific Material module (like `MatButtonModule`) in your component.

### Issue: Routes not working
**Solution**: Make sure you have `<router-outlet />` in your `app.component.html`.

## Next Steps

To extend this application, consider:
- Adding a favorites feature
- Implementing search history
- Adding filters (genre, year, rating)
- Creating a user authentication system
- Adding more detailed book information
- Implementing pagination for large result sets

## Resources

- [Angular Documentation](https://angular.dev)
- [Angular Material](https://material.angular.io)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [RxJS Documentation](https://rxjs.dev)

---

Congratulations! You've built a complete Angular application with routing, services, and Material Design components! 🎉


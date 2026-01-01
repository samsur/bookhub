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


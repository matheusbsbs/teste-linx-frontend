
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {Venda} from "./venda.model";


@Injectable({
  providedIn: 'root'
})
export class VendaService {

  baseUrl = "http://localhost:8080/pedidos";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'close(X)', {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  create(venda: Venda): Observable<Venda> {
    return this.http.post<Venda>(this.baseUrl, venda).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  read(): Observable<Venda[]> {
    return this.http.get<Venda[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Venda> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Venda>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(venda: Venda): Observable<Venda> {
    const url = `${this.baseUrl}/${venda.id}`;
    return this.http.put<Venda>(url, venda).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro, contate o suporte técnico!', true);
    return EMPTY;
  }
}

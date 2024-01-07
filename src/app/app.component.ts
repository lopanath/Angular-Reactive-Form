import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Observable, of, from } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'reactive-form';

  reactiveForm: FormGroup;

  // ngOnInit(): void {
  //   this.reactiveForm = new FormGroup({
  //     personalDetails: new FormGroup({
  //       firstName: new FormControl(null, [
  //         Validators.required,
  //         Validators.minLength(3),
  //       ]),
  //       lastName: new FormControl(null, Validators.required),
  //       email: new FormControl(null, [Validators.required, Validators.email]),
  //     }),
  //     gender: new FormControl(null),
  //     country: new FormControl(null),
  //   });
  // }

  onSubmit() {
    // console.log(this.reactiveForm);
  }

  // myobservable = new Observable((observer) => {
  //   console.log('Observable Starts');

  //   setTimeout(() => {
  //     observer.next('1');
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next('2');
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.error(new Error('Something went wrong'));
  //   }, 2000);

  //   setTimeout(() => {
  //     observer.next('3');
  //   }, 3000);
  //   setTimeout(() => {
  //     observer.next('4');
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.next('5');
  //   }, 5000);

  //   setTimeout(() => {
  //     observer.complete();
  //   }, 6000);
  // });

  // myObservable = Observable.create((observer) => {
  //   setTimeout(() => {
  //     observer.next('A');
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next('B');
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next('C');
  //   }, 3000);
  //   setTimeout(() => {
  //     observer.next('D');
  //   }, 4000);
  // });

  // array2 = ['A', 'B', 'C']

  // myObservable  = of(this.array1, this.array2);

  // myObservable  = from(this.array1)

  array1 = [1, 2, 3, 4, 5, 6];
  myObservable = from(this.array1);


  // 5,10,15,20...
  transformedObservable = this.myObservable.pipe(
    map((val) => {
      return val * 5;
    })
  );

  filteredObs = this.transformedObservable.pipe(
    filter((val) => {
      return val >= 25;
    })
  );

  ngOnInit(): void {
    // this.myobservable.subscribe(
    //   (val) => {
    //     console.log(val);
    //   },
    //   (err) => {
    //     alert(err.message);
    //   },
    //   () => {
    //     alert('Observable has completed emitting all the data');
    //   }
    // );

    this.filteredObs.subscribe({
      next: (val) => console.log(val),
      error: (err) => alert(err.message),
      complete: () => alert('Observable has completed emitting all the data'),
    });
  }
}

// subscribe(nextData, error , completion)

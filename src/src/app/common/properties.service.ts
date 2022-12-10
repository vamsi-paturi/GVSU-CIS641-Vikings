import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  // tbody='50.5vh';
  role=0// office
  //role=2; // estimator;
  //role=2; // technition
  tbody="80vh"
  length='80vh';
  createLength='55.5vh';
  constructor(public breakpointObserver: BreakpointObserver) { 
    this.breakpointObserver
    .observe(['(max-height: 600px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.tbody='61.5vh';
        this.length='75.5vh';
        this.createLength='75.5vh'
      } else {
        
     
    this.breakpointObserver
    .observe(['(max-height: 768px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.tbody='79.5vh';
        this.length='79.5vh';
        this.createLength='79.5vh'
      } else {
        this.breakpointObserver
        .observe(['(max-height: 900px)'])
        .subscribe((state: BreakpointState) => {
          if (state.matches) {
            this.tbody='87.5vh';
            this.length='87.5vh';
            this.createLength='87.5vh'
          } else {
            this.breakpointObserver
        .observe(['(max-height: 1050px)'])
        .subscribe((state: BreakpointState) => {
          if (state.matches) {
            this.tbody='86.5vh';
            this.length='86.5vh';
            this.createLength='86.5vh'
          } else {
            this.breakpointObserver
            .observe(['(max-height: 1200px)'])
            .subscribe((state: BreakpointState) => {
              if (state.matches) {
                this.tbody='88.5vh';
                this.length='88.5vh';
                this.createLength='88.5vh'
              } else {
                this.breakpointObserver
                .observe(['(max-height: 1440px)'])
                .subscribe((state: BreakpointState) => {
                  if (state.matches) {
                    this.tbody='90.5vh';
                    this.length='90.5vh';
                    this.createLength='90.5vh'
                  } else {
                    this.breakpointObserver
                    .observe(['(max-height: 2160px)'])
                    .subscribe((state: BreakpointState) => {
                      if (state.matches) {
                        this.tbody='93.5vh';
                        this.length='93.5vh';
                        this.createLength='93.5vh'
                      } else {
                        this.breakpointObserver
                .observe(['(max-height: 2304px)'])
                .subscribe((state: BreakpointState) => {
                  if (state.matches) {
                    this.tbody='94.5vh';
                    this.length='94.5vh';
                    this.createLength='94.5vh'
                  } else {
                    this.breakpointObserver
                .observe(['(max-height: 2880px)'])
                .subscribe((state: BreakpointState) => {
                  if (state.matches) {
                    this.tbody='95.5vh';
                    this.length='95.5vh';
                    this.createLength='95.5vh'
                  } else {
                    this.tbody='99.5vh';
                    this.length='99.5vh';
                    this.createLength='99.5vh'
                  }
                });
                  }
                });
                      }
                    });
                  }
                });
              }
            });
          }
        });
          }
        });
      }
    });
  }
});
    console.log(this.length)
     this.tbody=this.length;
     this.createLength=this.length;
  }
}

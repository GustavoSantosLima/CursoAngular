import {
    Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
    selector: 'app-life-cycle',
    templateUrl: './life-cycle.component.html',
    styleUrls: ['./life-cycle.component.css']
})

export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy {

    @Input() valorInicial: number = 10;

    constructor() {
        this.log('construtor');
    }

    ngOnChanges() {
        this.log('ngOnChanges');
    }

    ngOnInit() {
        this.log('ngOnInit');
    }

    ngDoCheck() {
        this.log('ngDoCheck');
    }

    ngAfterContentInit() {
        this.log('ngAfterContentInit');
    }

    ngAfterContentChecked() {
        this.log('ngAfterContentCheched');
    }

    ngAfterViewChecked() {
        this.log('ngAfterViewChecked');
    }

    ngOnDestroy() {
        this.log('ngOnDestroy');
    }

    private log(hook: string) {
        console.log(hook);
    }

}

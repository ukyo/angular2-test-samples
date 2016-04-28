import {
    Directive,
    OnInit,
    Input,
    Output, Renderer, ElementRef
} from 'angular2/core';
// import {} from 'angular2/common';

@Directive({
    selector: '[foo]'
})
export class FooDirective implements OnInit {
    private _value;

    constructor(
        private _ngEl: ElementRef,
        private _renderer: Renderer
    ) {
        // console.log(_ngEl);
    }

    ngOnInit() {
    }

    @Input('foo')
    set data(v: string) {
        this._value = v;
        this._renderer.setElementClass(this._ngEl.nativeElement, this._value, true);
    }
}
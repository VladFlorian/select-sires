// Angular
import { Directive, Input } from '@angular/core';

// Ionic
import { IonInput } from '@ionic/angular';

// Rxjs
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

// Text-mask
import { createTextMaskInputElement } from 'text-mask-core';

/**
 * ion-mask directive, based on text-mask module
 */

@Directive({
    selector: '[ionMask]',
    providers: [IonInput],
})
export class IonMaskDirective {

    @Input('ionMask')
    private mask: Array<any> = [];
    private onDestroy: Subject<void> = new Subject<void>();

    constructor(public ionInput: IonInput) { }

    public ngOnInit() {
        this.configureInput();
    }

    public ngOnDestroy() {
        this.onDestroy.next();
    }

    public async configureInput() {
        const input = await this.ionInput.getInputElement();
        const maskedInput = createTextMaskInputElement({
            inputElement: input,
            mask: this.mask,
            guide: false
        });
        // masking when event is not generated
        maskedInput.update(input.value);
        this.ionInput.value = input.value;

        // masking when event is  generated
        this.ionInput
            .ionChange
            .pipe()
            .subscribe((event: CustomEvent) => {
                const { value } = event.detail;
                maskedInput.update(value);
                this.ionInput.value = input.value;
            });
    }

}
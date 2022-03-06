import { Component } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { map, startWith, tap } from "rxjs";

interface Charge {
    name: string;
    value: string;
}
@Component({
    selector: 'app-camper-details',
    templateUrl: './camper-details.component.html',
    styleUrls: ['./camper-details.component.scss']
})
export class CamperChargeComponent {
    form: FormGroup = this.fb.group({
        selectedCharges: this.fb.array([]),
        playerName: [''],
        playerDOB: [''],
        gradYear: [''],
        parentName: [''],
        parentPhone: [''],
        parentEmail: ['']
    });
    
    charges: Charge[] = [
        { name: 'Day Camper - $450.00', value: '450.00' },
        { name: 'Overnight Camper - $700.00', value: '700.00' },
        { name: 'Regis Lacrosse T-shirt - $10.00', value: '10.00' },
        { name: 'Gatorade - $2.00', value: '2.00' },
        { name: 'Chips - $1.00', value: '1.00' },
        { name: 'Candy - $1.00', value: '1.00' },
    ];


    gradYears = ['2022', '2023',
        '2024', '2025', '2026', '2027', '2028', '2029', '2030'];



    get selectedCharges(): FormArray {
        return this.form.get('selectedCharges') as FormArray;
    }

    total$ = this.selectedCharges.valueChanges.pipe(
        startWith(this.calculateTotal(this.selectedCharges.value)),
        map(() => this.calculateTotal(this.selectedCharges.value))
    );

    constructor(private fb: FormBuilder) {}
    
    calculateTotal(value: string[]): string {
        console.log(value)
        const price = value.reduce((sum: number, charge: string) => {
            return sum + parseFloat(charge);
        }, 0);
        return price.toFixed(2);
    }
    onCheckboxChange(e: any) {
        const selectedCharges: FormArray = this.form.get('selectedCharges') as FormArray;
        if (e.target.checked) {
            selectedCharges.push(new FormControl(e.target.value));
        } else {
            let i: number = 0;
            selectedCharges.controls.forEach((item: any) => {
                if (item.value == e.target.value) {
                    selectedCharges.removeAt(i);
                    return;
                }
                i++;
            });
        }
    }
    submitForm() {
        console.log(this.form.value);
    }
}



import FormController from "@/controllers/form.controller";
import { FormModel, ValidatorUtils } from '@dymik-form/dymik-vue';

import { currentForm } from "@/views/directus-preview/form-content/index.viewmodel";

ValidatorUtils.customValidators['password_mismatch'] = (_: any, formValue: any) => {
    const password = formValue?.['password'];
    const confirmPasswordValue = formValue?.['confirmPassword'];
    return password === confirmPasswordValue;
}


export function eventStore() {
    const urlParams = new URLSearchParams(window.location.search);
    const formId = urlParams.get('formId');

    if (formId) {
        FormController.getForm(formId).then(item => {
            console.log('Form item from query:', item);
            currentForm.value = new FormModel(item);
        }).catch(error => {
            console.error('Error fetching form:', error);
        });
    }
}


export function onFormSubmit(value: any) {
    console.log('Form submitted with value: ' + JSON.stringify(value));
}

export function onValueChanged(value: any) {
    if (currentForm.value?.name === 'Demo Form') {
        const emailField = currentForm.value.fields.find((field) => field.name === 'email');

        if (emailField) {
            emailField.disabled = value?.['fullName'] == 'a';
        }
    }
}
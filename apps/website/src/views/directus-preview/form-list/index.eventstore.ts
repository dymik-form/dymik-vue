import FormController from "@/controllers/form.controller";
import type { FormListItem } from '@dymik-form/dymik-vue';
import { FormModel } from '@dymik-form/dymik-vue';
import { currentForm } from "@/views/directus-preview/form-content/index.viewmodel";
import { forms } from "@/views/directus-preview/form-list/index.viewmodel";

export function openForm(form: FormListItem) {
    FormController.getForm(form.id).then(item => {
        currentForm.value = new FormModel(item);
        const url = new URL(window.location.href);
        url.searchParams.set('formId', form.id); // Update the query string
        window.history.pushState({}, '', url.toString()); // Push the updated URL to the browser history
    });
    console.log('Opening form:', form.name);
}

export function eventStore() {
    FormController.getForms().then(list => {
        forms.value = list as FormListItem[];
    });
}
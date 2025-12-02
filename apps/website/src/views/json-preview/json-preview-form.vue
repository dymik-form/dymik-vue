<template>
    <div class="form-preview">
        <DymikForm v-if="formData" :form="formData" @submit="onFormSubmit" @value-change="onValueChanged"
            @loading="onLoading" @submit-result="onSubmitResult" />
        <ProgressSpinner v-if="loading" styleClass="loading-spinner" />
    </div>
    <Toast />
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useToast } from 'primevue/usetoast';
import { ProgressSpinner } from 'primevue';
import Toast from 'primevue/toast';
import { FormModel, type FormItem } from '@dymik-form/dymik-vue';

const route = useRoute();
const formId = ref<string | null>(null);
const formData = ref<FormModel | null>(null);
const loading = ref(false);
const toast = useToast();

onMounted(async () => {
    formId.value = route.query.id as string || 'No ID provided';

    if (formId.value) {
        try {
            const jsonFile = await import(`./meta-data/${formId.value}.json`);

            const formItem: FormItem = {
                id: formId.value,
                name: jsonFile.name,
                description: jsonFile.description,
                fields: jsonFile.fields,
                css_classes: jsonFile.css_classes,
                invalid: false
            }

            formData.value = new FormModel(formItem);

        } catch (error) {
            console.error(`Failed to load JSON file for ID: ${formId.value}`, error);
        }
    }
});

function onLoading(isLoading: boolean) {
    loading.value = isLoading;
}

function onSubmitResult({ message, type }: { message: string; type: 'success' | 'error' }) {
    console.log('Submit result:', message, type);

    toast.add({
        severity: type,
        summary: type === 'success' ? 'Success' : 'Error',
        detail: message,
        life: 3000,
    });
}

function onFormSubmit(data: any) {
    console.log('Form submitted:', data);
}

function onValueChanged(data: any) {
    console.log('Form value changed:', data);
}
</script>

<style scoped lang="scss">
.form-preview {
    padding: 1rem;
    //   background-color: #f9f9f9;
    //   border: 1px solid #ddd;
    //   border-radius: 5px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loading-spinner {
    margin-top: 1rem;
}
</style>
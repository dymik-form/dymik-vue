<template>
    <div class="dymik-form" :class="props.form.css_classes">
        <div class="field" :class="field.classes" v-for="field of props.form.fields">
            <label v-if="field.label" :for="field.name">
                {{ field.label }}
                <span v-if="field.required" class="required">*</span>
            </label>
            <component v-model="field.value" :is="field.type" v-bind="field.props" :key="field.name"
                :invalid="!!field.error" @value-change="(value: any) => onValueChanged(field.name, value)"
                :disabled="form.disabled || field.disabled" @click="(event: any) => onFieldClick(field, event)" />
            <span v-if="!!field.error" class="error">{{ field.error }}</span>
        </div>
    </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';
import FormModel from '../models/form.model';
import type { FormField } from '../interfaces';

const props = defineProps<{ form: FormModel }>();
const emit = defineEmits(['submit', 'value-change', 'loading', 'submit-result']);
const loading = ref(false);

function onValueChanged(fieldName: string, value: any) {
    const field = props.form.fields.find((f: FormField) => f.name === fieldName);

    if (field) {
        field.value = value;

        emit('value-change', props.form.getFormValue());
    }

    props.form.validateField(fieldName, value);
}

async function onFieldClick(field: FormField, event: Event) {
    if (field.props?.type === 'submit') {
        const isValid = props.form.validate();

        if (!isValid) {
            event.preventDefault();
            return;
        }

        event.preventDefault();

        if (props.form.submit_endpoint) {
            loading.value = true;
            emit('loading', true);

            try {
                await props.form.submitToEndpoint();
                emit('submit-result', { message: 'Form submitted successfully!', type: 'success' });
            } catch (error) {
                console.error('Error:', error);
                emit('submit-result', { message: 'Failed to submit form.', type: 'error' });
            } finally {
                loading.value = false;
                emit('loading', false);
            }
        }

        emit('submit', props.form.getFormValue());
    }
}
</script>
<style scoped lang="scss">
.dymik-form {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    padding: 1rem;

    .field {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        .required {
            color: red;
            margin-left: 0.25rem;
        }

        .error {
            color: red;
            font-size: 0.875rem;
            margin-top: 0.25rem;
        }

    }

    .loading-content {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        color: white;
    }
}
</style>

<style lang="scss">
.dymik-form {
    .field {
        &.full_width {
            width: 100%;
        }

        &.half_width {
            width: calc(50% - 8px);
        }
    }
}
</style>

<template>
    <DymikForm :form="formModel" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import metadata from './meta-data.json';
import { FormModel, type FormField } from '@dymik-form/dymik-vue';

const formModel = ref(new FormModel({
    name: metadata.name,
    fields: metadata.fields as FormField[],
}));

</script>
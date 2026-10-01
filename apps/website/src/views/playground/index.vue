<template>
  <div class="playground-layout">
    <header class="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div class="h-16 max-w-[1440px] mx-auto px-margin flex items-center justify-between gap-space-md">
        <div class="flex items-center gap-space-md shrink-0">
          <RouterLink to="/" class="flex items-center gap-space-sm">
            <img alt="Dymik Form Brand Logo" class="h-10 w-auto object-contain" src="/logo.png"/>
          </RouterLink>
          <div class="hidden sm:flex items-center gap-space-xs px-space-sm py-0.5 rounded-full bg-surface-container-high">
            <span class="font-label-code text-label-code text-on-surface-variant">Playground</span>
          </div>
        </div>
      </div>
    </header>

    <main class="w-full pt-16 h-screen flex flex-col bg-surface">
      <div class="flex-1 flex overflow-hidden">
        <!-- Editor Pane -->
        <div class="w-1/2 h-full flex flex-col border-r border-surface-container-high bg-code-dark text-surface-subtle">
          <div class="p-space-sm border-b border-white/10 bg-surface-container-lowest text-on-surface flex items-center justify-between">
            <span class="font-label-code text-sm font-semibold">Schema Editor (JSON)</span>
            <span v-if="jsonError" class="text-error text-xs font-label-code bg-error-container/20 px-2 py-0.5 rounded">{{ jsonError }}</span>
          </div>
          <textarea
            v-model="schemaJsonText"
            @input="updateSchema"
            class="flex-1 w-full p-space-md bg-transparent text-emerald-glow/90 font-label-code text-sm outline-none resize-none"
            spellcheck="false"
          ></textarea>
        </div>

        <!-- Preview Pane -->
        <div class="w-1/2 h-full flex flex-col bg-surface-container-lowest overflow-y-auto">
          <div class="p-space-sm border-b border-surface-container-high bg-surface flex items-center justify-between">
            <span class="font-label-code text-sm font-semibold text-on-surface">Live Preview</span>
          </div>
          <div class="flex-1 p-space-xl">
             <div class="max-w-xl mx-auto bg-surface p-space-lg rounded-2xl shadow-sm border border-surface-container-low">
                <DymikForm v-if="formModel" :form="formModel" />
             </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { FormModel } from '@dymik-form/dymik-vue';

const defaultSchema = {
  name: "ContactForm",
  fields: [
    {
      name: "fullName",
      type: "InputText",
      label: "Full Name",
      required: true,
      props: {
        placeholder: "John Doe"
      },
      classes: "full_width"
    },
    {
      name: "email",
      type: "InputText",
      label: "Email Address",
      required: true,
      validation_rules: [
        { type: "email", message: "Invalid email address" }
      ],
      props: {
        placeholder: "john@example.com"
      },
      classes: "full_width"
    },
    {
      name: "message",
      type: "Textarea",
      label: "Message",
      props: {
        rows: 4,
        placeholder: "How can we help?"
      },
      classes: "full_width"
    },
    {
      name: "btnSubmit",
      type: "Button",
      props: {
        type: "submit",
        label: "Send Message",
        severity: "primary"
      },
      classes: "full_width"
    }
  ]
};

const schemaJsonText = ref(JSON.stringify(defaultSchema, null, 2));
const jsonError = ref('');
const formModel = ref<FormModel | null>(null);

const updateSchema = () => {
  try {
    const parsedSchema = JSON.parse(schemaJsonText.value);

    // Attempt to initialize a FormModel with the parsed data
    formModel.value = new FormModel(parsedSchema);
    jsonError.value = '';
  } catch (err: any) {
    jsonError.value = 'Invalid JSON format';
    // Optionally keep the last valid model, or let it stay to show error state
  }
};

onMounted(() => {
  updateSchema();
});
</script>

<style scoped>
.playground-layout {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
</style>
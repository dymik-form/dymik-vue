import type { FormItem } from '@dymik-form/dymik-vue';
import DirectusService from "@/services/directus.service";

export default class FormMetadataService {
    static async loadList() {
        const form = await DirectusService.instance.items('form').readByQuery({
            limit: -1,
            fields: ['name', 'id', 'description'],
        });

        return form.data;
    }

    static async loadItem(id: string): Promise<FormItem> {
        const item = await DirectusService.instance.items('form').readOne(id, {
            fields: ['*', 'fields.field_id.*', 'fields.field_id.validation_rules.validation_rule_id.*'],
        });

        const formItem: FormItem = {
            name: item.name,
            id: item.id,
            description: item.description,
            css_classes: item.css_classes,
            submit_endpoint: item.submit_endpoint,
            fields: item.fields.map((field: any) => ({
                label: field.field_id.label,
                name: field.field_id.name,
                type: field.field_id.type,
                required: field.field_id.required,
                required_text: field.field_id.required_text,
                props: field.field_id.props,
                validation_rules: field.field_id.validation_rules.map((rule: any) => ({
                    type: rule.validation_rule_id.type,
                    message: rule.validation_rule_id.message,
                    value: rule.validation_rule_id.value,
                })),
                error: '',
                classes: field.field_id.classes,
                disabled: field.field_id.disabled || false,
            })),
            invalid: false,
            disabled: item.disabled || false,
        }

        return formItem;
    }
}
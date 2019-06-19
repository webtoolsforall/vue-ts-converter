interface TemplateData {
    components?: Array<object>;
    data?: Array<object>;
    methods?: Array<string>;
    componentName: string;
    props?: Array<object>;
    watch?:Array<object>;
    computed?:Array<object>
}
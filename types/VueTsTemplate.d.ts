interface TemplateData {
    components?: Array<{name:string, path: string}>;
    data?: Array<{key: string, type?: string, value:string}>;
    methods?: Array<string>;
    componentName: string;
    props?: Array<{key: string, type?:any, required?: boolean, default?:any}>;
    watches?:Array<{key:string, options?:string, handler:string}>;
    computed?:Array<{getter:string, setter?:string}>,
    modules?:Array<{name:string, path: string}>
}
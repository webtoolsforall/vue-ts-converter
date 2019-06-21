interface TemplateData {
    components?: Array<{name:string, path: string}>;
    data?: Array<{key: string, type?: string, value:string}>;
    methods?: Array<string>;
    componentName: string;
    props?: Array<{type?:string, required?: boolean, default?:any}>;
    watch?:Array<{key:string, options?:object, handler:Function}>;
    computed?:Array<{getter:Function, setter?:Function}>,
    modules?:Array<{name:string, path: string}>
}
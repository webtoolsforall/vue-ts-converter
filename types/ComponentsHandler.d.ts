
 interface ComponentsHandler {
    USE_NUXT: boolean;
    REMOVE_COMMENTS: boolean;
    read(): Promise<string>;
    write(): Promise<string>;
}
 /**
  * component handler options
  * @params nuxt convert to nuxt
  * @params removeComments remove 
  */
 interface ComponentsHandlerOption {
    nuxt: boolean, 
    removeComments: boolean
}

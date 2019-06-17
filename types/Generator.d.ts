
    interface Generator {
        gotCopyDestination (componentPath:string): Promise<string>
    }
    
    interface RouterParseResult {
        fileRelativePath: string,
        path: string
    }
    interface ModuleToMove {
        from: string,
        to: string
    }
    interface DataBus {
        addDependence (dependence: string)
        getDependencies (): Array<string>
        add(d:ModuleToMove)
        busData(): Array<any>
    }
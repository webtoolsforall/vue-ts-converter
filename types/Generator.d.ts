
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
import { Visitor } from '@babel/traverse';

export const componentVisitor: Visitor = {
	ExportDefaultDeclaration(path) {
        if(path.node.key === 'watch') {
            debugger
            path.traverse(watchVisitor)
        }
	}
};

const watchVisitor = {
    ObjectMethod(path){
        debugger
    }   
}

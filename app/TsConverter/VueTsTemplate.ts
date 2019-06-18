const Handlebars = require('handlebars');

export default class VueTsTemplate {
    renderData = []
	constructor(data:TemplateData) {
		this.renderData = data
	}

	build() {
        const vueFile = `
        import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
        @Component({
                components: {
                {{#components}}
                  {{name}}: () => import('{{path}}'),
                {{/components}}
                }
        }) 
        export default class {{componentName}} extends Vue {
            testData:string = 'inited'
            @Prop(String) readonly str!: string
            @Prop({default: 'defaults'}) defaultValue!: string
            @Watch('testData')
            onChanged(val){
              console.log('watch triggerd')
              console.log(val);
            }
          
            sayHi ():void {
              console.log('hello')
              setTimeout(() => {
                this.testData = '456'
              }, 1000);
            }
            mounted(){
              this.sayHi()
            }
          }
        `;
		let template = Handlebars.compile(vueFile);
		return template(this.renderData);
	}
}

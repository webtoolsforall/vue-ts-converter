const Handlebars = require('handlebars');
export default class VueTsTemplate {
    renderData: TemplateData = null 
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
            {{#data}}
              {{key}}:{{type}} = {{value}}
            {{/data}}
          }
        `;
		let template = Handlebars.compile(vueFile);
		return template(this.renderData);
	}
}

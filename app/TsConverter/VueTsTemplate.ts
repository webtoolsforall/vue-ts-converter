const Handlebars = require('handlebars');
import {upperFirstLetter} from '../util';
export default class VueTsTemplate {
    renderData: TemplateData = null 
	constructor(data:TemplateData) {
		this.renderData = data
	}

	build() {
    this.renderData.componentName = upperFirstLetter(this.renderData.componentName)
        const vueFile = `
        import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
        {{#modules}}
        import {{name}} from '{{value}}'
        {{/modules}}

        @Component({
          {{#if components}}
                components: {
                {{#components}}
                  {{name}}: {{value}},
                {{/components}}
                },
          {{/if}}
          {{#if computed}}
          computed: {{{computed}}}
          {{/if}}
        }) 
        export default class {{componentName}} extends Vue {
         
            {{#data}}
             // data()
              {{key}}{{#if type}}:{{type}} {{/if}}= {{value}}
            {{/data}}

            {{#props}}
            // props
            @Prop({  {{#if default}}default: "{{default}}"{{/if}} })
            {{key}}{{#if required}}!{{/if}}: {{type}};
            {{/props}}

          {{#watches}}
            // watch 
            @Watch('{{key}}'{{#if options}},{ {{options}} }{{/if}})
            on{{key}}Changed(){{handler}}
          {{/watches}}

          {{#hooks}}
          {{name}}(){{{handler}}}
          {{/hooks}}
          }
        `;
		let template = Handlebars.compile(vueFile);
		return template(this.renderData);
	}
}

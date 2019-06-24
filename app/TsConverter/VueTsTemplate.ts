const Handlebars = require('handlebars');
import { upperFirstLetter} from '../util';
export default class VueTsTemplate {
	renderData: TemplateData = null;
	constructor(data: TemplateData) {
		this.renderData = data;
	}

	build() {
		return new Promise(async (resolve, reject) => {
			this.renderData.componentName = upperFirstLetter(
				this.renderData.componentName
			);
			const vueFile = `
          import { Component, Vue {{#if props}}, Prop{{/if}}{{#if watches}}, Watch{{/if}} } from 'vue-property-decorator'
          {{#modules}}
          import {{name}} from '{{value}}'
          {{/modules}}
  
          @Component({
            {{#if components}}
                  components: {{{components}}},
            {{/if}}
            {{#if computed}}
            computed: {{{computed}}}
            {{/if}}
          }) 
          export default class {{componentName}} extends Vue {
           
              {{#data}}
               // data()
                {{key}}{{#if type}}:{{type}} {{/if}}= {{{value}}}
              {{/data}}
  
              {{#props}}
              // props
              @Prop({  {{#if default}}default: "{{default}}"{{/if}} })
              {{key}}{{#if required}}!{{/if}}: {{type}};
              {{/props}}
  
            {{#watches}}
              // watch 
              @Watch('{{key}}'{{#if options}},{ {{options}} }{{/if}})
              on{{key}}Changed({{params}}){{{handler}}}
            {{/watches}}
            {{#methods}}
              {{{this}}}
            {{/methods}}
            {{#hooks}}
            {{name}}(){{{handler}}}
            {{/hooks}}
            }
          `;
          debugger
      let template = Handlebars.compile(vueFile);
			resolve(template(this.renderData));
		});
	}
}

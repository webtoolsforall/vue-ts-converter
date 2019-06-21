import VueTsTemplate from '../../../app/TsConverter/VueTsTemplate';
import '../../../types/VueTsTemplate.d'
describe('TsConverter.VueTsTemplate', () => {
	it('render components correct', () => {
		const renderData: TemplateData = {
			components: [
                {
                    name: 'components1',
                    path: 'components1-path'
                },
                {
                    name: 'components2',
                    path: 'components2-path'
                }
            ],
			data: [
                {
                    key: 'test',
                    value: 'test',
                    type: 'string'
                },
                {
                    key: 'test1',
                    value: '1',
                    type: 'number'
                }
            ],
			methods: [],
			componentName: 'jest',
			props: [
                {
                    key: 'test',
                    type: 'String',
                    required: false,
                    default: 'default-value'
                },
                {
                    key: 'test1',
                    type: 'String'
                }
            ],
			watches: [
                {
                    key: 'watch',
                    options: `{
                        deep: true
                    }`,
                    handler: `(val){console.log(val)}`
                },
                {
                    key: 'watch1',
                    handler: `(val){console.log(val)}`
                }
            ],
			computed: [
                {
                    getter: `computed(){return 'computed'}`
                },
                {
                    getter: `computed1(){return 'computed1'}`,
                    setter: `computed1(val){this.computed1 = val}`
                }
            ],
			modules: [
                {
                    name: 'test',
                    path: 'test-path'
                },
                {
                    name: 'test1',
                    path: 'test-path1'
                }
            ]
        };
        const expectResult = `
        import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
            import test from 'test-path'
            import test1 from 'test-path1'
    
            @Component({
                    components: {
                      components1: () => import('components1-path'),
                      components2: () => import('components2-path'),
                    }
            }) 
            export default class Jest extends Vue {
             
                 // data()
                  test:string = test
                 // data()
                  test1:number = 1
    
                // props
                @Prop({  default: "default-value" })
                test: String;
                // props
                @Prop({   })
                test1: String;
    
                // watch 
                @Watch('watch',{ {
                            deep: true
                        } })
                onwatchChanged(val){console.log(val)}
                // watch 
                @Watch('watch1')
                onwatch1Changed(val){console.log(val)}
             
              // computed 
                  get computed(){return 'computed'}
              // computed 
                  get computed1(){return 'computed1'}
                  set computed1(val){this.computed1 = val}
              }`
        let result = new VueTsTemplate(renderData).build()
        console.log(result);
        expect(result.trim()).toBe(expectResult.trim())
	});
});

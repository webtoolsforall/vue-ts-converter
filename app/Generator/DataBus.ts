/**
 * data bus use to transfer date between modules
 */
import { copy } from '../util';
import logger from '../logger';
class DataBus {
	data: Array<any> = [];
	dependencies = [];
	constructor() {
		logger.info('data bus init');
	}
	async add(moduleData: ModuleToMove) {
		logger.info(`[DataBus.add] copy file from: ${moduleData.from} to :${moduleData.to}`);
		await copy(moduleData.from, moduleData.to);
		this.data.push(moduleData);
	}
	addDependence(dependence: string) {
		this.dependencies.push(dependence);
	}
	getDependencies(): Array<string> {
		return this.dependencies;
	}
	busData(): Array<any> {
		return this.data;
	}
}

let bus = new DataBus();
export default bus;

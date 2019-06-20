.PHONY: dist  new-build
default: help

install:
	npm install

# build types/index.d.ts
build-entry:
	node build/buildTypes.js $(filter-out $@,$(MAKECMDGOALS))

# add new class
new:
	node build/newAppClass.js $(filter-out $@,$(MAKECMDGOALS))

dev:
	 npm run dev

build-app-entry: 
	node build/buildPackageEntry.js
	
babel-build: 
	npm run build:js
# create new package and generate ts entry
new-build: 
	node build/newAppClass.js $(filter-out $@,$(MAKECMDGOALS)) && make build-entry && make build-app-entry

clear: 
	rm -rf logs && rm -rf output
run: 
	node dist/play.js

start: clear run

test: 
	npm test
test-w: 
	npm run test:watch

help:
	@echo "   \033[35mmake\033[0m \033[1musage\033[0m"
	@echo "   \033[35mmake install\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  install dependecies"
	@echo "   \033[35mmake dev\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  run tsc -w"
	@echo "   \033[35mmake build-entry \033[0m\t\033[0m\t\033[0m\t---  build types/index.d.ts base on types/*.d.ts"
	@echo "   \033[35mmake new-build <name> <comments> ---  create new package and generate ts entry"


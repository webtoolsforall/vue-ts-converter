.PHONY: dist 
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

# create new package and generate ts entry
new-build: 
	node build/newAppClass.js $(filter-out $@,$(MAKECMDGOALS)) && make build-entry
	
build-app-entry: 
	node build/buildPackageEntry.js

help:
	@echo "   \033[35mmake\033[0m \033[1musage\033[0m"
	@echo "   \033[35mmake install\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  install dependecies"
	@echo "   \033[35mmake dev\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  run tsc -w"
	@echo "   \033[35mmake build-entry \033[0m\t\033[0m\t\033[0m\t---  build types/index.d.ts base on types/*.d.ts"
	@echo "   \033[35mmake new-build <name> \033[0m\t\033[0m\t---  create new package and generate ts entry"


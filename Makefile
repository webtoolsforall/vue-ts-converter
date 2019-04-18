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

help:
	@echo "   \033[35mmake\033[0m \033[1musage\033[0m"
	@echo "   \033[35mmake install\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  install dependecies"
	@echo "   \033[35mmake dev\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  run tsc -w"
	@echo "   \033[35mmake make-types-entry \033[0m\t\033[0m\t---  build types/index.d.ts base on types/*.d.ts"


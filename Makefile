install: 
	npm install

start:
	node bin/brain-games.js

lint:
	npx eslint .

publish:
	npm publish --dry-run

link:
	npm link

unlink:
	npm unlink
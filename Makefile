install: 
	npm install

start:
	node bin/brain-games.js

lint:
	npx eslint .

publish-test:
	npm publish --dry-run

publish:
	npm publish --access public

link:
	npm link

unlink:
	npm unlink
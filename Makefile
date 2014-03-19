install_webdriver:
	./node_modules/protractor/bin/webdriver-manager update
start_webdriver:
	./node_modules/protractor/bin/webdriver-manager start
test:
	./node_modules/karma/bin/karma start --single-run
	./node_modules/protractor/bin/protractor protractor.conf.js
watch:
	./node_modules/karma/bin/karma start
ci:
	./node_modules/karma/bin/karma start --single-run --browsers PhantomJS

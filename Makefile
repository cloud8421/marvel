.PHONY: install_webdriver start_webdriver test watch coverage cli

install_webdriver:
	./node_modules/protractor/bin/webdriver-manager update
start_webdriver:
	./node_modules/protractor/bin/webdriver-manager start
test:
	./node_modules/karma/bin/karma start --single-run --reporters dots
	./node_modules/protractor/bin/protractor protractor.conf.js
watch:
	./node_modules/karma/bin/karma start --reporters dots
coverage:
	./node_modules/karma/bin/karma start --single-run
ci:
	./node_modules/karma/bin/karma start --single-run --browsers PhantomJS

app:
	docker-compose up
app-build:
	docker-compose build
app-bash:
	docker-compose app bash
app-install:
	docker-compose run app yarn install
app-add-package:
	docker-compose run app yarn add big.js --dev --exact

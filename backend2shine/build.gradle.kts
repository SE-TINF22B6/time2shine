plugins {
	java
	id("org.springframework.boot") version "3.1.4"
	id("io.spring.dependency-management") version "1.1.3"
}

group = "com.team2shine"
version = "0.0.1-SNAPSHOT"

java {
	sourceCompatibility = JavaVersion.VERSION_17
}

repositories {
	mavenCentral()
}

dependencies {
	implementation("org.springframework.boot:spring-boot-starter-data-jpa")
	implementation("org.springframework.boot:spring-boot-starter-web")
	implementation("org.springframework.boot:spring-boot-starter-validation")
//	implementation("org.springframework.boot:spring-boot-starter-oauth2-client")
//	implementation("org.springframework.boot:spring-boot-starter-oauth2-resource-server")
	implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
	implementation("org.jetbrains.kotlin:kotlin-reflect")
	runtimeOnly("org.postgresql:postgresql")

	// Testing
	testImplementation("org.springframework.boot:spring-boot-starter-test")
	testImplementation("org.mockito:mockito-core")
//	testImplementation("org.apache.httpcomponents:httpclient")
//	testImplementation("org.hamcrest:hamcrest")
}

tasks.withType<Test> {
	useJUnitPlatform()
}

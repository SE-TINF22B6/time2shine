plugins {
    id("java")
    id("application")
}



group = "org.example"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    testImplementation(platform("org.junit:junit-bom:5.9.1"))
    testImplementation("org.junit.jupiter:junit-jupiter")
    implementation("com.sparkjava:spark-core:2.9.3")
}

application {
    this.mainClass = "org.example.MainFile"
}

tasks.test {
    useJUnitPlatform()
}
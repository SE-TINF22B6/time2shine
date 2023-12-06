FROM openjdk:17.0.2-slim-buster

EXPOSE 8081

COPY ./build/libs/backend2shine-0.0.1-SNAPSHOT.jar /usr/app/
WORKDIR /usr/app

ENTRYPOINT ["java", "-jar", "backend2shine-0.0.1-SNAPSHOT.jar"]

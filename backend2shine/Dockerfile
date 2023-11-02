FROM openjdk:17-jre-alpine

EXPOSE 8080

COPY ./backend2shine/build/libs/backend2shine-0.0.1-SNAPSHOT.jar /usr/app/
WORKDIR /usr/app

ENTRYPOINT ["java", "-jar", "backend2shine-0.0.1-SNAPSHOT.jar"]

FROM maven:3.8.4-openjdk-17 as build

WORKDIR /app
COPY pom.xml .
COPY /src ./src 
RUN mvn clean package -DskipTests

FROM openjdk:17-slim

WORKDIR /app
COPY --from=build /app/target/back-0.0.1-SNAPSHOT.jar app-1.0.jar
EXPOSE 8080

ENTRYPOINT ["java","-jar","app-1.0.jar"]

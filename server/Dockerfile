# Build stage
FROM eclipse-temurin:22-jdk-alpine AS build
WORKDIR /app
# Cài đặt Maven thủ công để hỗ trợ Java 22
RUN apk add --no-cache maven
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# Runtime stage
FROM eclipse-temurin:22-jdk-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "app.jar"]

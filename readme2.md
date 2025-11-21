########## 1️⃣ BASE IMAGE (Change this only) ##########
# Examples:
#   Spring Boot → eclipse-temurin:17-jdk
#   Node.js     → node:18
#   React/Vite  → node:18
#   Python      → python:3.10
#   Go          → golang:1.21
#######################################################
FROM <BASE_IMAGE> AS builder


########## 2️⃣ WORK DIRECTORY ##########
WORKDIR /app


########## 3️⃣ COPY DEPENDENCY FILES ##########
# Examples:
#   Spring → pom.xml, mvnw, .mvn/
#   Node   → package.json, package-lock.json
#   Python → requirements.txt
#   Go     → go.mod, go.sum
#############################################
COPY <DEPENDENCY_FILES> ./


########## 4️⃣ INSTALL DEPENDENCIES ##########
# Examples:
#   Spring → ./mvnw dependency:go-offline
#   Node   → npm install
#   Python → pip install -r requirements.txt
#   Go     → go mod download
#############################################
RUN <DEPENDENCY_INSTALL_COMMAND>


########## 5️⃣ COPY SOURCE CODE ##########
COPY . .


########## 6️⃣ BUILD COMMAND (if required) ##########
# Examples:
#   Spring → ./mvnw clean package -DskipTests
#   React  → npm run build
#   Go     → go build -o app
#   Python → (no build)
#############################################
RUN <BUILD_COMMAND>


########## 7️⃣ START FINAL RUNTIME STAGE ##########
FROM <RUNTIME_IMAGE>

WORKDIR /app


########## 8️⃣ COPY FINAL ARTIFACT ##########
# Examples:
#   Spring → copy jar file
#   React  → copy build/ to nginx
#   Node   → copy entire folder
#   Python → copy src/
#############################################
COPY --from=builder <BUILD_OUTPUT> <DESTINATION_PATH>


########## 9️⃣ EXPOSE PORT ##########
# Example:
#   Spring → 8080
#   Node   → 3000
#   React  → 80 (NGINX)
#   Python → 8000
#############################################
EXPOSE <PORT>


########## 🔟 RUN COMMAND ##########
# Examples:
#   Spring → ["java", "-jar", "app.jar"]
#   Node   → ["npm", "start"]
#   Python → ["python", "main.py"]
#   Go     → ["./app"]
#############################################
ENTRYPOINT <START_COMMAND>



😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁


----------------------------------------------------------------------------------


**🧠 HOW TO USE THIS TEMPLATE**


For every new project:

Step 1 → Replace:
<BASE_IMAGE>
<DEPENDENCY_FILES>
<DEPENDENCY_INSTALL_COMMAND>
<BUILD_COMMAND>
<RUNTIME_IMAGE>
<BUILD_OUTPUT>
<DESTINATION_PATH>
<PORT>
<START_COMMAND>

Step 2 → Build & run:
docker build -t myapp .
docker run -p <port>:<port> myapp


Done........

----------------------------------------------------------------------------------

**Backend - springboot (docker file)**


FROM eclipse-temurin:21-jdk AS builder

WORKDIR /app
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
RUN ./mvnw dependency:go-offline
COPY src src
RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]


-----------------------------------------------------------------------------------

**Frontend - React (Vite) + TypeScript + Tailwind — (Dockerfile)**


# --- Build Stage ---
FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build   # Vite creates dist/

# --- Production Stage ---
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


----------------------------------------------------------------------------------

**frontend - Next.js + TypeScript + Tailwind — (Dockerfile)**


# --- Build Stage ---
FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# --- Production Stage ---
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000
CMD ["npm", "start"]

----------------------------------------------------------------------------------

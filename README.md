# Login Logger Service

> A minimal independent microservice for consuming login events from RabbitMQ queues.

---

## ✨ Project Description
This service listens to RabbitMQ queue `user.login` and logs user login events.
It's a simple proof-of-concept for event-driven microservice communication.

---

## 🌐 Technologies Used
- **Node.js + TypeScript**
- **amqplib** (RabbitMQ client)
- **dotenv** (for environment configuration)

---

## 🔄 How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Set up Environment Variables (.env file)
```env
RABBITMQ_URL=amqp://localhost
```

### 3. Make Sure RabbitMQ is Running
Use Docker if needed:
```bash
docker run -d --hostname rabbit --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
```
(Username: guest / Password: guest)

RabbitMQ Management Panel: [http://localhost:15672](http://localhost:15672)

### 4. Start the Service
```bash
npx ts-node index.ts
```

You should see:
```
🛅 Waiting for messages in queue: "user.login"
```

When a user logs in via auth-service, this service logs the received login event.

---

## 🔍 Example Log Output
```
📝 User Login Event Received: { userId: "66268100f21b1cd3c251e15e", username: "kimia", time: "2025-04-22T15:50:00Z" }
```

---

## 👩‍💼 Author
Kimia Abdollahi


import amqp from 'amqplib';
import dotenv from 'dotenv';

dotenv.config();

const QUEUE = 'user.login';

async function start() {
  try {
    const connection = await amqp.connect(process.env.RABBITMQ_URL!);
    const channel = await connection.createChannel();

    await channel.assertQueue(QUEUE, { durable: false });

    console.log(`Waiting for messages in queue: "${QUEUE}"`);

    channel.consume(QUEUE, (msg: amqp.ConsumeMessage | null) => {
      if (msg !== null) {
        const content = msg.content.toString();
        const data = JSON.parse(content);

        console.log('User Login Event Received:', data);

        channel.ack(msg);
      }
    });
  } catch (err) {
    console.error('Failed to start consumer:', err);
  }
}

start();

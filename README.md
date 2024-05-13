## Receipt Node Demo

### Getting Started

1. npm install
2. docker build -t receipt-node-demo .
3. docker run -p 9000:8080 receipt-node-demo
4. curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{"payload":"hello world!"}'


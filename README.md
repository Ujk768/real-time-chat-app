# real-time-chat-app

# This is a demo chat application

# Why we use web sockets ?
The WebSocket API is an advanced technology that makes it possible to open a two-way interactive communication session between the user's browser and a server. With this API, you can send messages to a server and receive event-driven responses without having to poll the server for a reply.

This can work with http but it requires long polling 

The `response.writeHead()` property, introduced in Node.js v1.0, is part of the ‘http‘ module. It is used to send a response header to the incoming request. The status code represents a 3-digit HTTP status code (e.g., 404), and the headers parameter contains the response headers. Optionally, a human-readable statusMessage can be provided as the second argument.
let count = 0;
addEventListener("fetch", (event) => {
  console.log(`Received request #${++count} to ${event.request.url}`);
  event.respondWith(
    new Response(`Hello there. You are request #${count}`, {
      status: 200,
      headers: {
        server: "deploy",
        "content-type": "text/plain",
      },
    }),
  );
});
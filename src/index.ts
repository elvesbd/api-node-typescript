import { server } from "./server/server";

const PORT = 4444;

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
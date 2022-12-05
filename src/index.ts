import { server } from './server';

server.listen(process.env.PORT || 3333, () => console.log(`Server listening on port ${process.env.PORT}`));
import { server } from './server';

server.listen(process.env.PORT || 4444, () => console.log(`Server listening on port ${process.env.PORT}`));
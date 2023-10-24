import {z} from 'zod';

const schema = z.object({
    to: z.string().min(4).email(),
    subject: z.string().min(3),
    html: z.string().min(3),
});

export default schema;
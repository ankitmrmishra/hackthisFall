import {createClient} from "@sanity/client";

const client = createClient({
 projectId: 'oqxy0179',
    dataset: 'production'
});

export default client;
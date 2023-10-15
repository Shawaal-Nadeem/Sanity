import { createClient } from "next-sanity";

import { apiVersion, dataset, useCdn, projectId } from "../../../sanity/env";

export const client = createClient({
    apiVersion:"2023-10-07",
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    token:process.env.SANITY_ACCESS_TOKEN,
    useCdn: false
    
})

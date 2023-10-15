export default {
    name: "product",
    type: "document",
    title: "Product",    // For Sanity Studio
    fields: [
        {
            name: "title",
            title: "Product title",  // For sanity studio
            type:"string",
        },
        {
            name: "description",
            title: "Product description",  // For sanity studio
            type:"string",
        },
        {
            name: "image",
            title: "Product image",  // For sanity studio
            type:"image",
        }
    ]
}
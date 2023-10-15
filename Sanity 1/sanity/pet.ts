// sanity/pet.ts
export default {
    name: 'pet',
    type: 'document',
    title: 'Animal',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'color',
            type: 'string',
            title: 'Color of Animal'
        },
        {
            name: 'age',
            type: 'number',
            title: 'Age of Animal'
        },
        {
            name: 'category',
            type: 'string',
            title: 'Category of Animal'
        },
        {
            name: 'Picture',
            type: 'image',
            title: 'Animal Picture'
        },
        {
            name: 'Created',
            type: 'date',
            title: 'Created at'
        },
        {
            name: 'Time',
            type: 'datetime',
            title: 'Time'
        }
        
    ]
}
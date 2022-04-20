export default{
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'text'
        },
        {
            name: 'imgUrl',
            title: 'Image URL',
            type: 'image',
            options: {
                hotspot: true,
            },
        }
    ]
}
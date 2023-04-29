import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanity = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2023-02-05',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(sanity);

export const urlFor = (source) => builder.image(source);
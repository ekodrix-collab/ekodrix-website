import { defineField, defineType } from 'sanity';

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Client Reviews & Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'clientName',
      title: 'Client / Person Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company / Project',
      type: 'string',
    }),
    defineField({
      name: 'quote',
      title: 'Review / Testimonial Quote',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating (out of 5)',
      type: 'number',
      initialValue: 5,
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: 'avatar',
      title: 'Client Avatar / Logo',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
});

import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'chipProduct',
  title: 'Chip Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'reference',
      to: [{type: 'chipBrand'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'productImage',
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'flavor',
      title: 'Flavor',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'chipType',
      title: 'Chip Type',
      type: 'string',
      options: {
        list: [
          {title: 'Potato', value: 'potato'},
          {title: 'Corn', value: 'corn'},
          {title: 'Tortilla', value: 'tortilla'},
          {title: 'Vegetable', value: 'vegetable'},
          {title: 'Root Vegetable', value: 'root_vegetable'},
          {title: 'Rice', value: 'rice'},
          {title: 'Puffed', value: 'puffed'},
          {title: 'Kettle Cooked', value: 'kettle'},
          {title: 'Baked', value: 'baked'},
          {title: 'Other', value: 'other'},
        ],
        layout: 'dropdown',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Product Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({
      name: 'allergens',
      title: 'Allergens',
      type: 'array',
      of: [defineArrayMember({
        type: 'string',
        options: {
          list: [
            {title: 'Gluten', value: 'gluten'},
            {title: 'Dairy', value: 'dairy'},
            {title: 'Nuts', value: 'nuts'},
            {title: 'Soy', value: 'soy'},
            {title: 'Eggs', value: 'eggs'},
            {title: 'Sesame', value: 'sesame'},
            {title: 'Fish', value: 'fish'},
            {title: 'Shellfish', value: 'shellfish'},
          ],
        },
      })],
    }),
    defineField({
      name: 'isLimitedEdition',
      title: 'Limited Edition',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isDiscontinued',
      title: 'Discontinued',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'nutritionInfo',
      title: 'Nutrition Information',
      type: 'object',
      fields: [
        defineField({
          name: 'servingSize',
          title: 'Serving Size (grams)',
          type: 'number',
        }),
        defineField({
          name: 'calories',
          title: 'Calories per Serving',
          type: 'number',
        }),
        defineField({
          name: 'fat',
          title: 'Total Fat (grams)',
          type: 'number',
        }),
        defineField({
          name: 'saturatedFat',
          title: 'Saturated Fat (grams)',
          type: 'number',
        }),
        defineField({
          name: 'sodium',
          title: 'Sodium (mg)',
          type: 'number',
        }),
        defineField({
          name: 'carbs',
          title: 'Total Carbohydrates (grams)',
          type: 'number',
        }),
        defineField({
          name: 'protein',
          title: 'Protein (grams)',
          type: 'number',
        }),
      ],
    }),
    defineField({
      name: 'availableIn',
      title: 'Available In',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      description: 'Countries or regions where this product is available',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'brand.name',
      media: 'productImage',
      flavor: 'flavor',
    },
    prepare({title, subtitle, media, flavor}) {
      return {
        title,
        subtitle: subtitle ? `${subtitle} - ${flavor}` : flavor,
        media,
      }
    },
  },
})
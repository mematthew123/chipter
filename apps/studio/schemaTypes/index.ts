import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import chipBrand from './chipBrand'
import chipProduct from './chipProduct'
import chipReview from './chipReview'
import like from './like'

export const schemaTypes = [
  // Review schemas
  chipReview,
  chipProduct,
  chipBrand,
  // Blog schemas
  post,
  author,
  category,
  blockContent,
  // Engagement schemas
  like,
]

import { baseClient as client } from './sanity.live';
import type { PortableTextBlock } from '@portabletext/types';

export interface CommentType {
  _id: string;
  authorName: string;
  authorEmail?: string;
  authorId: string;
  authorImage?: string;
  content: PortableTextBlock[];
  publishedAt: string;
  isEdited?: boolean;
  editedAt?: string;
}

export async function getComments(
  parentId: string,
  parentType: 'post' | 'chipReview'
): Promise<CommentType[]> {
  const query = `
    *[
      _type == "comment" &&
      parentDocument._ref == $parentId &&
      parentType == $parentType &&
      status == "visible"
    ] | order(publishedAt desc) {
      _id,
      authorName,
      authorEmail,
      authorId,
      authorImage,
      content,
      publishedAt,
      isEdited,
      editedAt
    }
  `;

  try {
    const comments = await client.fetch<CommentType[]>(query, {
      parentId,
      parentType,
    });
    return comments || [];
  } catch (error) {
    console.error('Error fetching comments:', error);
    return [];
  }
}

export async function getCommentCount(
  parentId: string,
  parentType: 'post' | 'chipReview'
): Promise<number> {
  const query = `
    count(*[
      _type == "comment" &&
      parentDocument._ref == $parentId &&
      parentType == $parentType &&
      status == "visible"
    ])
  `;

  try {
    const count = await client.fetch<number>(query, {
      parentId,
      parentType,
    });
    return count || 0;
  } catch (error) {
    console.error('Error fetching comment count:', error);
    return 0;
  }
}
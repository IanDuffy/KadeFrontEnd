export interface Article {
  image: string;
  altText?: string;
  title: string;
  content: string;
  tags?: { label: string }[];
}

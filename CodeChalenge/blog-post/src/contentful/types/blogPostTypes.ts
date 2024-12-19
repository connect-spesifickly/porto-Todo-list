import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeBlogPostFields {
  title: EntryFieldTypes.Symbol;
  slug?: EntryFieldTypes.Symbol;
  body: EntryFieldTypes.RichText;
  image: EntryFieldTypes.AssetLink;
  summary: EntryFieldTypes.RichText;
  categories: EntryFieldTypes.Symbol;
  date2: EntryFieldTypes.Date;
}

export interface IContentfulAsset {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  sys: {
    id: string;
  };
  fields: {
    file: {
      url: string;
      contentType: string;
    };
  };
}

export type TypeBlogPostSkeleton = EntrySkeletonType<
  TypeBlogPostFields,
  "blogPost"
>;
export type TypeBlogPost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeBlogPostSkeleton, Modifiers, Locales>;

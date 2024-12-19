import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeBlogPage2Fields {
  title: EntryFieldTypes.Symbol;
  slug?: EntryFieldTypes.Symbol;
  body: EntryFieldTypes.RichText;
  image: EntryFieldTypes.AssetLink;
  summary: EntryFieldTypes.RichText;
  testimony: EntryFieldTypes.Symbol;
  tester: EntryFieldTypes.Symbol;
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

export type TypeBlogPage2Skeleton = EntrySkeletonType<
  TypeBlogPage2Fields,
  "blogPage2"
>;
export type TypeBlogPage2<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeBlogPage2Skeleton, Modifiers, Locales>;

create table favorites (
  id bigint generated always as identity primary key,
  product_name text,
  price numeric,
  image text,
  link text
);
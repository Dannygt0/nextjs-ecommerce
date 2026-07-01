export interface Category {
  fields: {
    title: string;
    id: number;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}
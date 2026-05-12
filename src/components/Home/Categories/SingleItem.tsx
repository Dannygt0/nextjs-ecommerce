import { Category } from "@/types/category";
import Title from '@/components/SubComponent/Title';
import Image from "next/image";

const SingleItem = ({ item }: { item: Category }) => {
  const imageUrl = item?.fields?.image?.fields?.file?.url;
  const itemTitle = item?.fields?.title || "Category"
  return (
    <a href="#" className="group flex flex-col items-center">
      <div className="max-w-[130px] w-full bg-[#F2F3F8] h-32.5 rounded-full flex items-center justify-center mb-4">
        {imageUrl ? (
        <Image src={`https:${item.fields.image.fields.file.url}`}alt="Category" width={82} height={62} />

        ):(
          <div className="text-gray-400 text-xs text-center px-2">No Image</div>
        )}
      </div>

      <div className="flex justify-center">
        <Title className="inline-block font-medium text-center text-dark bg-gradient-to-r from-blue to-blue bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px] group-hover:text-blue">
          {item.fields.title}
        </Title>
      </div>
    </a>
  );
};

export default SingleItem;

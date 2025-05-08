import mapsImg from "@/images/maps.jpg";
import Image from "next/image";
const url = "https://www.course-api.com/images/tours/tour-1.jpeg";

const page = ({ params }: { params: { id: string } }) => {
  console.log(params);
  return (
    <div>
      <h1 className="text-4xl">ID: {params.id}</h1>
      <section>
        {/* For local images it is not must to provide width and height props */}
        <Image
          src={mapsImg}
          alt="maps"
          width={200}
          height={200}
          className="w-64 h-64 object-cover rounded"
        />
        <h2>Local image</h2>
        {/* For remote images it is must to provide width and height props and add nextjs config file */}
        <Image
          src={url}
          alt="maps"
          width={200}
          height={200}
          className="w-64 h-64 object-cover rounded"
        />
        <h2>Remote image</h2>
      </section>
    </div>
  );
};
export default page;

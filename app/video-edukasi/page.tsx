import BreadcrumbComponent from "@/components/breadcrumb";

export default function Page() {
  const VideoEdukasi = "/assets/videos/video-edukasi.mp4";

  return (
    <div>
      <BreadcrumbComponent title="Video Edukasi" />
      <div className="mx-auto flex max-w-3xl flex-col">
        <h1 className="mb-4 px-4 text-center text-2xl font-bold md:px-0">
          Video Edukasi
        </h1>
        {/* <div className="px-4 md:px-0">
          <Image
            src="/assets/images/educations.jpeg"
            alt="Edukasi Kesehatan Mental"
            width={800}
            height={800}
            className="mx-auto rounded-lg"
          />
        </div> */}
      </div>
      <div className="mx-auto w-full px-4 md:w-1/2 md:px-0">
        <div className="mt-6 flex flex-col">
          <video controls className="w-full rounded-lg">
            <source src={VideoEdukasi} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

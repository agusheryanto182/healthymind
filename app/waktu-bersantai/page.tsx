import BreadcrumbComponent from "@/components/breadcrumb";

export default function Page() {
  const suaraHujan = "/assets/audios/suara-hujan.mp3";
  const suaraKicauanBurung = "/assets/audios/suara-kicauan-burung.mp3";
  const suaraOmbak = "/assets/audios/suara-ombak.mp3";
  const suaraPermainanPiano = "/assets/audios/suara-permainan-piano.mp3";
  return (
    <div>
      <BreadcrumbComponent title="Waktu Bersantai" />

      <div className="mx-auto w-full max-w-3xl px-4 md:px-0">
        <div className="my-4">
          <h1 className="font-bold">Suara kicauan burung</h1>
          <audio className="w-full" controls>
            <source src={suaraKicauanBurung} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div className="my-4">
          <h1 className="font-bold">Suara tepian ombak</h1>
          <audio className="w-full" controls>
            <source src={suaraOmbak} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div className="my-4">
          <h1 className="font-bold">Suara Hujan</h1>
          <audio className="w-full" controls>
            <source src={suaraHujan} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div className="my-4">
          <h1 className="font-bold">Suara permainan piano</h1>
          <audio className="w-full" controls>
            <source src={suaraPermainanPiano} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
}

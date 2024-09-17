import Image from 'next/image';

interface PhotoProps {
  src: string;
  description: string;
}

export default function DoublePhoto({
  photo1,
  photo2,
}: {
  photo1: PhotoProps;
  photo2: PhotoProps;
}) {
  return (
    <div className="flex justify-center gap-4 mt-8 mb-8">
      <div className="flex-none">
        <Image
          src={photo1.src}
          alt={photo1.description}
          width={300}
          height={200}
          className="rounded-md"
        />
        <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
          {photo1.description}
        </p>
      </div>

      <div className="flex-none">
        <Image
          src={photo2.src}
          alt={photo2.description}
          width={300}
          height={200}
          className="rounded-md"
        />
        <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
          {photo2.description}
        </p>
      </div>
    </div>
  );
}

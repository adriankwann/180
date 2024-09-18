import Image from 'next/image';

interface PhotoProps {
  src: string;
  description: string;
}

interface DoublePhotoProps {
  photo1: PhotoProps;
  photo2: PhotoProps;
  width?: number;
  height?: number;
}

export default function DoublePhoto({
  photo1,
  photo2,
  width = 300, // Default width
  height = 200, // Default height
}: DoublePhotoProps) {
  return (
    <div className="flex justify-center gap-4 mt-8 mb-8">
      <div className="flex-none">
        <Image
          src={photo1.src}
          alt={photo1.description}
          width={width}
          height={height}
          layout="intrinsic" // Use intrinsic for width and height to work
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
          width={width}
          height={height}
          layout="intrinsic" // Apply to both images
          className="rounded-md"
        />
        <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
          {photo2.description}
        </p>
      </div>
    </div>
  );
}

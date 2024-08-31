export function Testimonial({
  blurb,
  person,
  role,
  photo,
}: {
  blurb: string;
  person: string;
  role: string;
  photo: string;
}) {
  return (
    <div>
      <p className="ml-2 h-56 w-80 rounded border bg-white p-4 italic text-gray-700">
        "{blurb}"
      </p>
      <div className="flex -translate-y-1 gap-3">
        <div className="h-16 w-16 overflow-hidden rounded-[50%] bg-black shadow">
          <img src={photo} alt={person} />
        </div>
        <div className="flex flex-col justify-center">
          <div>{person}</div>
          <div className="text-gray-500">{role}</div>
        </div>
      </div>
    </div>
  );
}

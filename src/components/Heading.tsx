"use client";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}
const fechaActual = new Date();
const fechaLocal = fechaActual.toLocaleDateString();

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <header className="mt-8 mb-12">
      <div className={center ? "text-center" : "text-start"}>
        <div className="rounded sm:p-3 md:py-3 lg:px-3 py-3 px-4 bg-gray-200 dark:bg-black">
          <div className="text-2xl font-bold">{title}</div>
          <div className="font-light text-neutral-500 mt-2">
            {fechaLocal} &emsp;{subtitle}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Heading;

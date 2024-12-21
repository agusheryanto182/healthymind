interface InfoCardProps {
  title: string;
  description: string;
  icon: string;
}

export const InfoCard = ({ title, description, icon }: InfoCardProps) => (
  <div className="rounded-lg border bg-white p-4 shadow-md">
    <div className="mb-2 text-4xl">{icon}</div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p>{description}</p>
  </div>
);

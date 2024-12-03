export const Statistics = () => {
  interface statsProps {
    quantity: string;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: "100%",
      description: "Anonymous",
    },
    {
      quantity: "100%",
      description: "Free for Civilians",
    },
    {
      quantity: "50+",
      description: "Supported Languages",
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center">
        {stats.map(({ quantity, description }: statsProps) => (
          <div
            key={description}
            className="space-y-2 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold ">{quantity}</h2>
            <p className="text-lg text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

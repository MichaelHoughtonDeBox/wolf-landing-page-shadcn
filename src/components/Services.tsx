import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface ServiceProps {
  title: string;
  description: string;
  icon: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Create Custom Alert Areas",
    description:
      "Simply drop a pin in WhatsApp to create notification areas around your home, work, school or any location important to you. Wolf will keep you informed of any suspicious activity reported in these areas.",
    icon: "📍",
  },
  {
    title: "Review Past Reports",
    description:
      "Check in with Wolf anytime to see what incidents have been reported in your monitored areas. Share your alert zones with family and friends so they stay informed about safety in areas that matter to them.",
    icon: "🔔",
  },
  {
    title: "Multi-lingual Reporting",
    description:
      "Report incidents in any language - Wolf supports English, Zulu, Xhosa, Shona, Tshivenda, Afrikaans and more. Our AI translates everything so control rooms and response teams get clear, actionable information.",
    icon: "🌍",
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          {/* <h2 className="text-3xl md:text-4xl font-bold">
            Client-Centric Services
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            dolor.
          </p> */}      

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className=" text-5xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div className="z-10 lg:order-2 w-full max-w-xl mx-auto hidden md:block rotate-[-6deg]">
            <img 
              src="https://res.cloudinary.com/dkbn21xdu/image/upload/v1733240902/Wolf_UI_elemetns_p72sca.svg"
              alt="Wolf Security Illustration" 
              className="w-full h-auto transform scale-150"
            />
          </div>
      </div>
    </section>
  );
};

import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";

interface ServiceProps {
  title: string;
  description: string;
  icon: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "WhatsApp Integration",
    description:
      "Send Wolf a WhatsApp message or voice note with incident details. Our system stores and analyzes this data, creating a virtual police statement and identifying patterns for future prevention.",
    icon: "📱",
  },
  {
    title: "Community-Powered Safety Network",
    description:
      "Contribute to a decentralized safety network with a low barrier to entry. With 28 million WhatsApp users in South Africa, you likely already have the tool to make a difference.",
    icon: "👥",
  },
  {
    title: "Enhanced Security Operations",
    description:
      "Empower security guards with targeted patrol routing. Our multi-lingual bots support English, Zulu, Xhosa, and Afrikaans, enabling efficient communication and data collection.",
    icon: "👮‍♂️",
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
                  <div className=" text-6xl">
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

        <div className="z-10 lg:order-2 shadow-xl rounded-2xl w-full max-w-sm mx-auto hidden md:block rotate-[-6deg]">
            <Iphone15Pro src="https://res.cloudinary.com/dkbn21xdu/image/upload/v1725651736/Screenshot_2024-09-06_at_20.42.11_geycws.png" />
          </div>
      </div>
    </section>
  );
};

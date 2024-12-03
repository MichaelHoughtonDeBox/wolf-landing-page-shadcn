import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  description: string; // Added description field
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://res.cloudinary.com/dkbn21xdu/image/upload/v1733239612/1732636573960_dxcq4o.jpg",
    name: "Nick Mills",
    position: "Co-Founder",
    description: "Nick is an entrepreneur with a strong foundation in data led decision-making and strategic execution. With experience at a systematic hedge fund and a founding member of Versofy Solar, Nick has a proven track record of raising capital, scaling operations and systemising processes to deliver products into the South African consumer market. Nick is well positioned to drive Wolf’s growth and integration into existing security infrastructure.", // Added description
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/nick-mills-south-africa/",
      },
    ],
  },
  {
    imageUrl: "https://res.cloudinary.com/dkbn21xdu/image/upload/v1733239628/uU9cCdW7d8G3M5JRpGup5_b6c9218896304912ad7c3f955502b71e-2_asn0rh.jpg",
    name: "Michael Houghton",
    position: "Co-Founder",
    description: "An AI specialist with a proven track record in developing and deploying complex software solutions. He has held key roles in technology firms, where he led the creation of scalable platforms tailored to real-world challenges. Michael’s expertise in AI and software development is instrumental in building Wolf’s core platform and ensuring its technological robustness.", // Added description
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/michaeljohnhoughton/",
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Facebook":
        return <Facebook size="20" />;

      case "Instagram":
        return <Instagram size="20" />;
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32 space-y-8 z-20"
    >
      <Card className="p-6 shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl lg:text-4xl font-bold md:text-center">
            <span className="text-3xl lg:text-4xl font-bold md:text-center">
              Meet the <span className="text-red-500">Wolf Team</span>
            </span>
          </CardTitle>
          <CardContent>
            <p className="mt-4 mb-10 text-xl text-muted-foreground text-center">
              We are committed to making all of humanity feel safer and protected through innovative AI and WhatsApp integration, making communities safer for everyone.
            </p>
          </CardContent>
        </CardHeader>

        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {teamList.map(
              ({ imageUrl, name, position, description, socialNetworks }: TeamProps) => (
                <Card
                  key={name}
                  className="relative h-full flex flex-col bg-black text-white"
                >
                  {/* Profile image and header section */}
                  <CardHeader className="flex flex-col items-center pt-16 pb-4">
                    <img
                      src={imageUrl}
                      alt={`${name} ${position}`}
                      className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover grayscale"
                    />
                    <CardTitle className="text-center text-white">{name}</CardTitle>
                    <CardDescription className="text-white">
                      {position}
                    </CardDescription>
                  </CardHeader>

                  {/* Description section - using flex-grow to push footer down */}
                  <CardContent className="flex-grow text-center px-6 text-white">
                    <p>{description}</p>
                  </CardContent>

                  {/* Footer section - always at bottom */}
                  <CardFooter className="justify-center pt-4 pb-6">
                    {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                      <div key={name}>
                        <a
                          rel="noreferrer noopener"
                          href={url}
                          target="_blank"
                          className={buttonVariants({
                            variant: "ghost",
                            size: "sm",
                          })}
                        >
                          <span className="sr-only">{name} icon</span>
                          {socialIcon(name)}
                        </a>
                      </div>
                    ))}
                  </CardFooter>
                </Card>
              )
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

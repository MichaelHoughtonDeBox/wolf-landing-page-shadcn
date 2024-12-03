import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: "👥",
    title: "For Communities 📱",
    description:
      "Wolf enables anonymous crime reporting and verified alerts through WhatsApp, used by 30 million South Africans daily—no downloads required.\n No more apps. No more downloads. No more personal details. No more credit cards.",
  },
  {
    icon: "👮‍♂️", 
    title: "Security Companies 🚨", 
    description:
      "Wolf consolidates all security communication through a single AI-enabled channel, streamlining operations and enabling seamless coordination between control rooms and response teams.",
  },
  {
    icon: "🏛️",
    title: "For Government 📊",
    description:
      "Wolf empowers communities to participate in their own safety through accessible self-reporting, creating a collaborative approach between law enforcement and citizens while improving response times and resource allocation.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <Card className="shadow-xl p-8">
        <h2 className="text-3xl lg:text-4xl font-bold md:text-center mb-4">
        Wolf gives communities a <span className="text-red-500">safe, free and accessible</span> way to report suspicious activity, increasing safety for everyone 🚨
        </h2>
        <p className="md:w-3/4 mx-auto mt-4 mb-8 text-lg text-muted-foreground">
          Simply send a WhatsApp message to Wolf to report incidents. No app downloads or personal details needed - if you have WhatsApp, you're ready to help make your community safer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(({ title, description }: FeatureProps) => (
            <Card
              key={title}
              className={`shadow-xl bg-black text-white`}
            >
              <CardHeader>
                <CardTitle className="grid gap-4 place-items-left text-left">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-left">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </Card>
    </section>
  );
};

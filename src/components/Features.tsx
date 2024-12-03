import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import image from "../assets/growth.png";
// import image3 from "../assets/reflecting.png";
// import image4 from "../assets/looking-ahead.png";
import OrbitingCircles from "@/components/magicui/orbiting-circles";

// interface FeatureProps {
//   title: string;
//   description: string;
//   image: string;
// }

// const features: FeatureProps[] = [
//   {
//     title: "Responsive Design 📱",
//     description:
//       "Our app adapts seamlessly to any device, ensuring a smooth experience whether you're on mobile, tablet, or desktop.",
//     image: image4,
//   },
//   {
//     title: "Intuitive User Interface 🖱️",
//     description:
//       "Navigate with ease through our user-friendly interface, designed for quick access to critical safety information.",
//     image: image3,
//   },
//   {
//     title: "AI-Powered Insights 🤖",
//     description:
//       "Leverage cutting-edge artificial intelligence to analyze patterns and predict potential safety concerns in your area.",
//     image: image,
//   },
// ];

const featureList: string[] = [
  "Real-time community insights 🔍", // Provides immediate visibility into local safety activity
  "Anonymous witness reporting 🕵️", // Report incidents without revealing identity
  "Incident prevention and resolution 🛡️",
  "Situational awareness updates 🚨",
  "Smart routing of information 🧠",
  "Machine learning threat analysis 🤖",
  "WhatsApp integration 📱", // Leverages existing WhatsApp platform used by 30M South Africans
  "Voice note reporting 🎙️", // Support for voice messages in multiple languages
  "Predictive crime prevention 🔮", // Uses ML to identify patterns and prevent incidents
  "Custom alert areas 🎯", // Set custom notification zones around important locations
  "License plate recognition 🚗", // Automated vehicle identification
  "Facial recognition 👤", // Advanced person identification capabilities  
  "Community-powered surveillance network 📡", // Distributed monitoring through community participation
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8 relative"
    >
      {/* Adding the orbiting circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[-1]">
        <div className="relative w-[600px] h-[600px]">
          <OrbitingCircles
            reverse={false}
            duration={60}
            delay={9}
            radius={600}
            path={true}
            className="bg-transparent border-none"
          >
            <span className="text-4xl border-white border-2 bg-red-500 rounded-full w-16 h-16 flex items-center justify-center">🚨</span>
          </OrbitingCircles>
          <OrbitingCircles
            reverse={true}
            duration={35}
            delay={1}
            radius={300}
            path={false}
            className="bg-transparent border-none"
          >
            <span className="text-4xl border-white border-2 bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center">👮‍♂️</span>
          </OrbitingCircles>
          <OrbitingCircles
            reverse={true}
            duration={120}
            delay={8}
            radius={700}
            path={false}
            className="bg-transparent border-none"
          >
            <span className="text-4xl border-white border-2 bg-red-500 rounded-full w-16 h-16 flex items-center justify-center">🚨</span>
          </OrbitingCircles>
          <OrbitingCircles
            reverse={true}
            duration={90}
            delay={5}
            radius={450}
            path={false}
            className="bg-transparent border-none"
          >
            <span className="text-4xl border-white border-2 bg-red-500 rounded-full w-16 h-16 flex items-center justify-center">🚨</span>
          </OrbitingCircles>
          <OrbitingCircles
            reverse={false}
            duration={60}
            delay={15}
            radius={325}
            path={false}
            className="bg-transparent border-none"
          >
            <span className="text-4xl border-white border-2 bg-zinc-900 rounded-full w-16 h-16 flex items-center justify-center">🐺</span>
          </OrbitingCircles>
          <OrbitingCircles
            reverse={true}
            duration={35}
            delay={10}
            radius={300}
            path={false}
            className="bg-transparent border-none"
          >
            <span className="text-4xl border-white border-2 bg-zinc-900 rounded-full w-16 h-16 flex items-center justify-center">🐺</span>
          </OrbitingCircles>
          <OrbitingCircles
            reverse={false}
            duration={120}
            delay={2}
            radius={425}
            path={false}
            className="bg-transparent border-none"
          >
            <span className="text-4xl border-white border-2 bg-zinc-900 rounded-full w-16 h-16 flex items-center justify-center">🐺</span>
          </OrbitingCircles>
          <OrbitingCircles
            reverse={true}
            duration={90}
            delay={12}
            radius={615}
            path={false}
            className="bg-transparent border-none"
          >
            <span className="text-4xl border-white border-2 bg-zinc-900 rounded-full w-16 h-16 flex items-center justify-center">🐺</span>
          </OrbitingCircles>
        </div>
      </div>
      <Card className="p-6 shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl lg:text-4xl font-bold md:text-center">
            We have put the <span className="text-red-500">power of camera surveillance</span> in the hands of 30 million South Africans 🐺
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap md:justify-center gap-4">
            {featureList.map((feature: string) => (
              <div key={feature}>
                <Badge
                  variant="outline" 
                  className="text-md text-black border-black border-2 rounded-md"
                >
                  {feature}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
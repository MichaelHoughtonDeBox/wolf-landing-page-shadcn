import { Statistics } from "./Statistics";
// import pilot from "../assets/pilot.png";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import Safari from "@/components/magicui/safari";
// import Iphone15Pro from "@/components/magicui/iphone-15-pro";

export const About = () => {

  return (
    <section
      id="about"
      className="container py-24 sm:py-32 z-20"
    >
      <div className="relative">
        <Card className="shadow-xl relative z-10">
          <CardContent className="px-6 py-12 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
            <div className="md:w-1/3 relative hidden md:block">
              <div className="absolute left-1/6 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <img src="https://res.cloudinary.com/dkbn21xdu/image/upload/v1733235559/Screenshot_2024-12-03_at_14.18.39_dsf9i0.png" alt="Image" className="w-100 h-100 lg:max-w-[130%] md:max-w-[150%] sm:max-w-[100%]" />
              </div>
            </div>
            <div className="flex flex-col justify-between md:w-2/3">
              <div className="pb-6">
                <CardHeader>
                  <CardTitle className="text-3xl md:text-3xl sm:text-2xl font-black mb-4">
                    Report suspicious activity in any language, completely free and anonymously 🚨
                  </CardTitle>
                </CardHeader>
                <CardDescription className="text-md text-muted-foreground mt-4">
                  {/* Addressing the critical issue of unreported crime */}
                  Crime is severely underreported in South Africa, with many communities lacking safe ways to report incidents. Wolf changes this by enabling anonymous reporting through WhatsApp - a platform already used by over 30 million South Africans.
                </CardDescription>
                <CardDescription className="text-md text-muted-foreground mt-4">
                  {/* Highlighting accessibility and language support */}
                  {/* Explaining our core belief about community-wide safety impact */}
                  We deeply believe that by making underserved areas safer, the surrounding affluent areas naturally become safer too. Our mission focuses on empowering all communities - especially townships and informal settlements - because 99% of South Africans are good people who deserve the ability to participate in public safety.
                </CardDescription>
                <CardDescription className="text-md text-muted-foreground mt-4">
                  {/* Emphasizing community impact and data-driven approach */}
                  By consolidating safety data from dense population areas and applying machine learning, Wolf helps predict and prevent crime patterns. We work directly with community leaders, ward councillors, and security providers to transform anonymous reports into positive safety outcomes for all South African communities.
                </CardDescription>
              </div>
              <Statistics />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

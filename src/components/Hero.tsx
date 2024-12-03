import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card"
import OrbitingCircles from "@/components/magicui/orbiting-circles"

export const Hero = () => {
  return (
    <>
      <div 
        className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat opacity-90"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dkbn21xdu/image/upload/v1725627216/Screenshot_2024-09-06_at_13.53.30_lh6hl5.png')"
        }}
      ></div>

      <section className="container relative py-10 md:py-10 flex items-center justify-center min-h-[90vh]">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
          <div className="relative w-[600px] h-[600px]">
            <OrbitingCircles
              reverse={false}
              duration={60}
              delay={9}
              radius={600}
              path={true}
              className="bg-transparent border-none"
            >
              <span className="text-4xl border-white border-2 bg-red-500 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">🚨</span>
            </OrbitingCircles>
            <OrbitingCircles
              reverse={true}
              duration={35}
              delay={1}
              radius={300}
              path={false}
              className="bg-transparent border-none"
            >
              <span className="text-4xl border-white border-2 bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">👮‍♂️</span>
            </OrbitingCircles>
            <OrbitingCircles
              reverse={true}
              duration={120}
              delay={8}
              radius={700}
              path={false}
              className="bg-transparent border-none"
            >
              <span className="text-4xl border-white border-2 bg-red-500 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">🚨</span>
            </OrbitingCircles>
            <OrbitingCircles
              reverse={false}
              duration={90}
              delay={5}
              radius={450}
              path={false}
              className="bg-transparent border-none"
            >
              <span className="text-4xl border-white border-2 bg-red-500 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">🚨</span>
            </OrbitingCircles>
            <OrbitingCircles
              reverse={true}
              duration={60}
              delay={15}
              radius={325}
              path={false}
              className="bg-transparent border-none"
            >
              <span className="text-4xl border-white border-2 bg-zinc-900 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">🐺</span>
            </OrbitingCircles>
            <OrbitingCircles
              reverse={false}
              duration={35}
              delay={10}
              radius={300}
              path={false}
              className="bg-transparent border-none"
            >
              <span className="text-4xl border-white border-2 bg-zinc-900 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">🐺</span>
            </OrbitingCircles>
            <OrbitingCircles
              reverse={true}
              duration={120}
              delay={2}
              radius={425}
              path={false}
              className="bg-transparent border-none"
            >
              <span className="text-4xl border-white border-2 bg-zinc-900 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">🐺</span>
            </OrbitingCircles>
            <OrbitingCircles
              reverse={false}
              duration={90}
              delay={12}
              radius={615}
              path={false}
              className="bg-transparent border-none"
            >
              <span className="text-4xl border-white border-2 bg-zinc-900 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">🐺</span>
            </OrbitingCircles>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 place-items-center gap-10 w-full max-w-4xl mx-auto z-10 relative">
          
          <Card className="text-center space-y-6 p-6 w-full lg:text-start lg:order-1 lg:pr-12 shadow-xl px-0">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl sm:text-4xl font-black mb-4">
               Wolf turns WhatsApp into a <span className="text-red-500">powerful crime reporting tool</span> that makes communities safer.
              </CardTitle>
              <CardDescription>
                <p className="text-md text-muted-foreground mt-4">
                 Report crime anonymously on WhatsApp in any language for free. Wolf consolidates community safety data and uses AI to help create positive safety outcomes for all South African communities. We work with community leaders, ward councillors and security providers to make neighborhoods safer.
                </p>
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button 
              variant="outline" 
              className=""
              onClick={() => window.open('https://wa.me/+447488879934/?text=Hey%20Wolf%2C%20I%27m%20new%20around%20here.%20What%20do%20I%20need%20to%20do%20to%20get%20started%3F%20', '_blank')}
              >
                Try Wolf in WhatsApp 🐺
              </Button>
              <Button 
              variant="default" 
              className="ml-4"
              onClick={() => window.open('https://map.communitywolf.com/', '_blank')}
              >
                See Live Map 🗺️
              </Button>
            </CardFooter>
          </Card>
          
          <div className="z-10 lg:order-1 w-full max-w-xl mx-auto hidden md:block rotate-12">
            <img 
              src="https://res.cloudinary.com/dkbn21xdu/image/upload/v1733240464/6_b8xr7u.svg"
              alt="Wolf Security Illustration" 
              className="w-full h-auto transform scale-150"
            />
          </div>
        </div>
      </section>
    </>
  );
};

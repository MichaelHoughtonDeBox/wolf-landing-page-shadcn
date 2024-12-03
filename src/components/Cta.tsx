import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import OrbitingCircles from "@/components/magicui/orbiting-circles"

export const Cta = () => {
  return (
    <section id="cta" className="py-16 my-24 sm:my-32 relative">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
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
            radius={900}
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
      <div className="relative z-10">
        <Card className="container">
          <CardContent className="p-6 lg:grid lg:grid-cols-2 place-items-center gap-8">
                <div className="lg:col-start-1">
                  <CardHeader>
                    <CardTitle className="text-3xl lg:text-5xl font-bold md:text-left mb-4">
                      Join Community Wolf today and <span className="text-red-500">make your community safer!</span>
                    </CardTitle>
                  </CardHeader>
                  <CardDescription className="text-muted-foreground text-md mt-4 mb-8">
                    Try Wolf now and be part of a safer future. Start reporting incidents via WhatsApp and empower your community.
                  </CardDescription>
                  {/* Button moved under description */}
                  <div className="space-y-4">
                    <Button 
                      className="w-full md:mr-4 md:w-auto"
                      onClick={() => window.open('https://wa.me/+447488879934/?text=Hey%20Wolf%2C%20I%27m%20new%20around%20here.%20What%20do%20I%20need%20to%20do%20to%20get%20started%3F%20', '_blank')}
                    >
                      Talk to Wolf today 💬
                    </Button>
                  </div>
                </div>
            {/* Image added above the buttons */}
            <div className="lg:col-start-2">
              <img
                src="https://res.cloudinary.com/dkbn21xdu/image/upload/v1725651459/Screenshot_2024-09-06_at_20.37.34_qdhzd6.png" // Replace with the actual path to your image
                alt="Wolf Safety Map"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

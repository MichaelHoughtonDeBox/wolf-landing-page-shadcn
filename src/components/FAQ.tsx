import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}


// Define the list of Frequently Asked Questions for the FAQ section
const FAQList: FAQProps[] = [
  // Existing frequently asked questions
  {
    question: "Is Wolf free?",
    answer:
      "Yes. Wolf's services are free. Simply send a WhatsApp message or voice note and Wolf will do the rest.",
    value: "item-1",
  },
  {
    question: "Where does Wolf operate?",
    answer:
      "Wolf is multi-lingual and has the ability to process reports around the world. Wolf is, however, most powerful where community engagement is highest.",
    value: "item-3",
  },
  {
    question: "Who started Wolf?",
    answer:
      "Wolf was built by South Africans who want to leverage the power of artificial intelligence to aid in crime prevention. Wolf is on a mission to bring together the power of community vigilance and armed response teams to reduce criminal activity.",
    value: "item-4",
  },
  // New frequently asked questions added based on the provided instructions
  {
    question: "How do you make money?",
    answer:
      "While Wolf is a commercial enterprise, we don't anticipate generating revenue for the first six months. We have raised venture capital funding to support our mission as we build out the software stack that will help make communities safer.",
    value: "item-5",
  },
  {
    question: "Are you VC-backed?",
    answer:
      "Yes, Wolf is backed by the Baobab Network, which is the largest early-stage investor in Africa.",
    value: "item-6",
  },
  {
    question: "Where is Wolf based?",
    answer:
      "We have a holding company in the UK, but our main operations take place in Southern Africa, where our subsidiary is located.",
    value: "item-7",
  },
  {
    question: "Is Wolf going to go global?",
    answer:
      "Yes, Wolf's goal is to expand across the world, starting with countries that share similarities with South Africa, such as Brazil, Colombia, and Mexico.",
    value: "item-8",
  },
  {
    question: "Is Wolf going to build software outside of WhatsApp?",
    answer:
      "Yes, Wolf will be building a software stack that all private security and public safety initiatives will eventually run on top of. All data that flows through the Wolf WhatsApp channels will feed this model, enabling more efficient and better public safety initiatives.",
    value: "item-9",
  },
  // Additional frequently asked questions to address common concerns
  {
    question: "How does Wolf protect user privacy?",
    answer:
      "Wolf values your privacy. All reports are anonymous, and we do not collect any personal identifying information unless voluntarily provided.",
    value: "item-10",
  },
  {
    question: "Which languages does Wolf support?",
    answer:
      "Wolf supports multiple languages, including English, Zulu, Xhosa, Shona, Tshivenda, Afrikaans, and more.",
    value: "item-11",
  },
  {
    question: "How does Wolf use artificial intelligence?",
    answer:
      "Wolf leverages AI and machine learning to analyze patterns, predict potential safety concerns, and aid in crime prevention.",
    value: "item-12",
  },
  {
    question: "Can anyone use Wolf?",
    answer:
      "Yes, anyone with access to WhatsApp can use Wolf to report incidents anonymously and help make their community safer.",
    value: "item-13",
  },
  {
    question: "Why is Wolf focusing on WhatsApp?",
    answer:
      "WhatsApp is widely used in South Africa, with over 30 million registered users, making it the ideal platform to reach and empower communities.",
    value: "item-14",
  },
  {
    question: "How can Wolf help my community?",
    answer:
      "By consolidating community safety data and using AI, Wolf helps create positive safety outcomes, working with community leaders, ward councillors, and security providers.",
    value: "item-15",
  },
  {
    question: "Is Wolf affiliated with any government agencies?",
    answer:
      "No, Wolf is an independent commercial enterprise. However, we collaborate with community leaders and security providers to enhance public safety.",
    value: "item-16",
  },
  {
    question: "How can I contribute to Wolf's mission?",
    answer:
      "You can contribute by reporting incidents via WhatsApp, spreading the word about Wolf, and engaging with your community to enhance safety awareness.",
    value: "item-17",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <Card className="shadow-xl">
        <CardContent className="px-6 py-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions 🐺
          </h2>

          {/* Using the Accordion component from shadcn/ui */}
          <Accordion type="single" collapsible className="w-full">
            {FAQList.map(({ question, answer, value }: FAQProps) => (
              <AccordionItem key={value} value={value} className="border-b">
                <AccordionTrigger className="py-4 px-6">{question}</AccordionTrigger>
                <AccordionContent className="py-4 px-6">{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

    </section>
  );
};

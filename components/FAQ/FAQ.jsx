import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="flex flex-col w-full md:p-10 p-4">
      <div className="w-full mx-auto">
        <div className="flex flex-col">
          <span className="text-2xl font-bold font-sans">D.U.K.</span>
          <span className="text-xs text-gray-500 font-sans font-semibold">
            Dažniausiai užduodami klausimai
          </span>
        </div>
      </div>

      <div className="flex mx-auto md:w-2/5 w-full border border-gray-200 dark:border-gray-800 shadow-lg rounded-md mt-2">
        <Accordion type="single" collapsible className="w-full p-4">
          <AccordionItem value="1">
            <AccordionTrigger>Ar atvykstate į vietą?</AccordionTrigger>
            <AccordionContent>
              <span className="font-bold">Taip.</span> Stengiamės, kad
              kiekvienam klientui būtų patogu ir nereikėtų rūpintis įrenginio
              transportavimu.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="2">
            <AccordionTrigger>
              Ar pas jus galima įsigyti naują įrenginį?
            </AccordionTrigger>
            <AccordionContent>
              <span className="font-bold">Taip.</span> Mes prekiaujame ne tik
              kompiuteriais ar spausdintuvais. Galime Jums pasiūlyti įvairių
              prekių. <br /> Taip pat ir naujų/naudotų kompiuterių,
              spausdintuvų, monitorių ir t.t.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="3">
            <AccordionTrigger>
              Ar galite prijungti naują spausdintuvą?
            </AccordionTrigger>
            <AccordionContent>
              <span className="font-bold">Taip.</span> Mes galime pasirūpinti
              viskuom, nuo spausdintuvo pardavimo iki prijungimo.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="4">
            <AccordionTrigger>
              Ar prekiaujate spausdintuvų kasetėmis?
            </AccordionTrigger>
            <AccordionContent>
              <span className="font-bold">Taip.</span> Viena iš mūsų įmonės
              veiklų yra prekyba spausdintuvų kasetėmis, spausdinimo popieriumi
              bei eksploatacinėmis medžiagomis.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="5">
            <AccordionTrigger>
              Ar teikiate paslaugas ne darbo dienomis/laiku?
            </AccordionTrigger>
            <AccordionContent>
              <span className="font-bold">Taip.</span> Klientai turintys IT
              aptarnavimo sutartį yra aptarnaujami ir ne darbo dienomis/laiku.{" "}
              <br /> Klientai be sutarties atskiru susitarimu taip pat gali
              kreiptis dėl paslaugos suteikimo ne darbo dienomis/laiku.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="6">
            <AccordionTrigger>
              Ar jūsų pirminė diagnostika yra nemokama?
            </AccordionTrigger>
            <AccordionContent>
              <span className="font-bold">Taip.</span> Jeigu įrenginį
              remontuosite arba įsigysite kitą pas mus.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;

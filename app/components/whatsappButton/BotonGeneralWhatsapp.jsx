import WhatsappFull from "@/public/icons/whatsappFull";

const WhatsAppButton = () => {
  const phoneNumber = "2613333899"; // Número en formato internacional sin el "+"
  const message = encodeURIComponent(
    "¡Hola! Estoy interesado en más información acerca de "
  );

  return (
    <section className="fixed flex items-center justify-center z-50">
      <div className="z-40 min-w-6 fixed bottom-10 right-8 w-[6vw] h-[6vw] items-center justify-center transition-colors duration-300 rounded-full animate-pulse-scale-die bg-green-400"></div>
        <a
          href={`https://wa.me/${phoneNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="z-50 fixed bottom-10 right-8 w-[6vw] h-[6vw] flex items-center justify-center"
        ><WhatsappFull/></a>
    </section>
  );
};

export default WhatsAppButton;

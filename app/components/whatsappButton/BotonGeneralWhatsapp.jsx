import WhatsappFull from "@/public/icons/whatsappFull";

const WhatsAppButton = () => {
  const phoneNumber = "542615782398"; // Número en formato internacional sin el "+"
  const message = encodeURIComponent(
    "¡Hola! Estoy interesado en más información acerca de "
  );
  return (
    <section className="fixed bottom-20 right-8 w-[6vw] h-[6vw] flex items-center justify-center z-50">
      <div className="flex items-center justify-center ">
        <div className="absolute w-10 h-10 lg:w-16 lg:h-16 z-40 transition-colors duration-300 rounded-full animate-pulse-scale-die bg-green-400"></div>
        <a
          href={`https://wa.me/${phoneNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute w-10 h-10 lg:w-16 lg:h-16 z-50 -translate-x-[1.25px] translate-y-[1.25px] lg:-translate-x-[2px] lg:translate-y-[2px] items-center justify-center"
        >
          <WhatsappFull />
        </a>
      </div>
    </section>
  );
};

export default WhatsAppButton;

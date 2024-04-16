"use client";
import { useRef } from "react";
import Image from "next/image";
import styles from "./contact.module.css";

// export const metadata = {
//   title: "Contact Page",
//   description: "Contact description",
// };

const ContactPage = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      message: messageRef.current.value,
    };

    const whatsappMessage = `Nombre: ${formData.name}%0AEmail: ${formData.email}%0ATeléfono: ${formData.phoneNumber}%0AMensaje: ${formData.message}`;
    const whatsappUrl = `https://wa.me/+50662558356?text=${whatsappMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            ref={nameRef}
            placeholder="Name and Surname"
          />
          <input type="text" ref={emailRef} placeholder="Email Address" />
          <input
            type="text"
            ref={phoneNumberRef}
            placeholder="Phone Number (Optional)"
          />
          <textarea
            ref={messageRef}
            placeholder="Message"
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
